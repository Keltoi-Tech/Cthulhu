import { Routing } from "./routing";
import { component, trait } from "./component";
import { compose, entry} from "./view";
import { Header } from "./component/header";
import { Article } from "./trait/article";
import { Select } from "./trait/select";
import indexCss from './css/index.css';
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



const cursos = ['Ukulele','Bateria','Piano','Violão','Baixo'].map(curso=>{return {value:curso,content:curso}});

const AppMain=(sub={})=>{
    alert(sub);
    var initial = trait(Article,{component:Select,param:cursos});
    return {
        header:trait(Header),
        br:[{}],
        para:initial
    }
}

const Style=()=>{
    return{
        content:indexCss
    }
}

entry(new Routing(
    {
        index:()=>component(AppMain),
        fans:{
            index:(p=null,s={})=>component(AppMain,s),
            master:true,
            root:{
                index:(o)=>trait(AppMain,o).build
            }
        }
    }
));
compose(()=>trait(Style).build());
