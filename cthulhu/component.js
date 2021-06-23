import { htmlEngine } from "./engine.js";

export class Component{
    constructor(e){
        this.element = htmlEngine(e);
    }

    init(){
        return this.element;
    }

    getModel=()=>{
        let object = {};
        let fields = this.element.querySelectorAll('[data-field]');

        fields.forEach(f=>object[f.dataset.field]=f.value);

        return object;
    }

    setModel=(object)=>{
        let fields = Object.keys(object);
        fields.forEach(field=>{
            let e = this.element.querySelector('[data-field=' + field + ']');
            e.value= object[field];
        });
    }
}