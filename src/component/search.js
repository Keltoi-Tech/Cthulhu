import { HtmlComponent } from "../component";
import css from './css/searchButton.css';

export class SearchButton extends HtmlComponent{
    constructor(){
        super();
        this.template={
            style:{
                content:css
            },
            div:{
                button:{
                    content:String.fromCodePoint(128270)
                }
            }
        }
    }
}