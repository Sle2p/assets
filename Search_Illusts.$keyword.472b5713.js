var S=Object.defineProperty;var u=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var f=(t,e,a)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))A.call(e,a)&&f(t,a,e[a]);if(u)for(var a of u(e))E.call(e,a)&&f(t,a,e[a]);return t};import{_ as $,a as n}from"./index.b526fc27.js";import{u as T}from"./vuex.418d299d.js";import{u as V}from"./vue-router.9a8cfd5a.js";import{m as d,r as x,c as p,t as M,e as r,o as c,v as y,f as v,y as I,j as l,g as m,F as b,A as L,B as P,x as k}from"./@vue.86bfd1f8.js";import"./axios.3fb31503.js";const R={components:{SimpleTags:d(()=>n(()=>import("./SimpleTags.c6eed1da.js"),["assets/SimpleTags.c6eed1da.js","assets/SimpleTags.816526ad.css","assets/index.b526fc27.js","assets/index.b4b37ec1.css","assets/@vue.86bfd1f8.js","assets/vue-router.9a8cfd5a.js","assets/vuex.418d299d.js","assets/axios.3fb31503.js"])),Masonry:d(()=>n(()=>import("./Masonry.2612f2bc.js"),["assets/Masonry.2612f2bc.js","assets/Masonry.2828ad41.css","assets/index.b526fc27.js","assets/index.b4b37ec1.css","assets/@vue.86bfd1f8.js","assets/vue-router.9a8cfd5a.js","assets/vuex.418d299d.js","assets/axios.3fb31503.js"])),Bar:d(()=>n(()=>import("./Bar.88dd7e64.js"),["assets/Bar.88dd7e64.js","assets/Bar.265d0c8c.css","assets/BarItem.b5e7eb7f.js","assets/BarItem.62f2bae4.css","assets/index.b526fc27.js","assets/index.b4b37ec1.css","assets/@vue.86bfd1f8.js","assets/vue-router.9a8cfd5a.js","assets/vuex.418d299d.js","assets/axios.3fb31503.js"])),BarItem:d(()=>n(()=>import("./BarItem.b5e7eb7f.js"),["assets/BarItem.b5e7eb7f.js","assets/BarItem.62f2bae4.css","assets/index.b526fc27.js","assets/index.b4b37ec1.css","assets/@vue.86bfd1f8.js","assets/vue-router.9a8cfd5a.js","assets/vuex.418d299d.js","assets/axios.3fb31503.js"]))},async init({store:t,route:e}){await t.dispatch("searchIllusts",e)},meta({store:t,route:e}){try{const{data:a,total:o}=t==null?void 0:t.state[e.path],[{image:s}]=a,_=new Set;return a.forEach(i=>_.add(i.title)),{title:[e.params.keyword,"\u63D2\u753B","\u641C\u7D22\u7ED3\u679C"].join(" - "),description:`\u627E\u5230${o}\u4E2A\u4E0E\u300C${e.params.keyword}\u300D\u76F8\u5173\u7684\u63D2\u753B\u3002`,keywords:Array.from(_).slice(0,15),image:s}}catch{return{title:[e.params.keyword,"\u63D2\u753B","\u641C\u7D22\u7ED3\u679C"].join(" - "),description:`\u672A\u627E\u5230\u4E0E\u300C${e.params.keyword}\u300D\u76F8\u5173\u7684\u63D2\u753B\u3002`}}},setup(){const t=T(),e=V(),a=x({data:p(()=>{var o;return(o=t.state[e.path])==null?void 0:o.data}),tags:p(()=>{var o;return(o=t.state[e.path])==null?void 0:o.tags}),total:p(()=>{var o;return(o=t.state[e.path])==null?void 0:o.total}),load:()=>{var s;!((s=t.state[e.path])==null?void 0:s.next)||t.dispatch("searchIllusts",e)}});return h({},M(a))}},C=t=>(L("data-v-56d27eec"),t=t(),P(),t),D=C(()=>k("svg",{viewBox:"0 0 496 496"},[k("path",{fill:"var(--fit)",d:"M248,0C111,0,0,111,0,248S111,496,248,496,496,385,496,248,385,0,248,0ZM383.18,367.84l-15.37,15.37a13,13,0,0,1-18.41,0l-54.14-54.14a13,13,0,0,1-3.8-9.23V311A112.89,112.89,0,1,1,311,291.43h8.85a13,13,0,0,1,9.23,3.8l54.15,54.15A13.09,13.09,0,0,1,383.18,367.84ZM291.46,221.92a69.52,69.52,0,1,1-69.52-69.52A69.48,69.48,0,0,1,291.46,221.92Z"})],-1));function O(t,e,a,o,s,_){const i=r("SimpleTags"),B=r("Masonry"),g=r("router-link"),j=r("BarItem"),w=r("Bar");return c(),y(b,null,[(c(),y("section",{search:"",key:t.$route.fullPath},[t.tags?(c(),v(i,{key:0,data:t.tags},null,8,["data"])):I("",!0),t.data?(c(),v(B,{key:1,data:t.data,onLoad:t.load},null,8,["data","onLoad"])):I("",!0)])),l(w,null,{center:m(()=>[l(j,{title:"\u641C\u7D22"},{default:m(()=>[l(g,{to:"/search"},{default:m(()=>[D]),_:1})]),_:1})]),_:1})],64)}var H=$(R,[["render",O],["__scopeId","data-v-56d27eec"]]);export{H as default};
