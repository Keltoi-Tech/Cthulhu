import { Style } from "./style.js";

export class UI{
    constructor(){
    }   

    init(order){
        
        if (!!this.css)new Style().define(this.css);
        order.forEach(component=>document.body.appendChild(this[component].element));
    }    
}