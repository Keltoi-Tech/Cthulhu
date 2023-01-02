import { component, trait } from "../component";
import { Footer, FooterIconGroup, FooterImageItem, FooterItem, FooterListGroup, FooterMenu } from "../component/footer";
import { Header } from "../component/header";
import { MainContent } from "../component/mainContent";

import iconFace from './img/facebook.png';
import iconInsta from './img/instagram.png';

const rlyeh=()=>alert("Cthulhu fhtagn ph'nglui mglw'nafh cthulhu r'lyeh wgah'nagl fhtagn")
const fans=()=>alert('BRRRRRRRR');

const ft=new Footer
(
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    [
        new FooterListGroup('CTHULHU',[
            new FooterItem('Fhtagn',rlyeh),
        ]),
        new FooterListGroup('FANS',[
            new FooterItem('Spinning',fans),
            new FooterItem('Wind',fans),
            new FooterItem('Storm',fans)
        ]),
        new FooterListGroup('ICONS BY',[
            new FooterItem(
                'SOCIAL MEDIA ICONS CREATED BY Freepik - Flaticon',
                ()=>"https://www.flaticon.com/free-icons/facebook",
                "facebook icons",
                true
            )
        ]),
        new FooterIconGroup('SOCIAL MEDIA',[
            new FooterImageItem(iconFace,()=>{}),
            new FooterImageItem(iconInsta,()=>{})
        ])
    ]
);

export const AppMain=(sub={})=>{
    let initial = Object.keys(sub).length==0
                    ?component(MainContent)
                    :sub.routing.index()
    return {
        style:{
            content:`
                header{position:fixed;width:100%;height:89px;background:white;z-index:1;} 
                section.jump{height:89px}
            `
        },
        header:trait(Header),
        section:{
            attributes:{class:'jump'}
        },
        page:initial,
        footer:component(FooterMenu,ft)
    }
}