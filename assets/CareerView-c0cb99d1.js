import{d as f,r as b,o as k,a as o,c as u,w as t,b as x,e as y,F as g,f as n,g as e,h as m,t as a,i}from"./index-ed85bd85.js";const $={class:"me-1"},A=f({__name:"CareerCard",props:{careerList:null},setup(p){const _=p,d=b({careerList:new Array}),r=async()=>{const c=await fetch("/api/careerList");d.careerList=await c.json()};return k(()=>r()),(c,v)=>{const B=n("v-avatar"),L=n("v-card-title"),w=n("v-card-subtitle"),h=n("v-card-item"),C=n("v-card-text"),V=n("v-divider"),j=n("v-card"),D=n("v-timeline-item"),N=n("v-timeline");return o(),u(N,{side:"end",align:"start"},{default:t(()=>[(o(!0),x(g,null,y(_.careerList,s=>(o(),u(D,{size:"large",key:s.careerId},{icon:t(()=>[e(B,{image:"https://i.pravatar.cc/64"})]),opposite:t(()=>[m("span",null,a(s.startDate)+" - "+a(s.endDate),1)]),default:t(()=>[e(j,null,{default:t(()=>[e(h,null,{default:t(()=>[e(L,null,{default:t(()=>[i(a(s.company),1)]),_:2},1024),e(w,null,{default:t(()=>[m("span",$,a(s.department)+":"+a(s.position),1)]),_:2},1024)]),_:2},1024),e(C,null,{default:t(()=>[i(a(s.responsibilities),1)]),_:2},1024),e(V,{class:"mx-4 mb-1"}),(o(!0),x(g,null,y(s.achievements,l=>(o(),u(h,{key:l.description},{default:t(()=>[e(L,null,{default:t(()=>[i(a(l.title),1)]),_:2},1024),e(w,null,{default:t(()=>[i(a(l.from)+" - "+a(l.to),1)]),_:2},1024),e(C,null,{default:t(()=>[i(a(l.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})}}}),F=f({__name:"CareerPage",setup(p){const _=b({careerList:new Array}),d=async()=>{const r=await fetch("/api/careerList");_.careerList=await r.json()};return k(()=>d()),(r,c)=>(o(),u(A,{"career-list":_.careerList},null,8,["career-list"]))}}),z=m("h1",null,"Career page",-1),I=f({__name:"CareerView",setup(p){return(_,d)=>{const r=n("v-col"),c=n("v-row"),v=n("v-container");return o(),u(v,null,{default:t(()=>[e(c,{justify:"center"},{default:t(()=>[e(r,{cols:"auto"},{default:t(()=>[z]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(r,null,{default:t(()=>[e(F)]),_:1})]),_:1})]),_:1})}}});export{I as default};