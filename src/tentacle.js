import { Cthulhu } from "./cthulhu"

export const tentacle=(cthulhu,entries,engine)=>
    entries
    .map(([key,value])=>{
        cthulhu[key] = Array.isArray(value)
            ?value.map(item=>new Cthulhu(item,key,engine))
            :new Cthulhu(value,key,engine)

        return cthulhu[key]
    });