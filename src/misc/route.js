import { AppFans } from "../app/fans";
import { AppMain } from "../app/main";
import { component } from "../component";
import { Routing } from "../routing";

export const route = new Routing(
    {
        index:(p=null,s={})=>component(AppMain,s),
        master:true,
        fans:{
            index:(p=null,s={})=>component(AppFans,s),
        }
    }
);