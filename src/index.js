import { Routing } from "./routing";
import { component, trait } from "./component";
import { entry } from "./view";
import { Header } from "./component/header";
import { Article } from "./trait/article";
import { Select } from "./trait/select";

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

const AppMain=(name)=>{
    alert(name[1])
    var initial = trait(Article,{component:Select,param:cursos});
    return {
        header:trait(Header),
        br:[{}],
        para:initial
    }
}


entry(new Routing(
    {
        index:()=>component(AppMain),
        fans:{
            index:(name)=>component(AppMain,name),
            params:['nome','tel']
        }
    }
));
