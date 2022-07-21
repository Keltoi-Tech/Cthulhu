import { component } from "./model"
import { Routing } from "./routing";
import { view } from "./view";

export const display=
async (service={
    name:'',
    list:['']|undefined,
    routing:new Routing
})=>
    component({
        h1:{
            content:service.name
        },
        ul:{
            li:service.list?.map(e=>{
                return {
                    content:e,
                    event:{
                        click:()=>view(service.routing.to('/produtos').index)
                    }
                }
            })
        }
    });
