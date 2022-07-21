export class Cthulhu{
    #element = new DocumentFragment();
    #content = undefined|'';
    #attributes=undefined|new Map();
    #events = undefined|new Map();
    #eventsToRemove=new Map();
    #state={
        content:false,
        attributes:new Map(),
        events:new Map()
    };

    get element(){
        return this.#element;
    }

    get content(){
        return this.#content;
    }

    set content(value=''){
        this.#content = value;
        this.#state.content = true;
    }

    get attributes(){
        return Object.fromEntries(this.#attributes);
    }

    set attributes(value={}){
        const attr = Object.entries(value);
        for (const [prop,val] of attr)
            this.setAttribute(prop,val);
    }

    removeAttribute=(name='')=>{
        this.#attributes.delete(name);
        this.#state.attributes.set(name,true);
    }

    setAttribute=(name='',value)=>{
        if (this.#attributes===0) this.#attributes = new Map();
        this.#attributes.set(name,value);
        this.#state.attributes.set(name,true);
    }

    get events(){
        return Object.fromEntries(this.#events);
    }

    set events(value={}){
        const ev = Object.entries(value);
        for (const [prop,val] of ev)
            this.addEvent(prop,val);
    }

    addEvent=(name='',event=()=>{})=>{
        this.#events.set(name,event);
        this.#state.events.set(name,true);
    }

    removeEvent=(name='')=>{
        this.#eventsToRemove.set(name,this.#events.get(name))
        this.#events.delete(name);
        this.#state.events.set(name,true);
    }

    remove=(child='',index=0)=>{
        if (this[child] instanceof Array)
            this.#element.removeChild(this[child][index].element);
        else 
            this.#element.removeChild(this[child].element);
    }

    append=async (o={})=>{
        const map = new Map(Object.entries(o));

        for(const [prop,e] of map)
        {
            if (Array.isArray(map.get(prop))){
                this[prop] = e.map(sub=>sub instanceof Cthulhu?sub:new Cthulhu(sub,prop));
                this[prop].forEach(async p=>this.#element.appendChild(await p.build(true)));
            }
            else 
            {
                this[prop] = e instanceof Cthulhu?e:new Cthulhu(e,prop);        
                this.#element.appendChild(await this[prop].build(true));
            }
        }
    }

    constructor(o={},name=''){
        const map = new Map(Object.entries(o));

        if (name!='')this.#element = document.createElement(name);

        if (map.has('content')){
            this.#content= map.get('content');
            this.#state.content= true;
            map.delete('content');
        }

        if (map.has('events')){
            this.#events = new Map(Object.entries(o.events));
            for (const ev of this.#events.keys())
                this.#state.events.set(ev,true)
            map.delete('events');
        }        

        if (map.has('attributes')){
            this.#attributes = new Map(Object.entries(o.attributes));
            for(const attr of this.#attributes.keys())
                this.#state.attributes.set(attr,true);
            map.delete('attributes');
        }

        for(const [prop,e] of map)
            Array.isArray(map.get(prop))
                ?this[prop] = e.map(sub=>sub instanceof Cthulhu?sub:new Cthulhu(sub,prop))
                :this[prop] = e instanceof Cthulhu?e:new Cthulhu(e,prop);
    }

    async build(compose=false){
        if (this.#state.content){
            this.#element.textContent = this.#content;
            this.#state.content = false;
        }

        for (const [key,value] of this.#state.attributes){
            if (value){
                if (this.#attributes.has(key))
                {
                    this.#element.setAttribute(key,this.#attributes.get(key));
                    this.#state.attributes.set(key,false);
                }
                else
                {
                    this.#element.removeAttribute(key); 
                    this.#state.attributes.delete(key);
                }
            }
        }

        for (const [key,value] of this.#state.events){
            if (value){
                if (this.#events.has(key)){
                    this.#element.addEventListener(key,this.#events.get(key));
                    this.#state.events.set(key,false);
                }
                else
                {
                    this.#element.removeEventListener(key,this.#eventsToRemove.get(key));
                    this.#eventsToRemove.delete(key);
                    this.#state.events.delete(key);
                }
            }
        }

        const props = Object.keys(this);

        props
        .filter(o=>this[o] instanceof Cthulhu)
        .map(async o=>{
            const ne = await this[o].build(compose)
            if (compose)this.#element.appendChild(ne);
        });

        props
        .filter(o=>this[o] instanceof Array)
        .forEach(o=>
            this[o].forEach(
                async e=>{
                    const ne = await e.build(compose);
                    this.#element.appendChild(ne)
                }
            )
        );

        return this.#element;
    }
    
}