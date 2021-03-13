export class Service{
    constructor(url){
        this.url=url;
        this.waiting=true;
    }

    awating=new Promise((resolve,reject)=>{
        while(this.waiting){

        }
        resolve();
    })

    
    get=(callback)=>{
        fetch(this.url)
        .then(response=>response.json())
        .then(json=>{
            this.waiting=false;
            callback(json);
        });
    }
}