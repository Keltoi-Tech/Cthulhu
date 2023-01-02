
export const DisplayImage=(content={
    image:{src:'',alt:''},
    callback:()=>{}
})=>{
    return {
        style:{
            content:`
                div{
                    background:black;
                    overflow:hidden;
                    box-sizing:border-box;
                    height:fix-content;
                    padding:0;
                    margin:0;
                }

                div > img { 
                    width:100%;
                    transition:all 1.618s;
                    display:block;
                }

                div > img:hover{
                    opacity:0.618;
                    transform:scale(1.618);
                }
            `
        },
        div:{
            img:{
                attributes:{
                    src:content.image.src,
                    alt:content.image.alt
                },
                events:{
                    click:content.callback
                }
            }
        }
    }
};