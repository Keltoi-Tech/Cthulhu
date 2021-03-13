export class JsonHtml{
    constructor(e){
        let tag = Object.keys(e)[0];
        let attrs = Object.keys(e[tag]);
        this.content = document.createElement(tag);

        for (let attr of attrs){
            switch(attr){
                case "style":
                    Object.keys(e[tag].style).forEach(s=>this.content.style[s]= e[tag].style[s]);
                    break;
                case "children":
                    e[tag].children.forEach(child=>new JsonHtml(child).asChildOf(this.content));
                    break;
                case "content":
                    this.content.appendChild(document.createTextNode(e[tag].content));
                    break;
                default:{
                    let qName = ["field","model","list","scope","event"].some(q=>q==attr)?"data-" + attr:attr;

                    this.content.setAttribute(qName,e[tag][attr]);
                }
            }
        }
    }

    asChildOf=parent=>parent.appendChild(this.content);
}

export class Template{
    constructor()
    {
        this.e = document.createElement("template");
    }

    createInstance=()=>this.e.firstElementChild.cloneNode(true);
}

export class JsonTemplate extends Template{
    constructor(t){
        super();
        new JsonHtml(t).asChildOf(this.e);
    }
}
