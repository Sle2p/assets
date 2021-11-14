var S=Object.defineProperty,g=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var k=(t,o,e)=>o in t?S(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,B=(t,o)=>{for(var e in o||(o={}))L.call(o,e)&&k(t,e,o[e]);if(w)for(var e of w(o))b.call(o,e)&&k(t,e,o[e]);return t},A=(t,o)=>g(t,E(o));import{_ as P,a as u}from"./index.77898d47.js";import{m as p,r as V,c as I,q as $,t as D,e as c,o as l,v as M,x as a,f as m,y as R,j as _,g as r,F as Z,z as C,A as F,B as N}from"./@vue.86bfd1f8.js";import{u as O}from"./vue-router.9a8cfd5a.js";import{u as T}from"./vuex.418d299d.js";import"./axios.3fb31503.js";const q={components:{Account:p(()=>u(()=>import("./Account.7f94a7c9.js"),["assets/Account.7f94a7c9.js","assets/Account.f7f33601.css","assets/@vue.86bfd1f8.js","assets/vuex.418d299d.js","assets/index.77898d47.js","assets/index.b4b37ec1.css","assets/vue-router.9a8cfd5a.js","assets/axios.3fb31503.js"])),Bar:p(()=>u(()=>import("./Bar.dec70a38.js"),["assets/Bar.dec70a38.js","assets/Bar.265d0c8c.css","assets/BarItem.d7ffadf2.js","assets/BarItem.62f2bae4.css","assets/index.77898d47.js","assets/index.b4b37ec1.css","assets/@vue.86bfd1f8.js","assets/vue-router.9a8cfd5a.js","assets/vuex.418d299d.js","assets/axios.3fb31503.js"])),BarItem:p(()=>u(()=>import("./BarItem.d7ffadf2.js"),["assets/BarItem.d7ffadf2.js","assets/BarItem.62f2bae4.css","assets/index.77898d47.js","assets/index.b4b37ec1.css","assets/@vue.86bfd1f8.js","assets/vue-router.9a8cfd5a.js","assets/vuex.418d299d.js","assets/axios.3fb31503.js"]))},async init({store:t,route:o}){await Promise.allSettled([t.dispatch("authorInfo",{route:o})])},meta({store:t,route:o}){const{data:e}=t.state[o.path];return{title:[e.name,"\u753B\u5E08"].join(" - "),description:`\u753B\u5E08\u300C${e.name}\u300D\u7684\u4F5C\u54C1\u5C55\u793A\u9875\uFF0CPixiv ID\u300C${e.id}\u300D\u3002`,keywords:[e.name],image:e.avatar,theme:e.color}},setup(){const t=T(),o=O(),e=V({data:I(()=>{var s;return(s=t.state[o.path])==null?void 0:s.data}),follow_status:I(()=>{var s;return(s=t.state[o.path])==null?void 0:s.follow})}),i=()=>t.dispatch("followAuthor",o),f=()=>t.dispatch("unfollowAuthor",o);return $(()=>{localStorage.token&&t.dispatch("followAuthorStatus",o)}),A(B({},D(e)),{follow:i,unfollow:f})}},d=t=>(F("data-v-59ebfb96"),t=t(),N(),t),z={author:""},G={class:"counts"},H={class:"wrap"},J={class:"num"},K=d(()=>a("section",{class:"text"},"\u4F5C\u54C1",-1)),Q={class:"num"},U=d(()=>a("section",{class:"text"},"\u7C89\u4E1D",-1)),W=d(()=>a("svg",{viewBox:"0 0 496 496"},[a("path",{fill:"var(--fit)",d:"M248,0C111,0,0,111,0,248S111,496,248,496,496,385,496,248,385,0,248,0ZM386,259.91,255.85,394a10.92,10.92,0,0,1-15.76,0L110,260c-26.68-32.56-25.39-81.19,4.48-111.73l1.47-1.47a80.06,80.06,0,0,1,104.68-8.59l17.54,53-58.87,39.25,88.3,88.3-29.43-78.49L297.06,201l-21-63.41a80.12,80.12,0,0,1,104,9.08l1.47,1.53C411.37,178.78,412.66,227.41,386,259.91Z"})],-1)),X=d(()=>a("svg",{viewBox:"0 0 496 496"},[a("path",{fill:"var(--fit)",d:"M248,0C111,0,0,111,0,248S111,496,248,496,496,385,496,248,385,0,248,0ZM380.53,267.91,261.86,390.44a19.23,19.23,0,0,1-27.78,0L115.42,267.91C81,232.28,83,173.28,121.49,140.41c33.6-28.64,83.65-23.49,114.43,8.34L248,161.2l12.09-12.45c30.84-31.83,80.82-37,114.43-8.34C413,173.28,415.06,232.28,380.53,267.91Z"})],-1));function Y(t,o,e,i,f,s){const j=c("Account"),h=c("router-link"),x=c("router-view"),v=c("BarItem"),y=c("Bar");return l(),M(Z,null,[a("section",z,[t.data?(l(),m(j,{key:0,data:t.data},null,8,["data"])):R("",!0),a("section",G,[a("section",H,[_(h,{to:{name:"author:Index"},replace:"",class:"item"},{default:r(()=>{var n;return[a("section",J,C((n=t.data)==null?void 0:n.works),1),K]}),_:1}),_(h,{to:{name:"author:Fans"},replace:"",class:"item"},{default:r(()=>{var n;return[a("section",Q,C((n=t.data)==null?void 0:n.fans),1),U]}),_:1})])]),_(x)]),_(y,null,{right:r(()=>[t.follow_status?(l(),m(v,{key:0,title:"\u53D6\u6D88\u5173\u6CE8",onClick:i.unfollow},{default:r(()=>[W]),_:1},8,["onClick"])):(l(),m(v,{key:1,title:"\u5173\u6CE8",onClick:i.follow},{default:r(()=>[X]),_:1},8,["onClick"]))]),_:1})],64)}var ct=P(q,[["render",Y],["__scopeId","data-v-59ebfb96"]]);export{ct as default};
