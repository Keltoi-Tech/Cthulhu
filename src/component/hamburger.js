import { HtmlComponent } from "../component";

const style={
    content:`
        div{
            padding:3px 5px;
            width:34px;
            transition:transform 1s;
        }
        
        div.bordered{
            border:1px solid black;
        }

        div.clicked{
            transform:rotate(90deg);
        }

        hr{
            border:1px solid black;
        }`
}

export class HamburgerMenu extends HtmlComponent{
    #clicked;
    constructor(){
        super();
        this.#clicked=false;
        this.template = {
            style,
            div:{
                events:{
                    click:()=>this.clickedUp()
                },
                attributes:{
                    class:''
                },
                hr:[{},{},{}]
            }
        };
    }

    clickedUp(){
        this.#clicked = !this.#clicked;
        const css = this.root.div.attributes['class'];
        if (this.#clicked){
            this.root.div.setAttribute('class',`${css} clicked`);
        } else { 
            this.root.div.setAttribute('class',css.replace(' clicked',''))
        }
        this.root.div.build();
    }

    set border(state = false){
        this.root.div.setAttribute('class',state?"bordered":"");
    }

    set backgroundColor(color = ''){
        this.root.div.setAttribute('style',color===''?'':`background-color:${color}`);
    }

    set stripeColor(color = ''){
        this.root.div.hr[0].setAttribute('style',color===''?'':`border-color:${color}`);
        this.root.div.hr[1].setAttribute('style',color===''?'':`border-color:${color}`);
        this.root.div.hr[2].setAttribute('style',color===''?'':`border-color:${color}`);
    }

    connectedCallback(){
        super.connectedCallback();

        this.style.width = "fit-content";
        this.style.display = "flex";

        this.border = this.getAttribute('border')==='true';
        this.backgroundColor = this.getAttribute('background-color');
        this.stripeColor = this.getAttribute('stripe-color');
    }

    static get observedAttributes(){
        return ['border','background-color','stripe-color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!!oldValue){
            switch(name){
                case 'border':{
                    this.border = newValue;
                };break;
                case 'background-color':{
                    this.backgroundColor = newValue;
                };break;
                case 'stripe-color':{
                    this.stripeColor = newValue
                };break;
            }
            this.root.div.build();
        }
    }
}