export class Style{
    
    constructor(){
        this.sheet = document.querySelector('style');
        if (this.sheet==undefined)this.sheet=document.createElement('style');
    }

    define=(css)=>{
        let innerCss='';
        css.forEach(c=>{
            innerCss+='@import ' + c + ';'
        });
        this.sheet.textContent = innerCss;
        document.head.appendChild(this.sheet);
    }


}