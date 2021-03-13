import { Style } from "./style.js";

export class UI{
    constructor(name,parent=undefined){
        this.style = new Style(name);
        if (!!parent)this.parent = parent;
    }
    
    onBuild(){
        this.style.removeMe();
        this.style.update();
        if (!!this.parent){
            if (!!this.element)this.parent.element = this.element;
            this.parent.onBuild();
        }        
    }
}