export class Cthulhu{
    #engine;
    #input;
    #param;

    constructor(input, param,engine=async()=>{}){
        this.#engine= engine;
        this.#input = input;
        this.#param = param;
    }

    get input(){return this.#input;}
    set input(value){this.#input=value;}

    get param(){return this.#param;}
    set param(value){this.#param=value;}

    call=async()=>this.#engine(this);
}