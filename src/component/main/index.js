import { trait } from "../../component";
import { Article } from "../article";
import { Header } from "../header";
import css from './main.css';

export const MainContent=()=>{

    return {
        style:{
            content:css
        },
        h:trait(Header),
        b:trait(Article)
    }
}