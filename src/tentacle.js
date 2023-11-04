import { Cthulhu } from "./cthulhu"

export const tentacle=(children,build=async(t,p)=>new Core())=>
    Object
    .entries(children)
    .reduce(
        (o,[key,value])=>{
            o[key] = Array.isArray(value)
                ?value.map(item=>Cthulhu.instance(item,{key},build))
                :new Cthulhu(value,{key},build)

            return o
        },{}
    )
    