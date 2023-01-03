import { AppMain } from "../app/main";
import { component } from "../component";
import { Routing } from "../routing";

export const route = new Routing(
    {
        index:(p=null,s={})=>component(AppMain,s),
        master:true
    }
);