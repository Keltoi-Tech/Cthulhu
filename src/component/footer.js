import css from './css/footer.css';

class Item{
    toComponent=()=>{};
}

export class FooterItem extends Item{
    #text='';
    #link=()=>{};
    #title='';
    #linkToOutside=false;

    constructor
    (
        text='',
        link=()=>{},
        title='',
        linkToOutside=false
    ){
        super();
        this.#text=text;
        this.#link = link;
        this.#title = title;
        this.#linkToOutside = linkToOutside;
    }

    toComponent=()=>{
        return this.#linkToOutside?
        {
            a:{
                content:this.#text,
                attributes:{
                    href:this.#link(),
                    title:this.#title
                }
            }
        }:
        {
            a:{
                content:this.#text,
                events:{
                    click:this.#linkToOutside?()=>{}:this.#link
                }
            }
        }
    }
}

export class FooterImageItem extends Item
{
    #image='';
    #link=()=>{};
    constructor(image='',link=()=>{}){
        super();
        this.#image = image;
        this.link = link;
    }

    toComponent=()=>{
        return {
            img:{
                attributes:{
                    src:this.#image
                },
                events:{
                    click:this.#link
                }
            }
        }
    }
}

class FooterItemGroup{
    #header="";
    #itens=[];

    constructor(header='',itens=[]){
        this.#header = header;
        this.#itens=itens;
    }

    get header(){return this.#header;}
    set header(val=''){this.#header=val;}

    get itens(){return this.#itens;}

    push=(item=new FooterItem())=>this.#itens.push(item);
    pop=()=>this.#itens.pop();

    toComponent=()=>{}    
}

export class FooterListGroup extends FooterItemGroup
{
    constructor(header='',itens=[]){
        super(header,itens)
    }

    toComponent=()=>{
        return {
            h2:{
                content:this.header
            },
            hr:{},
            ul:{
                li:this.itens.map(i=>i.toComponent())
            }
        }
    }
}

export class FooterIconGroup extends FooterItemGroup{
    constructor(header='',itens=[]){
        super(header,itens);
    }

    toComponent=()=>{
        return{
            h2:{
                content:this.header
            },
            hr:{},
            ul:{
                attributes:{
                    class:'iconGroup'
                },
                li:this.itens.map(i=>i.toComponent())
            }
        }
    }
}

export class Footer{
    #font="";
    #itemGroup
    constructor(font='',itemGroup=[]){
        this.#font = font;
        this.#itemGroup = itemGroup;
    }

    get font(){return this.#font;}
    set font(val=''){this.#font=val;}

    get itemGroup(){return this.#itemGroup;}
}


export const FooterMenu=(footer = new Footer())=>{
    return {
        style:{
            content:css
        },
        footer:{
            attributes:{
                style:'font-family:' + footer.font
            },
            div:footer.itemGroup.map(e=>e.toComponent())
        }
    };
}