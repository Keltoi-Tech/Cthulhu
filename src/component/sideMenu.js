import { HtmlComponent } from "../component";
import css from './css/sideMenu.css';

export class SideMenu extends HtmlComponent{
    constructor(){
        super();
        this.template={
            style:{
                content:css
            },
            aside:{
                attributes:{
                    class:'inactive'
                },
                span:[
                    {
                        content:String.fromCodePoint(9746), 
                        events:{                                
                            click:(e)=>{
                                e.stopPropagation();
                                this.status(false)
                            }
                        }
                    }
                ]
            }
        }
    }

    connectedCallback(){
        super.connectedCallback();

        this.style.width = "fit-content";
    }

    static get observedAttributes(){
        return ['active'];
    }

    status=(s = false)=>{
        console.log(s)
        this.root.aside.setAttribute('class',s?'active':'inactive');
        this.root.aside.build();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!!oldValue && name=='active'){
            this.status(newValue=='true');
        }
    }    
}