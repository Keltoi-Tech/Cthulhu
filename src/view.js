import { cthulhu } from "./model";

export const view=async (fthagn)=>{
    document.body.innerHTML='';
    cthulhu(document.body,await fthagn());
};