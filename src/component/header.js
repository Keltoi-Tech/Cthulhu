import { component, define, trait } from "../component"
import { HamburgerMenu } from "./hamburger"
import { SearchButton } from "./search";
import { SideMenu } from "./sideMenu";
import {ThumbnailImg } from "./thumbnail";
import { Div } from "../trait/div";

import tmb from './css/thumbnail.css';
import css from "./css/header.css";
import img from "./img/cthulhu.png";

define(HamburgerMenu);
define(SideMenu);
define(SearchButton);

const sideMenu = component(SideMenu,[
    {
        div:[
            {
                attributes:{
                    style:'flex:1'
                },
                thumbnail:component(ThumbnailImg,{
                    css:tmb,
                    src:img,
                    alt:'Cthulhu'
                })
            },
            {
                attributes:{
                    style:'flex:2'
                },
                span:{
                    content:'Powered by Cthulhu'
                }
            }
        ]
    },
    {
        attributes:{class:"separator"}
    },
    {
        ul:{
            li:[
                {content:'How it works'},
                {content:'Who we are'}
            ]
        }
    }
]);

const MainHamburgerMenu=()=>{
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
        }
    }
}

export const Header=()=>{
    return {
        style:{
            content:css
        },
        nav:{
            aside:{
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
                }
            },
            div:[
                {
                    h1:{
                        content:'Only Fans'
                    }
                },
                {
                    attributes:{
                        class:'search'
                    },
                    article:{
                        searchButton:{
                            attributes:{
                                style:'justify-self:right'
                            }
                        }
                    }
                }
            ]
        },
        hr:[{}],
    }
}