import { Route } from './cthulhu/route.js';
import { IndexUI } from './ui/index.js';

let route = new Route({
    index:()=>new IndexUI()
});

window.addEventListener('unload',()=>{route=null;});