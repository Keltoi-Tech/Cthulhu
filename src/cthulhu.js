export class Cthulhu{
    #engine;
    #instance;
    #param;

    constructor(instance, param,engine=async()=>{}){
        this.#engine= engine;
        this.#instance = instance;
        this.#param = param;
    }

    get input(){return this.#instance;}
    set input(value){this.#instance=value;}

    get param(){return this.#param;}
    set param(value){this.#param=value;}

    call=async()=>this.#engine(this);
}