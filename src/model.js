
let prefix='app';

export const register=(name,component)=>customElements.define(`${prefix}-${name}`,component);

export const notIn=(e,...row)=>!row.includes(e);

const upperFinder=new RegExp("[A-Z]");

const kebab=(l,i)=>upperFinder.test(l) && i>0?`-${l.toLowerCase()}`:l;

export const kebabize=str=>str.split('').map((s,i)=>kebab(s,i)).join('');

class Fhtagn extends HTMLElement
{
    constructor(o){
        super();
        this.element = this.attachShadow({mode:'closed'});
        this.doom = o;
        cthulhu(this.element,this.doom);
    }
}

customElements.define('component-fthagn',Fhtagn);

const build=async (e,o,p)=>{
    if (Array.isArray(o[p]))
        o[p].forEach(async le=>{
            if (le instanceof (Fhtagn))
                e.appendChild(le);
            else 
                e.appendChild(await fhtagn(p,le))
        });
    else if(o[p] instanceof Fhtagn)
        e.appendChild(o[p]);
    else
        e.appendChild(await fhtagn(p,o[p]));
}

const doom=(o,e)=>{
    o.attr.recon=()=>{
        const k=Object.keys(o.attr);
        k.forEach(a=>{
            if (e.hasAttribute(a))
                if (o.attr[a]!=e.getAttribute(a))
                    e.setAttribute(a,o.attr[a]);
            else 
                e.setAttribute(a,o.attr[a]);
        });

        e
        .getAttributeNames()
        .filter(a=>!k.includes(a))
        .forEach(a=>e.removeAttribute(a));
    }
    
    o.event.add = ev=>e.addEventListener(ev,o.event[ev]);
    o.event.remove=ev=>e.removeEventListener(ev);

    o.recon=()=>{
        if (!!o.content)e.textContent=o.content;
    }

    o.build=async (s=undefined)=>{
        o.recon();
        o.attr.recon();

        const children=
            Object.keys(o)
            .filter(prop=>notIn(prop,'attr','event','content','recon','build','service'));

        if (children.length>0){
            e.textContent='';
            children.forEach(async prop=>await build(e,o,prop,s?s:undefined));
        }
    }

    return o;
}

const fhtagn=async (p,o)=>{
    let e = document.createElement(kebabize(p));

    if(!('attr' in o))o.attr={};

    if ('event' in o)
        Object
        .keys(o.event)
        .forEach(ev=>e.addEventListener(ev,o.event[ev]));
    else 
        o.event = {};

    o = doom(o,e);

    await o.build();

    return e;
}

export const component=(o)=>new Fhtagn(o);

export const cthulhu=async(p,o)=>{
    Object
    .keys(o)
    .forEach(async prop=>await build(p,o,prop));
}

export class Cthulhu extends HTMLElement{
    constructor(o,attrs){
        super();

        this.element = this.attachShadow({mode:'closed'});
        this.doom = o;
        this.attrs = attrs;
    }    

    static get observedAttributes(){return Object.keys(this.attr);}

    build(){}

    connectedCallbacks(){
        Cthulhu.observedAttributes.forEach(attr=>{
            this[attr]=this.getAttribute(attr);
        });
        cthulhu(this.element,this.doom);
    }

    attributeChangedCallback(name, oldValue, newValue) 
    {
        if (oldValue!=newValue && !!oldValue){
            this[attr] = this.getAttribute(name);
            this.build();
        }
    }

    disconnectedCallback(){
        this.doom = null;
        this.attrs = null;
    }    
}
