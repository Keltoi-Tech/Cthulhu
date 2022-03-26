export class App
{
    constructor(...viewMap){
        viewMap.forEach(view=>view.init());
        this.viewMap = viewMap;
        document.addEventListener('DOMContentLoaded',this.navigateTo);
        window.onpopstate=this.navigateTo;
    }


    navigateTo=(url=null)=>{
        const calledByEvent = url instanceof Event;
        url = (!!url)?
                (calledByEvent)?
                    url.target.location.pathname:
                    url:
                window.location.pathname;

        if (!!this.preset)this.preset();
        
        let render = this.viewMap.filter(view=>view.route==url)[0];

        window.history.pushState({},'',url);

        render.navigateTo=this.navigateTo;
        render.setHead();
        render.run();
    }
}
