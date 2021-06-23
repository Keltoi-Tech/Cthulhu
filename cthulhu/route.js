export class Route{
    constructor(app){
        this.app = app;
        document.addEventListener('DOMContentLoaded',this.reroute);
    }

    toUrlPattern=(pathname)=>{
        if (pathname=='/')return "index";
        let url = "";
        pathname
        .split('-')
        .forEach((part,i)=>url+=(i==0?part.toLowerCase():part.toUpperCase()));

        return url;
    }

    go=(pathname)=>{
        let route=this.toUrlPattern(pathname);
        history.pushState(null,'',pathname);
        let page = this.app[route]();
        page.go = this.go;
        page.init();
    }

    reroute=()=>this.go(window.location.pathname);
}