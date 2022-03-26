import { Cthulhu } from "../cthulhu.js";

export class Wrap extends Cthulhu{
    constructor(){
        super({
            article:{
                style:{
                    display:'flex',
                    flexDirection:'row'
                }
            }
        });
    }

    set element(e){
        this.doom.article.element = e;
    }
}