import {entry,head,trait} from 'cthulhu-rlyeh';
import { route } from "./misc/route";
import css from './css/index.css';

const Style=()=>{
    return {
        content:css
    }
}

head(async ()=> await trait(Style).build());
entry(route);

