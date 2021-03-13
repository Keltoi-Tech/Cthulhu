export class Auth{
    constructor(token){
        this.token = token;
    }
}

export class BearerAuth extends Auth{
    constructor(token){
        super("Bearer " + token);
    }
}

export class BasicAuth extends Auth{
    constructor(user,pwd){
        super("Basic " + btoa(user + ":" + pwd));
    }
}

let genQueryString=data=>{
    let p=[];
    Object.keys(data).forEach(k=>{
        p.push(k + "=" + data[k]);
    });

    return "?" + p.join("&");
}

let genHeader=(contentType,auth=undefined,headers=undefined)=>{
    let h = (!!headers)?
                new Headers(headers):
                new Headers();

    if (h.has("Content-Type"))
        h.set("Content-Type",contentType);
    else
        h.append("Content-Type",contentType);

    if (!!auth){
        if (auth instanceof Auth){
            if (h.has("Authorization"))
                h.set("Authorization",auth.token);
            else
                h.append("Authorization",auth.token);
        }
    }

    return h;
}

export class RestApi{
    constructor(url,config=undefined){
        this.url = url;
        this.config = !!config?config:{
            cache:"no-cache",
            cors:"cors",
            credentials:"omit"
        };
    }

    ajax=(method,param)=>{
        let route = this.url + '/' + param.api;
        let cfg = {
            cache:this.config.cache,
            cors:this.config.cors,
            credentials:this.config.credentials
        };
        cfg.method=method;
        if (method=="GET" || method=="DELETE")
            route+= (!!param.data)?genQueryString(param.data):"";
        else
            cfg.body = JSON.stringify(param.data);

        cfg.headers = genHeader(
            "application/json",
            !!param.auth?param.auth:undefined,
            !!param.headers?param.headers:undefined
        );

        let f = fetch(route,cfg)
        .then(response=>{
            return{
                message:response.statusText,
                status:response.status,
                success:response.ok,
                response:response.text()
            }
        },
        error=>{
            return {
                message:error.message,
                status:0,
                success:false
            }
        });
        cfg=null;
        return f;
    }

    post=(param)=>this.ajax("POST",param);
    get=(param)=>this.ajax("GET",param);
    put=(param)=>this.ajax("PUT",param);
    patch=(param)=>this.ajax("PATCH",param);
    delete=(param)=>this.ajax("DELETE",param);
}

export class WebApp{
    constructor(rest,auth){
        if (rest instanceof RestApi){
            this.rest = rest;
            if (!!auth)this.auth = auth;
        }else
            alert("It's a mistake!api type must be RestApi");
    }
}