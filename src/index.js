const meOrNewMe = (type=Cthulhu,obj) => obj instanceof type ? obj : new type(obj);

export class Cthulhu{
    constructor(type,model,...names){
        const map = new Map(Object.entries(model));

        map.forEach((obj,prop)=>{
            this[prop] = names.includes(prop)
                ? obj
                : (obj instanceof Array)
                    ? obj.map(o=>meOrNewMe(type,o))
                    : meOrNewMe(type,obj);
        })
    }
}