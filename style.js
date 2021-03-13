export class Style{
    constructor(fromPage){
        this.fromPage;
        this.files=[];
        this.styleSheet = document.createElement('style');
        this.styleSheet.setAttribute('id',fromPage);
    }

    addFile=file=>this.files.push(file);
    removeFile=file=>this.files.splice(this.indexOf(f=>f==file));
    flush=()=>this.styleSheet.textContent='';
    removeMe=()=>{
        let sheet = document.querySelector(this.fromPage);
        if (!!sheet)document.body.removeChild(sheet);
    }
    update=()=>{
        this.flush();
        let links='';
        this.files.forEach(f=>links+="@import '" + f + "';\n");
        this.styleSheet.textContent = links;
        document.body.appendChild(this.styleSheet);
    }
}