import { component, define, trait } from "../component"
import { HamburgerMenu } from "./hamburger"
import { SearchButton } from "./search";
import { SideMenu } from "./sideMenu";
import {ThumbnailImg } from "./thumbnail";
import { FooterMenu } from "./footer";

import tmb from './css/thumbnail.css';
import css from "./css/header.css";
import img from "./img/cthulhu.png";


define(HamburgerMenu);
define(SideMenu);
define(SearchButton);
export const Header=()=>{
    const thumb = component(ThumbnailImg,{
        css:tmb,
        src:img,
        alt:'Cthulhu'
    });

    const sideMenu = component(SideMenu,[
        {
            thumb,
            span:{
                content:'Cthulhu'
            }
        },
        {
            hr:{},
            ul:{
                li:[
                    {content:'How it works'},
                    {content:'Who we are'}
                ]
            }
        }
    ]);

    const footer = component(FooterMenu,{});

    return {
        style:{
            content:css
        },
        nav:{
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
            div:{
                attributes:{
                    class:"text"
                },
                h1:{
                    content:'CTHULHU'
                }
            },
            searchButton:{
                attributes:{
                    style:'justify-self:right',
                    placeholder:'Pesquisar...'
                }
            }
        },
        hr:[{}],
        section:{
            h1:{
                content:'Aaaaaa'
            }
        },
        footer
    }
}