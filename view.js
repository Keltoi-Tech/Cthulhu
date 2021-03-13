import { ViewModel } from "./viewModel.js";
import {Template} from './template.js';

export class View{
    constructor(param){
        if (param.template instanceof Template){
            this.node = param.template.createInstance();
            if (!!param.events){
                Object.keys(param.events).forEach(event=>{
                    let eventRaiser = param.events[event];
                    let e = !!eventRaiser.q?this.node.querySelector('[data-event=' + eventRaiser.q + ']'):this.node;
                    e.addEventListener(event,eventRaiser.callback);
                })
            }
        }else alert("It's a mistake! View parameter must be a template")
    }

    modeling=model=>{
        let modelName = Object.keys(model)[0];
        this.node.setAttribute('data-model',modelName);

        let fields = Object.keys(model[modelName]);
        let fieldsets = this.node.querySelectorAll('[data-field]');
        fieldsets.forEach((f,i)=>{
            let field = fields[i];
            f.dataset.field = field;
            f.querySelector('[data-scope]').dataset.scope=model[modelName][field];
        });
    }

    bindEvent=eventRaiser=>{
        let e = !!eventRaiser.q?this.node.querySelector('[data-event=' + eventRaiser.q + ']'):this.node;
        e.addEventListener(eventRaiser.event,eventRaiser.callback);
    }

    setAttribute=att=>{
        let e = !!att.q?this.node.querySelector(att.q):this.node;
        e.setAttribute(att.name,att.value);
    }

    setStyle=style=>{
        let e = !!style.q?this.node.querySelector(style.q):this.node;
        Object.keys(style.content).forEach(o=>e.style[o] = style.content[o]);
    }

    setModel=modelName=>this.node.setAttribute("data-model",modelName);

    query=q=>this.node.querySelector(q);

    asChildOf=parent=>parent.node.appendChild(this.node);

    into=parent=>parent.appendChild(this.node);

    getViewModel=()=>new ViewModel(this.node);   

    addTextContent=text=>{
        let e = !!text.q?this.node.querySelector(text.q):this.node;
        e.appendChild(document.createTextNode(text.content));
    }
}

export class ViewSet{
    constructor(context){
        this.context = context;
    }

    build=()=>{} 
}