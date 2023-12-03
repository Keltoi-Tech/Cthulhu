import { Cthulhu } from "./cthulhu.js"

export const tentacle=(
    props={},
    children={},
    engine={
        build:async(t,p)=>new Core(),
        change:async(s)=>s
    },
    filter=([key,value])=>key==key
)=>
    Object
    .entries(children)
    .filter(filter)
    .map(([key,value])=>{
        props[key] = value 
        
        return Array.isArray(value)
            ?Promise.all(value.map(item=>Cthulhu.instance(item,{key},engine).build()))
            :Cthulhu.instance(value,{key},engine).build()
    })
    