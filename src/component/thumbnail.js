export const ThumbnailImg=(image={css:'',src:'',alt:''})=>{
    return {
        style:{
            content:image.css
        },
        img:{
            attributes:{
                src:image.src,
                alt:image.alt
            }
        }
    }
};