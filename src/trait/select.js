export const Select=(list=[{value:'',content:''}])=>{
    return {
        option:list.map(e=>{
            return {
                attributes:{
                    value:e.value
                },
                content:e.content
            }
        })
    }
}