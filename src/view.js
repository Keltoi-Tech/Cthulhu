import { Routing } from "./routing";

export const view=(instance=async()=>{},param=undefined)=>{
    document.body.innerHTML='';
    document.body.appendChild(!!param?instance(param):instance());
};

export const entry=(routing=new Routing())=>{
    window.onpopstate=()=>{
        let route = routing.to(window.location.pathname);
        if (!!route.params)
            view(route.index,route.params);
        else 
            view(route.index);
    };

    let route = routing.to(window.location.pathname);
    if (!!route.params)
        view(route.index,route.params);
    else 
        view(route.index);
}