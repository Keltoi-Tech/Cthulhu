import { Service } from './service.js';
import {JsonTemplate} from './template.js';
import { View } from './view.js';

export class Component{
    constructor(param=undefined){
        if (param instanceof Service)
            param.get(json=>{
                if(!!this.onLoad)json=this.onLoad(json);
                this.template=new JsonTemplate(json);
            });
        else
            this.template = new JsonTemplate(param);
    }

    build(param=undefined){
        let view =  new View({
            template:this.template,
            events:this.events
        });

        if (!!param){
            if (!!param.css){
                view.setAttribute({
                    name:'class',
                    value:param.css()
                });
            }

            if (!!param.style){
                view.setStyle({
                    content:param.style
                });
            }   
        }

        return view;
    }

    
}

export class ComponentSet{
    constructor(){

    }
}