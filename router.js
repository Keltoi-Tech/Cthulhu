export class Router{
    constructor(){
        this.link={};
        document.addEventListener('DOMContentLoaded',this.reroute);
    }

    
    go=(route)=>{
        history.replaceState(null,'',route);
        let page = this.link[route]();
        page.view.asChildOf(document.querySelector('#root'));
    }

    reroute=()=>{
        this.go(window.location.pathname);
    }    
}