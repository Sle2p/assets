var m=Object.defineProperty;var n=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var c=(e,o,t)=>o in e?m(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,i=(e,o)=>{for(var t in o||(o={}))f.call(o,t)&&c(e,t,o[t]);if(n)for(var t of n(o))l.call(o,t)&&c(e,t,o[t]);return e};import{T as u}from"./time.a04421fb.js";import{_ as v}from"./index.77898d47.js";import{r as j,c as r,t as h,o as d,v as p,x as s,z as _,y}from"./@vue.86bfd1f8.js";import"./vue-router.9a8cfd5a.js";import"./vuex.418d299d.js";import"./axios.3fb31503.js";const b={props:{data:{type:Object}},setup({data:e}){const o=j({date:r(()=>new u(e.date).format()),caption:r(()=>{const t=e.caption;return t?decodeURIComponent(t):null})});return i({},h(o))}},x={class:"info"},C={class:"card"},T={class:"title"},k=["innerHTML"],B={class:"time"};function $(e,o,t,g,H,I){var a;return d(),p("section",x,[s("section",C,[s("section",T,_((a=t.data)==null?void 0:a.title),1),e.caption?(d(),p("section",{key:0,class:"caption",innerHTML:e.caption},null,8,k)):y("",!0),s("section",B,_(e.date),1)])])}var D=v(b,[["render",$],["__scopeId","data-v-9ff21b78"]]);export{D as default};
