let CharType=(char)=>!!char?char:'';
let StringType=(string)=>!!string?string:"";
let NumberType=(number)=>!!number?parseInt(number):0;
let FloatType=(float)=>!!float?parseFloat(float):0.00;
let BooleanType=(bool)=>!!bool?bool:false;
let DateType=(date)=>!!data?Date.parse(date):Date.now();


export function List(v){
    var v = v;
    var a = [];

    this.add=obj=>{
        if (v(obj))a.push(obj);
    }

    this.remove=obj=>a.splice(a.indexOf(o=>o===obj));
    
    this.length=a.length;

    this.content=a;
}

export {CharType,StringType,NumberType,FloatType,BooleanType,DateType}