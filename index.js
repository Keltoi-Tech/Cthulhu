class Cthulhu{constructor(e,t,...n){new Map(Object.entries(t)).forEach(((t,c)=>{this[c]=n.includes(c)?t:t instanceof Array?t.map((t=>new e(t))):new e(t)}))}}export{Cthulhu};
