import { trait } from "../../component";
import { Article } from "../article/article";
import { Header } from "../header/header";
import css from '../article/article.css';

export const MainContent=()=>{

    return {
        style:{
            content:css
        },
        h:trait(Header),
        b:trait(Article)
    }
}