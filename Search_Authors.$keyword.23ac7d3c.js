var k=Object.defineProperty;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,l=(t,e)=>{for(var a in e||(e={}))w.call(e,a)&&m(t,a,e[a]);if(u)for(var a of u(e))j.call(e,a)&&m(t,a,e[a]);return t};import{_ as I,a as _}from"./index.77898d47.js";import{m as d,r as $,c as x,t as E,e as s,o as f,v as h,j as r,g as i,F as S,A as L,B as V,x as v}from"./@vue.86bfd1f8.js";import{u as g}from"./vue-router.9a8cfd5a.js";import{u as P}from"./vuex.418d299d.js";import"./axios.3fb31503.js";const R={components:{AuthorsList:d(()=>_(()=>import("./AuthorsList.e40eefff.js"),["assets/AuthorsList.e40eefff.js","assets/AuthorsList.286ac9d0.css","assets/index.77898d47.js","assets/index.b4b37ec1.css","assets/@vue.86bfd1f8.js","assets/vue-router.9a8cfd5a.js","assets/vuex.418d299d.js","assets/axios.3fb31503.js"])),Bar:d(()=>_(()=>import("./Bar.dec70a38.js"),["assets/Bar.dec70a38.js","assets/Bar.265d0c8c.css","assets/BarItem.d7ffadf2.js","assets/BarItem.62f2bae4.css","assets/index.77898d47.js","assets/index.b4b37ec1.css","assets/@vue.86bfd1f8.js","assets/vue-router.9a8cfd5a.js","assets/vuex.418d299d.js","assets/axios.3fb31503.js"])),BarItem:d(()=>_(()=>import("./BarItem.d7ffadf2.js"),["assets/BarItem.d7ffadf2.js","assets/BarItem.62f2bae4.css","assets/index.77898d47.js","assets/index.b4b37ec1.css","assets/@vue.86bfd1f8.js","assets/vue-router.9a8cfd5a.js","assets/vuex.418d299d.js","assets/axios.3fb31503.js"]))},async init({store:t,route:e}){await t.dispatch("searchAuthors",e)},meta({store:t,route:e}){try{const{data:a,total:o}=t==null?void 0:t.state[e.path],[{avatar:p}]=a,n=new Set;return a.forEach(c=>n.add(c.name)),{title:[e.params.keyword,"\u753B\u5E08","\u641C\u7D22\u7ED3\u679C"].join(" - "),description:`\u627E\u5230${o}\u4E2A\u4E0E\u300C${e.params.keyword}\u300D\u76F8\u5173\u7684\u753B\u5E08\u3002`,keywords:Array.from(n).slice(0,15),image:p}}catch{return{title:[e.params.keyword,"\u753B\u5E08","\u641C\u7D22\u7ED3\u679C"].join(" - "),description:`\u672A\u627E\u5230\u4E0E\u300C${e.params.keyword}\u300D\u76F8\u5173\u7684\u753B\u5E08\u3002`}}},setup(){const t=P(),e=g(),a=$({data:x(()=>{var o;return(o=t.state[e.path])==null?void 0:o.data})});return l({},E(a))}},C=t=>(L("data-v-7260c87e"),t=t(),V(),t),D=C(()=>v("svg",{viewBox:"0 0 496 496"},[v("path",{fill:"var(--fit)",d:"M248,0C111,0,0,111,0,248S111,496,248,496,496,385,496,248,385,0,248,0ZM383.18,367.84l-15.37,15.37a13,13,0,0,1-18.41,0l-54.14-54.14a13,13,0,0,1-3.8-9.23V311A112.89,112.89,0,1,1,311,291.43h8.85a13,13,0,0,1,9.23,3.8l54.15,54.15A13.09,13.09,0,0,1,383.18,367.84ZM291.46,221.92a69.52,69.52,0,1,1-69.52-69.52A69.48,69.48,0,0,1,291.46,221.92Z"})],-1));function M(t,e,a,o,p,n){const c=s("AuthorsList"),A=s("router-link"),y=s("BarItem"),B=s("Bar");return f(),h(S,null,[(f(),h("section",{search:"",key:t.$route.fullPath},[r(c,{data:t.data},null,8,["data"])])),r(B,null,{center:i(()=>[r(y,{title:"\u641C\u7D22"},{default:i(()=>[r(A,{to:"/search"},{default:i(()=>[D]),_:1})]),_:1})]),_:1})],64)}var q=I(R,[["render",M],["__scopeId","data-v-7260c87e"]]);export{q as default};
