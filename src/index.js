import { component } from './model';
import {view} from './view';

const routing=()=>{
    alert(window.location.pathname);
}

const display=()=>component(
    {
        h1:{
            content:'Goodbye fucking world!'
        },
        hr:{},
        p:[
            {content:'Cthulhu is coming'},
            {content:'Smile :)'}
        ]
    }
);

const displays=()=>component(
    [
        display(),
        display(),
        display(),
        display()
    ]
)

routing();
view(displays);