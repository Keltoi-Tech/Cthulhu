let htmlEngine=(e)=>
{
    let tag = Object.keys(e)[0];
    let attrs = Object.keys(e[tag]);
    let element = document.createElement(tag); 
    for (let attr of attrs){
        switch(attr){
            case "style":
                Object.keys(e[tag].style).forEach(s=>element.style[s]= e[tag].style[s]);
                break;
            case "children":
                e[tag].children.forEach(child=>element.appendChild(htmlEngine(child)));
                break;
            case "content":
                element.appendChild(document.createTextNode(e[tag].content));
                break;
            default:{
                let qName = ["field","object"].some(q=>q==attr)?"data-" + attr:attr;  
                element.setAttribute(qName,e[tag][attr]);
            }
        }
    }

    return element;
}

export {htmlEngine};