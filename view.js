import { kebabize, Cthulhu } from "./cthulhu.js";
export class View
{
    constructor(param){
        this.navigateTo=param.navigateTo;
        this.route=param.route;
        this.head = !!param.head?param.head:null;
        this.style=!!param.style?param.style:null;
    }

    setFavicon=(favicon)=>{
        let icon = document.head.querySelector('link[rel=icon]');
        if (!!icon)icon.setAttribute('href',favicon);
        else{
            icon = document.createElement('link');
            icon.setAttribute('rel','icon');
            icon.setAttribute('type','image/x-icon');
            icon.setAttribute('href',favicon);
            document.head.appendChild(icon);
        }
    }

    setTitle=(title=null)=>
        document.head.querySelector('title').innerHTML = title;

    setMeta=(metas)=>{
        document.head.querySelectorAll('meta').forEach(meta=>meta.remove());

        metas.forEach(meta=>{
            let newMeta= document.createElement('meta');
            Object
                .keys(meta)
                .forEach(att=>newMeta.setAttribute(kebabize(att),meta[att]));
            document.head.prepend(newMeta);
        });
    }

    setStyles=(styles)=>{
        document.head.querySelectorAll('link[rel=stylesheet]').forEach(css=>css.remove());
        document.head.querySelectorAll('style').forEach(css=>css.remove());

        styles.forEach(style=>{
            let newStyle;
            if (typeof(style)=='string'){
                newStyle = document.createElement('style');
                newStyle.innerText = style;
            }
            else
            {
                newStyle = document.createElement('link');
                newStyle.setAttribute('rel','stylesheet');
                Object
                    .keys(style)
                    .filter(att=>att!='rel')
                    .forEach(att=>newStyle.setAttribute(kebabize(att),style[att]));
            }

            document.head.appendChild(newStyle);
        });
    }

    setScripts=(scripts)=>{
        document
            .head
            .querySelectorAll('script')
            .forEach(script=>{
                if (script.getAttribute('type')!='module')script.remove();
            });

        scripts.forEach(script=>{
            let newScript = document.createElement('script');
            newScript.setAttribute('type','text/javascript');
            Object
                .keys(script)
                .filter(att=>att!='type')
                .forEach(att=>newScript.setAttribute(kebabize(att),script[att]));
            document.head.appendChild(newScript);
        });
    }

    setHead=()=>{
        if (!this.head) return;
        if (!!this.head.metas)this.setMeta(this.head.metas);
        if (!!this.head.title)this.setTitle(this.head.title);
        if (!!this.head.favicon)this.setFavicon(this.head.favicon);
        if (!!this.head.styles)this.setStyles(this.head.styles);
        if (!!this.head.scripts)this.setScripts(this.head.scripts);
    }

    init=()=>{
        this.components = Object.keys(this).filter(k=>this[k] instanceof Cthulhu);
        this.components.forEach(prop=>this[prop].call());
    }

    run=()=>{
        document.body.innerHTML='';
        this.style = (!!this.style)?
            this.style:
            {
                margin:0,
                padding:0
            };

        Object
            .keys(this.style)
            .forEach(name=>document.body.style[name]=this.style[name]);

        this.components.forEach(prop=>{
            this[prop].navigateTo=this.navigateTo;
            this[prop].createOn(document.body)
        });
    }
}