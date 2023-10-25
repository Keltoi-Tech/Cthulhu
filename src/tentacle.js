import { Cthulhu } from "./cthulhu"

export const tentacle=(cthulhu,o,engine)=>
    Object
    .keys(o)
    .map(prop=>{
        cthulhu[prop] = Array.isArray(o[prop])
            ?o[prop].map(item=>new Cthulhu(item,prop,engine))
            :new Cthulhu(o[prop],prop,engine)

        return cthulhu[prop]
    });