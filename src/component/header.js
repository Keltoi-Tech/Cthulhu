import { define, trait } from "../component"
import { HamburgerMenu } from "./hamburger"
import { SearchButton } from "./search";
import { SideMenu } from "./sideMenu";

define(HamburgerMenu);
define(SideMenu);
define(SearchButton);
export const Header=()=>{
    const sideMenu = new SideMenu()
    const search = new SearchButton();
    return {
        hamburgerMenu:{
            attributes:{
                border:false,
                backgroundColor:'black',
                stripeColor:'white'
            },
            sideMenu,
            events:{
                click:()=>sideMenu.status(true)
            }
        },
        search
    }
}