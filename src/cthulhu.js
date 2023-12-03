import { Core } from "./core.js";

export class Cthulhu{
    #engine;
    #element;
    #template;
    #param;

    static instance(template,param={},engine={
        build:async(t,p)=>new Core(),
        change:async(self)=>{}
    }){
        return new Cthulhu(template,param,engine);
    }

    constructor(template,param={},engine={
        build:async(t,p)=>new Core(),
        change:async(self)=>{}
    }){
        this.#engine = engine
        this.#template = template;
        this.#param = param;
    }

    get template(){return this.#template}
    set template(value){this.#template=value}

    get engine(){return this.#engine}
    
    get element(){return this.#element}
    set element(value){this.#element=value;}

    build=async ()=>
        this
        .#engine
        .build(this.#template,this.#param)
        .then(core=>{
            this.#element=core.element
            Object.assign(this,core.props)
            return this
        })

    change=async()=>this.#engine.change(this)
}