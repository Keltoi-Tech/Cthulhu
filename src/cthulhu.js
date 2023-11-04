import { Core } from "./core";

export class Cthulhu{
    #engine;
    #element;
    #template;

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

        this
        .#engine
        .build(template,param)
        .then(core=>{
            this.#element=core.element
            this.#template = core.template
            return core.props
        })
        .then(props=>Object.assign(this,props))
    }

    get template(){return this.#template}
    set template(value){this.#template=value}

    get engine(){return this.#engine}
    
    get element(){return this.#element}
    set element(value){this.#element=value;}

    async change(){return this.#engine.change(this)}
}