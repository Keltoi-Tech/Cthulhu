import { trait } from "../component";
import { FooterMenu } from "../component/footer";
import { Header } from "../component/header";
import { Article } from "../trait/article";
import { Input } from "../trait/input";
import { Select } from "../trait/select";

export const AppMain=(sub={})=>{


    var initial = Object.keys(sub).length==0
                    ?trait(Article,{component:Select,param:
                        ['Ukulele','Bateria','Piano','Violão','Baixo']
                        .map(
                            curso=>{return {value:curso,content:curso}}
                        )
                    })
                    :trait(Article,{component:Input,param:{type:'text',placeholder:'Nada'}});
    return {
        header:trait(Header),
        br:[{}],
        para:initial,
        footer:trait(FooterMenu)
    }
}