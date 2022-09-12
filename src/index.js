import { Routing } from "./routing";
import { component, trait } from "./component";
import { entry } from "./view";
import { Header } from "./component/header";

const AppMain=()=>{
    return {
        header:trait(Header)
    }
}

entry(new Routing({
    index:()=>component(AppMain)
}));
