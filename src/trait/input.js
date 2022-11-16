export const Input=(param={type:'text',placeholder:''})=>{
    return {
        attributes:{
            type:param.type,
            placeholder:param.placeholder
        },
    }
}