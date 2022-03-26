export const kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());

export class Cthulhu
{
    constructor(obj,e=null)
    {
        this.dom = !!e?e:new DocumentFragment();
        this.doom = obj;
    }

    child=(prop)=>{
        this[prop] = new Tentacle(this.doom[prop],prop);
        this[prop].call();
        this[prop].createOn(this.dom);
    }

    call=()=>
    {
        Object
        .keys(this.doom)
        .forEach(prop=>{
            if (this.doom[prop] instanceof Object)this.child(prop);
            else this[prop] = this.doom[prop];
        });
    }    

    createOn=(parent)=>{
        if (this.dom.firstChild==null)this.call();
        parent.appendChild(this.dom);
    }
}

export class Tentacle extends Cthulhu
{
    constructor(obj,e)
    {
        super(obj,document.createElement(e));
    }

    event=(prop)=>this.dom.addEventListener(prop,this.doom[prop]);

    dataName=()=>this.dom.setAttribute('data-name',this.doom['name']);

    dataIndex=()=>this.dom.setAttribute('data-index',this.doom['index']);

    attr=(prop)=>this.dom.setAttribute(kebabize(prop),this.doom[prop]);

    style=()=>
        Object
        .keys(this.doom.style)
        .forEach(s=>this.dom.style[s]=this.doom.style[s]);

    content=()=>this.dom.innerText = this.doom.content;

    childrenOfCthulhu=(prop)=>{
        this[prop]=[];
        this.doom[prop].forEach((e,i)=>{
            const child = new Cthulhu(e);
            child.call();
            this[prop].push(child);
            this[prop][i].createOn(this.dom);
        });
    }

    childOfCthulhu=(prop)=>{
        this[prop]=this.doom[prop];
        this[prop].call();
        this[prop].createOn(this.dom);
    }

    submit=(prop)=>{
        this[prop]=new Cthulhu(this.doom[prop]);
        this[prop].call();
        this[prop].createOn(this.dom);
    }

    call=()=>
    {
        Object
        .keys(this.doom)
        .forEach(prop=>{
            const typeName = typeof(this.doom[prop]);
            if (typeName=='function')this.event(prop);
            else{
                switch(prop){
                    case 'index':this.dataIndex();break;
                    case 'name':this.dataName();break;
                    case 'style':this.style(prop);break;
                    case 'content':this.content();break;
                    default: 
                        if (this.doom[prop] instanceof Cthulhu)
                            this.childOfCthulhu(prop);
                        else if (this.doom[prop] instanceof Object)
                            if (Array.isArray(this.doom[prop]))
                                this.childrenOfCthulhu(prop);
                            else
                                this.submit(prop);
                        else
                            this.attr(prop);
                }
            }
        });
    }
}