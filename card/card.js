import {Cthulhu} from '../cthulhu.js'

export class Card extends Cthulhu{
    constructor(header,content){
        super({
            div:{
                heading:{
                    header:{
                        class:'card header',
                        text:{
                            h1:{
                                content:header
                            }
                        }
                    }
                },  
                section:{
                    p:{
                        class:'card section',
                        content:content
                    }
                }
            }
        })
    }

    set headerContent(h){
        this.doom.div.heading.header.text.h1.content = h;
    }

    set sectionContent(c){
        this.doom.div.section.p.content = c;
    }
}