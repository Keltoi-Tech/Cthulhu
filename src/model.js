import { Cthulhu } from "./cthulhu";

export const kek=(t='')=>t.replace(/[A-Z]/g,(m,i)=>i==0?m:`-${m.toUpperCase()}`);

export const component=(o={},name='')=>new Cthulhu(o,name,true);

export const element=(o={},name='')=>new Cthulhu(o,name);

export const template=(o={},id='')=>{
    new Cthulhu({
        template:{
            attributes:{
                id:id
            },
            o
        }
    })
    .build(true)
    .then(element=>document.body.appendChild(element));
}

export class HTMLComponent extends HTMLElement{
    #element;
    #root;
    #isBuild=false;
    constructor(o={}){
        this.#element = this.attachShadow({mode:'closed'});
        this.#root = new Cthulhu(o);
    }

    connectedCallback(){
        this.#root.build(true).then(e=>{
            if (this.#isBuild)this.#element.appendChild(e);
            this.#isBuild=true;
        });
    }

    disconnectedCallback(){
        this.#root.dispose();
    }
}