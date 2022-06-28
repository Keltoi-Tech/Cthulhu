import { cthulhu } from "./model";


export const view=async (fthagn,service=undefined)=>{
    if (!!service)
        cthulhu(document.body,await fthagn(service),service);
    else 
        cthulhu(document.body,await fthagn());
};