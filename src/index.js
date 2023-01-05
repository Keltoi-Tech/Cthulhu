import { entry, head} from "./view";
import { route } from "./misc/route";
import { trait } from "./component";
import css from './css/index.css';

const Style=()=>{
    return {
        content:css
    }
}

head(async ()=> await trait(Style).build());
entry(route);

