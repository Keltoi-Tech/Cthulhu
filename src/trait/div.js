import { trait } from "../component";

export const Div=(inner={component,param:{}})=>{
    return {
        inner:!!inner.param
                ?trait(inner.component,inner.param)
                :trait(inner.component)
    }
};