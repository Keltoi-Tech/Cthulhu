import { AppMain } from "../app/main";
import { component, define, trait } from "../component";
import { Routing } from "../routing";

export const route = new Routing(
    {
        index:(p=null,s={})=>component(AppMain,s),
        master:true,
        fans:{
            index:(p=null,s={})=>component(AppMain,s),
            master:true,
            root:{
                index:(o)=>trait(AppMain,o).build
            }
        }
    }
);