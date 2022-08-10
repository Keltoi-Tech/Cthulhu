import { Routing } from "./routing";
import { component, define } from "./component";
import { entry } from "./view";
import { HamburgerMenu } from "./component/hamburger";

define(HamburgerMenu)
const AppMain=()=>{
    return {
        header:{
            hamburgerMenu:{
                attributes:{
                    border:true,
                    backgroundColor:'transparent',
                    stripeColor:'black'
                },
                events:{
                    click:(e)=>{
                    }
                },
                article:{

                }
            },
            h1:{
                content:'Aaaaa'
            }
        }
    }
}

entry(new Routing({
    index:()=>component(AppMain)
}));
