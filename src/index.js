import indexCss from './css/index.css';
import { compose, entry} from "./view";
import { route } from "./misc/route";
import { Style } from "./trait/style";
import { trait } from "./component";
/*const Select=()=>{
    return {
        option:[
            {
                attributes:{value:'Piano'},
                content:'Piano'
            },
            {
                attributes:{value:'Violão'},
                content:'Violão'
            },
            {
                attributes:{value:'Guitarra'},
                content:'Guitarra'
            },
            {
                attributes:{value:'Baixo'},
                content:'Baixo'
            },
            {
                attributes:{value:'Canto'},
                content:'Canto'
            },
            {
                attributes:{value:'Musicalização Infantil'},
                content:'Musicalização Infantil'
            },
            {
                attributes:{value:'Teclado'},
                content:'Teclado'
            },
            {
                attributes:{value:'Ukulele'},
                content:'Ukelele'
            },
            {
                attributes:{value:'Bateria'},
                content:'Bateria'
            },
        ]
    }
}*/

entry(route);
compose(()=>trait(Style,indexCss).build());
