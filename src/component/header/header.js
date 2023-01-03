import css from './header.css';
import logo from './assets/cthulhu-logo.png';

export const Header=()=>{
    return {
        style:{content:css},
        nav:{
            h1:{
                content:'Wellcome to Cthulhu!'
            },
            img:{
                attributes:{
                    class:'logo',
                    src:logo
                }
            }
        }
    }
}
