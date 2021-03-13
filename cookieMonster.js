export class CookieMonster{

    saveLocal=(model,modelName)=>localStorage.setItem(modelName,JSON.stringify(model));
    getLocal=(modelName)=>{
        let item =localStorage.getItem(modelName);
        return item?JSON.parse(item):null;
    }
    removeLocal=()=>localStorage.clear();

    saveSession=(model,modelName)=>sessionStorage.setItem(modelName,JSON.stringify(model));
    getSession=(modelName)=>{
        let item =sessionStorage.getItem(modelName);
        return item?JSON.parse(item):null;
    }
    removeSession=()=>sessionStorage.clear();

    meWantCookie=(cookie)=>{
        let cookieString = cookie.key + '=' + cookie.value + '; ';
        cookieString+='expires=' + cookie.toUTCString();
        cookieString+='; path=' + cookie.path;

        document.cookie=cookieString;
    }
}