import { Cthulhu } from "./cthulhu";
import { kek } from "./utils";

export class HtmlComponent extends HTMLElement{
    constructor(){
        super();
        this.template={};
        this.element = this.attachShadow({mode:'closed'});
    }

    disconnectedCallback(){
        this.root.dispose();
    }

    connectedCallback(){
        this.root = new Cthulhu(this.template);
        this.root.build(true).then(e=>this.element.appendChild(e));        
    }

    appendChild(node=new Node){
        this.element.appendChild(node);
    }
}

export const define=(type)=>{
    const name = kek(type.name);
    if (customElements.get(name)===undefined)customElements.define(name,type);
}

export const component = (func, param = null)=>{
    const name = kek(func.name);
    let elementInstance = customElements.get(name);
    if (elementInstance===undefined){
        customElements.define(name,
        class extends HtmlComponent{
            constructor(param = undefined){
                super();
                this.template = !!param?func(param):func();
            }
        });

        elementInstance = customElements.get(name);
    }

    return new elementInstance(param);
}

export const trait = (func,param = null) =>{
    const name = kek(func.name);
    return new Cthulhu(!!param?func(param):func(),name);
}