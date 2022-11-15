import { Routing } from "./routing";

export const compose=(instance=async()=>{})=>{
    instance()
    .then(e=>document.body.appendChild(e));
}

export const view=(route={index:()=>{},params:[],sub:{}})=>{
    document.body.innerHTML='';
    document.body.appendChild(route.index(route.params,route.sub));
};

export const entry=(routing=new Routing())=>{
    window.onpopstate=()=>{
        let route = routing.to(window.location.pathname);
        view(route);
        /*if (!!route.params){
            if (!!route.sub) route.params.sub = route.sub;
            view(route.index,route.params);
        } else view(route.index);*/
    };

    let route = routing.to(window.location.pathname);
    /*if (!!route.params){
        if (!!route.sub) route.params.sub = route.sub;
        view(route.index,route.params);
    }
    else view(route.index);*/
    view(route);
}