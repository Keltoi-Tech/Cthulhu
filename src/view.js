import { Routing } from "./routing";

export const view=(instance=async()=>{})=>{
    document.body.innerHTML='';
    document.body.appendChild(instance());
};

export const entry=(routing=new Routing())=>{
    window.onpopstate=()=>view(routing.to(window.location.pathname).index);
    view(routing.to(window.location.pathname).index);
}