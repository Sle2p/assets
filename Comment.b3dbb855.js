var U=Object.defineProperty,F=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var B=(o,s,l)=>s in o?U(o,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[s]=l,M=(o,s)=>{for(var l in s||(s={}))q.call(s,l)&&B(o,l,s[l]);if(V)for(var l of V(s))A.call(s,l)&&B(o,l,s[l]);return o},D=(o,s)=>F(o,P(s));import{r as G,q as J,t as K,e as N,D as L,o as c,v as d,x as n,E as u,I as g,K as z,O as b,F as O,G as R,j as C,g as k,J as v,z as m,y as w,A as H,B as Q}from"./@vue.86bfd1f8.js";import{u as W}from"./vue-router.9a8cfd5a.js";import{_ as X,h as x}from"./index.77898d47.js";import{T as Y}from"./time.a04421fb.js";import Z from"./Empty.7d662946.js";import"./vuex.418d299d.js";import"./axios.3fb31503.js";const $={components:{Empty:Z},setup(){const o=W(),s=G({type:!0,text:null,reply_text:null,comments:[],skip:0,total:0,parent:null,reply_id:null}),l=async()=>{const t=s.type?"illust/comments":"illust/comments/hot",{data:{body:{data:a,total:h}}}=await x({url:t,params:{id:o.params.id,skip:s.comments.length}});!a||(a.forEach(e=>s.comments.push(e)),s.total=h)},i=async()=>{s.type||(s.type=!0,s.comments=[],l())},T=async()=>{!s.type||(s.type=!1,s.comments=[],l())},j=async t=>{const a=s.comments.findIndex(r=>r.id===t),{data:{body:{data:h,total:e}}}=await x({url:"illust/replies",params:{id:t,skip:s.comments[a].replies.length}});h.forEach(r=>s.comments[a].replies.push(r)),s.comments[a].child=e},p=async()=>{const{data:{body:{data:t}}}=await x({method:"POST",url:"illust/comments/post",params:{id:o.params.id},data:{content:s.text}});s.text=null,(t==null?void 0:t.replies)||(t.replies=[]),(t==null?void 0:t.child)||(t.child=0),s.type&&s.comments.unshift(t)},y=async t=>{const a={parent:s.parent,content:s.reply_text,to:t};Object.keys(a).forEach(r=>{a[r]||delete a[r]});const{data:{body:{data:h}}}=await x({method:"POST",url:"illust/comments/post",params:{id:o.params.id},data:a});s.reply_text=null,s.reply_id=null,s.parent=null;const e=s.comments.findIndex(r=>r.id===a.parent);s.comments[e].replies.length<5&&s.comments[e].replies.push(h),s.comments[e].child+=1},f=async(t,a)=>{s.reply_text=null,a?s.parent=a:s.parent=null,t===s.reply_id?s.reply_id=null:s.reply_id=t};return J(()=>{l()}),D(M({},K(s)),{getComments:l,newComments:i,hotComments:T,selectComment:f,postComment:p,replyComment:y,getReplies:j,Time:Y})}},S=o=>(H("data-v-36803497"),o=o(),Q(),o),tt={class:"comment"},st={class:"form"},et={key:0,class:"list"},ot={class:"user"},nt=["src","alt"],it={class:"info"},at=["title"],lt={class:"content"},ct={class:"detail"},dt={class:"action"},rt=["onClick"],_t=S(()=>n("svg",{viewBox:"0 0 512 512"},[n("path",{fill:"rgba(0, 0, 0, 0.5)",d:"M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"})],-1)),ut={key:0},mt={key:1},ht={key:0,class:"form"},pt={key:1,class:"replies"},ft={class:"user"},Ct=["src","alt"],vt={class:"info"},kt=["title"],gt={class:"content"},bt={key:0,class:"detail"},wt=v("\u56DE\u590D "),xt=v("\uFF1A"),yt={key:1,class:"detail"},zt={class:"action"},St=["onClick"],Tt=S(()=>n("svg",{viewBox:"0 0 512 512"},[n("path",{fill:"rgba(0, 0, 0, 0.5)",d:"M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"})],-1)),jt=S(()=>n("span",null,"\u56DE\u590D",-1)),Et=[Tt,jt],It={key:2,class:"form"},Vt=["placeholder"],Bt=["title","onClick"],Mt=["onClick"],Dt={class:"more"},Nt={key:1,class:"none"};function Ot(o,s,l,i,T,j){const p=N("router-link"),y=N("Empty"),f=L("ripple");return c(),d("section",tt,[n("nav",null,[u(n("button",{class:g(o.type?["new","active"]:["new"]),title:"\u6700\u65B0\u8BC4\u8BBA",onClick:s[0]||(s[0]=(...t)=>i.newComments&&i.newComments(...t))}," \u6700\u65B0 ",2),[[f]]),u(n("button",{class:g(o.type?["hot"]:["hot","active"]),title:"\u70ED\u95E8\u8BC4\u8BBA",onClick:s[1]||(s[1]=(...t)=>i.hotComments&&i.hotComments(...t))}," \u70ED\u95E8 ",2),[[f]])]),u(n("section",st,[u(n("textarea",{placeholder:"\u4F60\u7684\u770B\u6CD5...","onUpdate:modelValue":s[2]||(s[2]=t=>o.text=t)},null,512),[[z,o.text]]),u(n("button",{class:"submit",title:"\u8BC4\u8BBA",onClick:s[3]||(s[3]=(...t)=>i.postComment&&i.postComment(...t))},"\u53D1\u9001",512),[[b,o.text]])],512),[[f]]),o.comments.length?(c(),d("section",et,[(c(!0),d(O,null,R(o.comments,t=>{var a,h;return c(),d("section",{class:"item",key:t},[n("section",ot,[C(p,{class:"avatar",to:"/",title:(a=t==null?void 0:t.user)==null?void 0:a.name},{default:k(()=>{var e,r;return[n("img",{src:(e=t==null?void 0:t.user)==null?void 0:e.avatar,alt:(r=t==null?void 0:t.user)==null?void 0:r.name},null,8,nt)]}),_:2},1032,["title"]),n("section",it,[C(p,{class:"name",to:"/",title:(h=t==null?void 0:t.user)==null?void 0:h.name},{default:k(()=>{var e;return[v(m((e=t==null?void 0:t.user)==null?void 0:e.name),1)]}),_:2},1032,["title"]),n("section",{class:"time",title:new i.Time(t==null?void 0:t.created).format()},m(new i.Time(t==null?void 0:t.created).diff()),9,at)])]),n("section",lt,[n("section",ct,m(t.content),1),n("section",dt,[n("section",{class:g(t.id===o.reply_id?["reply","active"]:["reply"]),title:"\u56DE\u590D",onClick:e=>i.selectComment(t.id,t.id)},[_t,t.child?(c(),d("span",ut,m(t.child),1)):(c(),d("span",mt,"\u56DE\u590D"))],10,rt)]),t.id===o.reply_id?u((c(),d("section",ht,[u(n("textarea",{placeholder:"\u56DE\u590D","onUpdate:modelValue":s[4]||(s[4]=e=>o.reply_text=e)},null,512),[[z,o.reply_text]]),u(n("button",{class:"submit",title:"\u56DE\u590D",onClick:s[5]||(s[5]=e=>i.replyComment())}," \u53D1\u9001 ",512),[[b,o.reply_text]])],512)),[[f]]):w("",!0),t.child?(c(),d("section",pt,[(c(!0),d(O,null,R(t.replies,e=>{var r,E;return c(),d("section",{class:"item",key:e},[n("section",ft,[C(p,{class:"avatar",to:"/",title:(r=e==null?void 0:e.user)==null?void 0:r.name},{default:k(()=>{var _,I;return[n("img",{src:(_=e==null?void 0:e.user)==null?void 0:_.avatar,alt:(I=e==null?void 0:e.user)==null?void 0:I.name},null,8,Ct)]}),_:2},1032,["title"]),n("section",vt,[C(p,{class:"name",to:"/",title:(E=e==null?void 0:e.user)==null?void 0:E.name},{default:k(()=>{var _;return[v(m((_=e==null?void 0:e.user)==null?void 0:_.name),1)]}),_:2},1032,["title"]),n("section",{class:"time",title:new i.Time(e==null?void 0:e.created).format()},m(new i.Time(e==null?void 0:e.created).diff()),9,kt)])]),n("section",gt,[(e==null?void 0:e.to)?(c(),d("section",bt,[n("span",null,[wt,C(p,{to:"/"},{default:k(()=>{var _;return[v("@"+m((_=e==null?void 0:e.to)==null?void 0:_.name),1)]}),_:2},1024),xt]),v(" "+m(e.content),1)])):(c(),d("section",yt,m(e.content),1)),n("section",zt,[n("section",{class:g(e.id===o.reply_id?["reply","active"]:["reply"]),title:"\u56DE\u590D",onClick:_=>i.selectComment(e.id,e.parent)},Et,10,St)]),e.id===o.reply_id?u((c(),d("section",It,[u(n("textarea",{placeholder:`\u56DE\u590D @${e.user.name}`,"onUpdate:modelValue":s[6]||(s[6]=_=>o.reply_text=_)},null,8,Vt),[[z,o.reply_text]]),u(n("button",{class:"submit",title:`\u56DE\u590D @${e.user.name}`,onClick:_=>i.replyComment(e.user.id)}," \u53D1\u9001 ",8,Bt),[[b,o.reply_text]])],512)),[[f]]):w("",!0)])])}),128)),t.replies.length<t.child?(c(),d("button",{key:0,class:"more",onClick:e=>i.getReplies(t.id)}," \u8FD8\u6709 "+m(t.child-t.replies.length)+" \u6761\u56DE\u590D... ",9,Mt)):w("",!0)])):w("",!0)])])}),128)),n("section",Dt,[u(n("button",{onClick:s[7]||(s[7]=(...t)=>i.getComments&&i.getComments(...t))}," \u8FD8\u6709 "+m(o.total-o.comments.length)+" \u6761\u8BC4\u8BBA... ",513),[[b,o.comments.length<o.total]])])])):(c(),d("section",Nt,[C(y)]))])}var Kt=X($,[["render",Ot],["__scopeId","data-v-36803497"]]);export{Kt as default};
