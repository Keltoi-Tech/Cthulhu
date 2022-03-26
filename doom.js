const doomToDom=(dom,obj)=>
Object
.keys(obj)
.forEach(prop=>{
    const typeName = typeof(obj[prop]);
    if (typeName=='function')dom.addEventListener(prop,obj[prop]);
    else{
        switch(prop){
            case 'name':return;
            case 'children':obj[prop].forEach(child=>doomToDom(dom,child));break;
            case 'style':Object.keys(obj[prop]).forEach(s=>dom.style[s]=obj[prop][s]);break;
            case 'content':dom.innerText = obj[prop];break;
            default: 
                if (typeName=='object')
                {
                    const e = document.createElement(prop);
                    doomToDom(e,obj[prop]);
                    dom.append(e);
                }else dom.setAttribute(prop,obj[prop]);
        }
    }
});