import {sampleHead} from '../crosscutting/head.js';
import {View} from '../view.js';
import { Card } from '../card/card.js';
import { Wrap } from '../card/wrap.js';

export class SampleView extends View{
    panel = new Wrap();
    text = new Wrap();
    constructor(){
        super({
            route:'/',
            head:sampleHead
        });

        this.panel.element = new Card('My First Cthulhu App','');
        this.text.element = new Card("There's a world out there","Cthulhu can provide a reliable and suitable framework");
    }
}