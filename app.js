export class App{
    constructor(){
        this.ui={};
        
        document.addEventListener('DOMContentLoaded',this.route);
    }   

    route=()=>{
        this.go(window.location.pathname);
    }
        
    go=(route, data)=>{
        let root = document.querySelector('#root');
        root.textContent='';
        history.replaceState(null,'',route);
        let ui = !!data?this.ui[route](data):this.ui[route]();
        ui.element = root;
        ui.onBuild();
    }
}