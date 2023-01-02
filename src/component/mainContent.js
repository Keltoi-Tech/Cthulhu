import { trait } from "../component";
import { Div } from "../trait/div";
import { DisplayImage } from "./displayImage";

import img from "../component/img/fan.jpg";
import css from "./css/mainContent.css";

const onlyFans=()=>alert('only fans...( ͡° ͜ʖ ͡°)');

export const MainContent=()=>{
    return {
        style:{
            content:css
        },
        section:{
            attributes:{class:"display"},
            div:[
                {
                    attributes:{class:'display'},
                    h2:{
                        content:'If you´re looking for fun'
                    }                    
                },
                {
                    attributes:{class:'display half'},
                    h2:{
                        content:'the fun awaits you here'
                    }
                },
                {
                    attributes:{class:'display half'},
                    h2:{
                        content:'because we have ONLY fans'
                    }
                }
            ]
        },
        article:{
            attributes:{
                class:'display'
            },
            leftOne:trait(Div,{component:DisplayImage,param:
                {
                    image:{
                        src:img,alt:'Only Fan'
                    },
                    callback:onlyFans
                }
            }),
            centerOne:trait(Div,{component:DisplayImage,param:
                {
                    image:{
                        src:img,alt:'Only Fan'
                    },
                    callback:onlyFans
                }
            }),
            rightOne:trait(Div,{component:DisplayImage,param:
                {
                    image:{
                        src:img,alt:'Only Fan'
                    },
                    callback:onlyFans
                }
            })
        }   
    };
}