import { Cthulhu } from "./cthulhu";

const c = new Cthulhu({
    h1:{
        content:'Bem vindos à Cidosoft'
    },
    ul:{
        li:[
            {
                content:'Opção 1',
                events:{
                    click:async ()=>{
                        c.h1.content="Bem vindo o caraleo";
                        c.h1.attributes={
                            style:'color:rgb(255,255,0)'
                        }
                        await c.h1.build();

                        c.ul.remove('li',0);
                        c.ul.append({
                            li:[
                                {content:'Mais uma opção'}
                            ]
                        })
                    }
                }
            },
            {content:'Opção 2'},
            {content:'Opção 3'},
            {content:'Opção 4'}
        ]
    }
})

c.build(true)
.then(o=>document.body.appendChild(o))

/*import { display } from "./display";
import { Routing } from "./routing";
import {view} from './view';

const index=()=>
    display({
        name:'Página principal',
        list:['Produtos','Serviços','Itens'],
        routing:routing
    });

const produtos=()=>
    display({
        name:'Produtos',
        list: ['Hydra','Cthulhu','Business Module'],
        routing:routing
    });

const camisas=()=>
    display({
        name:'Camisas',
        list:['Curta','Social','Polo'],
        routing:routing
    });

const routing = new Routing({
    index:index,
    produtos:{
        index:produtos,
        camisas:{
            index:camisas
        }
    }
});

window.onpopstate=()=>view(routing.to(window.location.pathname).index);
view(routing.to(window.location.pathname).index);

console.log(window.location.pathname)


console.log(
    window.location.pathname.split('/')
    .map((w,i)=>i==1?w:w.charAt(0).toUpperCase()+w.slice(1))
    .join('')
)

*/
