(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),u=n(15),l=n(14),i=n(2),m=function(e){var t=e.note,n=e.toggleImportance,a=t.important?"make not important":"make important";return o.a.createElement("li",null,t.content,o.a.createElement("button",{onClick:n},a))},f=n(3),s=n.n(f),p=function(){return s.a.get("/notes").then(function(e){return e.data})},d=function(e){return s.a.post("/notes",e).then(function(e){return e.data})},b=function(e,t){return s.a.put("".concat("/notes","/").concat(e),t).then(function(e){return e.data})},g=function(e){var t=e.message;return null===t?null:o.a.createElement("div",{className:"error"},t)},E=function(){return o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},o.a.createElement("br",null),o.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},v=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],f=Object(a.useState)(""),s=Object(i.a)(f,2),v=s[0],h=s[1],O=Object(a.useState)(!0),j=Object(i.a)(O,2),S=j[0],k=j[1],w=Object(a.useState)("some error happened..."),y=Object(i.a)(w,2),C=y[0],I=y[1],N=S?r:r.filter(function(e){return e.important});return Object(a.useEffect)(function(){console.log("effect"),p().then(function(e){return c(e)})},[]),console.log("render",r.length,"notes"),o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(g,{message:C}),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return k(!S)}},"show ",S?"important":"all")),o.a.createElement("ul",null,N.map(function(e){return o.a.createElement(m,{note:e,key:e.id,toggleImportance:function(){return function(e){var t=r.find(function(t){return t.id===e}),n=Object(u.a)({},t,{important:!t.important});b(e,n).then(function(t){c(r.map(function(n){return n.id!==e?n:t}))}).catch(function(n){console.log(n),I("Note '".concat(t.content,"' was already removed from server")),setTimeout(function(){I(null)},3e3),c(r.filter(function(t){return t.id!==e}))})}(e.id)}})})),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("button clicked",e.target);var t={content:v,date:(new Date).toISOString(),important:Math.random()<.5};d(t).then(function(e){c([].concat(Object(l.a)(r),[e])),h("")})}},o.a.createElement("input",{onChange:function(e){console.log(e.target.value),h(e.target.value)},value:v}),o.a.createElement("button",{type:"submit"},"save")),o.a.createElement(E,null))};n(39);c.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2a539c85.chunk.js.map