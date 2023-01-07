import { AppMain } from "../app/main";
import { Routing, component } from "cthulhu-rlyeh";

export const route = new Routing(
    {
        index:(p=null,s={})=>component(AppMain,s),
        master:true
    }
);