import { component } from "../component"
import { MainContent } from "../component/main/main"

export const AppMain=(sub={})=>{
    let initial = Object.keys(sub).length==0
                    ?component(MainContent)
                    :sub.routing.index()
    return {
        page:initial
    }
}