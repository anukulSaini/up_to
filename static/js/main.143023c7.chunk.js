(this.webpackJsonpup_to=this.webpackJsonpup_to||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(11),o=n.n(r),s=n(33),a=n(19),i=function(e){return e.children},j=n.p+"static/media/download.1b6347c5.png",l=(n(40),n(2)),u=function(e){return Object(l.jsxs)("div",{className:"Logo",children:[Object(l.jsx)("img",{src:j,alt:"MyBurger"}),Object(l.jsx)("h1",{children:"What are you up to...?"})]})},b=(n(42),function(){return Object(l.jsx)(i,{children:Object(l.jsx)("div",{className:"header",children:Object(l.jsx)(u,{})})})}),d=function(){var e=(new Date).getFullYear();return Object(l.jsx)(i,{children:Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)("strong",{children:Object(l.jsx)("p",{children:"Anukul Saini"})}),Object(l.jsxs)("p",{children:["Copyright \xa9 ",e]})]})})},O=n(23),h=n(26),x=n(65),f=n(31),p=n.n(f),m=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],o=n[1],s=Object(c.useState)({title:"",content:""}),i=Object(a.a)(s,2),j=i[0],u=i[1],b=function(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(O.a)({},n,c))})),console.log(j)};return Object(l.jsxs)("div",{className:"main_note",onDoubleClick:function(){return o(!1)},children:[Object(l.jsxs)("form",{children:[r?Object(l.jsx)("input",{type:"text",name:"title",value:j.title,onChange:b,placeholder:"Title",autoComplete:"off"}):null,Object(l.jsx)("textarea",{rows:"",column:"",name:"content",value:j.content,onChange:b,placeholder:"Write a note",onClick:function(){return o(!0)}})]}),r?Object(l.jsx)(x.a,{onClick:function(){e.passNote(j),u({title:"",content:""})},children:Object(l.jsx)(p.a,{className:"plus_sign"})}):null]})},v=n(32),g=n.n(v),N=function(e){return Object(l.jsx)(i,{children:Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("h1",{children:e.value}),Object(l.jsx)("p",{children:e.content}),Object(l.jsx)("button",{className:"btn",onClick:function(){return e.deleteHandler(e.id)},children:Object(l.jsx)(g.a,{className:"deleteIcon"})})]})})};var C=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],o=function(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(l.jsxs)(i,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(m,{passNote:function(e){r((function(t){return[].concat(Object(s.a)(t),[e])}))}}),n.map((function(e,t){return Object(l.jsx)(N,{id:t,value:e.title,content:e.content,deleteHandler:o},t)})),Object(l.jsx)(d,{})]})};n(48);o.a.render(Object(l.jsx)(C,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.143023c7.chunk.js.map