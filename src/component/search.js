import { HtmlComponent } from "../component";
import css from './css/searchButton.css';
import img from './img/search.svg';

export class SearchButton extends HtmlComponent
{
    #value='';
    constructor(){
        super();
        this.template={
            style:{
                content:css
            },
            div:{
                attributes:{
                    class:"cover"
                },
                div:[
                    {
                        attributes:{
                            class:'icon-cover'
                        },
                        img:{
                            attributes:{
                                src:img
                            }
                        }
                    },   
                    {
                        hr:{}
                    },                 
                    {
                        input:{
                            attributes:{
                                type:'text',
                                placeholder:'Search...'
                            },
                            events:{
                                input:(e)=>{
                                    this.#value = e.target.value;
                                }
                            }
                        }
                    }

                ]
            }
        }        
    }

    get text(){
        return this.#value;
    }

    set text(value=''){
        this.#value = value;
    }

    connectedCallback(){
        super.connectedCallback();

        this.style.width = "fit-content";
        this.style.display = "flex";
    }

    static get observedAttributes(){
        return ['placeholder'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
            switch(name){
                case 'placeholder':{
                    if (!!oldValue)
                        this.root.div.div[2].input.setAttribute('placeholder',newValue);
                    else 
                        this.template.div.div[2].input.attributes.placeholder = newValue;
                };break;
            }

            if (!!oldValue){
                this.root.div.div[2].input.build();
            }
    }    
}