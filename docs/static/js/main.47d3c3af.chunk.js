(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{113:function(e,n,t){"use strict";t.r(n);var i,c,r,a,o,s,l,j,u,d,b,x,f,O,v=t(0),h=t.n(v),p=t(26),m=t.n(p),g=t(48),y=t(8),S=t(115),z=t(11),C=t(12),k=C.a.div(i||(i=Object(z.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),w=t(2),N=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,c=e.bold;return Object(w.jsx)(S.a,{children:Object(w.jsx)(k,{size:t,bold:c,children:i})})},E=t(76),J=t(19),L=t(142),F=function(e){var n=e.size,t=e.color,i=e.thickness,c=e.variant;return Object(w.jsx)(L.a,{size:n,color:t,thickness:i,variant:c})},I=t(149),M=t(143),U=C.a.div(c||(c=Object(z.a)([""]))),A=function(e){var n=e.isChecked,t=e.onChange,i=e.label,c=e.value;return Object(w.jsx)(U,{children:Object(w.jsx)(M.a,{control:Object(w.jsx)(I.a,{checked:n,onChange:function(){t&&t(c)},color:"primary"}),label:i})})},V=t(144),B=t(43),P=t.n(B),q=C.a.div(r||(r=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),D=C.a.div(a||(a=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),G=C.a.div(o||(o=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),H=C.a.div(s||(s=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),R=C.a.img(l||(l=Object(z.a)(["\n  border-radius: 45%;\n"]))),T=C.a.div(j||(j=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n"]))),K=C.a.div(u||(u=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),Q=C.a.div(d||(d=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),W=function(e){var n=e.users,t=e.isLoading,i=e.fetchUsers,c=Object(v.useState)(),r=Object(J.a)(c,2),a=r[0],o=r[1],s=Object(v.useState)(""),l=Object(J.a)(s,2),j=l[0],u=l[1],d=Object(v.useState)([]),b=Object(J.a)(d,2),x=b[0],f=b[1];Object(v.useEffect)((function(){i(j)}),[j]);var O=function(){o()},h=function(e){var n=""===j,t=2===j.length;j.includes(e)?u(t?"":j.replace(","+e,"")):u(n?e:j+","+e)};return Object(w.jsxs)(q,{children:[Object(w.jsxs)(Q,{children:[Object(w.jsx)(A,{onChange:function(e){return h(e)},value:"BR",label:"Brazil"}),Object(w.jsx)(A,{onChange:function(e){return h(e)},value:"AU",label:"Australia"}),Object(w.jsx)(A,{onChange:function(e){return h(e)},value:"CA",label:"Canada"}),Object(w.jsx)(A,{onChange:function(e){return h(e)},value:"DE",label:"Germany"}),Object(w.jsx)(A,{onChange:function(e){return h(e)},value:"NL",label:"Netherlands"})]}),Object(w.jsxs)(D,{children:[n.map((function(e,t){return Object(w.jsxs)(G,{onMouseEnter:function(){return function(e){o(e)}(t)},onMouseLeave:O,children:[Object(w.jsx)(R,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(w.jsxs)(H,{children:[Object(w.jsxs)(N,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(w.jsx)(N,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(w.jsxs)(N,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(w.jsxs)(N,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(w.jsx)(K,{isVisible:t===a||x.includes(t),children:Object(w.jsx)(V.a,{onClick:function(e){return function(e){for(var t=JSON.parse(localStorage.getItem("favorites")),i=!1,c=0;c<t.length;c++)if(t[c].email===n[e].email){t.splice(c,1),f(x.filter((function(n){return n!=e}))),i=!0;break}i||(t.push(n[e]),f((function(n){return[].concat(Object(E.a)(n),[e])}))),localStorage.setItem("favorites",JSON.stringify(t))}(a)},children:Object(w.jsx)(P.a,{color:"error"})})})]},t)})),t&&Object(w.jsx)(T,{children:Object(w.jsx)(F,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},X=t(49),Y=t.n(X),Z=t(73),$=t(74),_=t.n($),ee=C.a.div(b||(b=Object(z.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),ne=C.a.div(x||(x=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),te=C.a.div(f||(f=Object(z.a)(["\n  display: flex;\n"]))),ie=(C.a.div(O||(O=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=function(){var e=Object(v.useState)([]),n=Object(J.a)(e,2),t=n[0],i=n[1],c=Object(v.useState)(!1),r=Object(J.a)(c,2),a=r[0],o=r[1];function s(e){return l.apply(this,arguments)}function l(){return(l=Object(Z.a)(Y.a.mark((function e(n){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,_.a.get("https://randomuser.me/api/?results=25&page=1&nat="+n);case 3:t=e.sent,o(!1),i(t.data.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.useEffect)((function(){s("")}),[]),{users:t,isLoading:a,fetchUsers:s}}(),n=e.users,t=e.isLoading,i=e.fetchUsers;return Object(v.useEffect)((function(){null==localStorage.getItem("favorites")&&localStorage.setItem("favorites",JSON.stringify([]))}),[]),Object(w.jsx)(ee,{children:Object(w.jsxs)(ne,{children:[Object(w.jsx)(te,{children:Object(w.jsx)(N,{size:"64px",bold:!0,children:"PplFinder"})}),Object(w.jsx)(W,{users:n,isLoading:t,fetchUsers:i})]})})}),ce=function(){var e=Object(v.useState)(),n=Object(J.a)(e,2),t=n[0],i=n[1],c=Object(v.useState)(JSON.parse(localStorage.getItem("favorites"))),r=Object(J.a)(c,2),a=r[0],o=r[1],s=function(){i()};return Object(w.jsx)(ee,{children:Object(w.jsxs)(ne,{children:[Object(w.jsx)(te,{children:Object(w.jsx)(N,{size:"64px",bold:!0,children:"Favorite Users"})}),Object(w.jsx)(q,{children:Object(w.jsx)(D,{children:a.map((function(e,n){return Object(w.jsxs)(G,{onMouseEnter:function(){return function(e){i(e)}(n)},onMouseLeave:s,children:[Object(w.jsx)(R,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(w.jsxs)(H,{children:[Object(w.jsxs)(N,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(w.jsx)(N,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(w.jsxs)(N,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(w.jsxs)(N,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(w.jsx)(K,{isVisible:!0,children:Object(w.jsx)(V.a,{onClick:function(e){return n=t,a.splice(n,1),localStorage.setItem("favorites",JSON.stringify(a)),void o(a);var n},children:Object(w.jsx)(P.a,{color:"error"})})})]},n)}))})})]})})},re=t(75),ae=t(145),oe=t(146),se=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=h.a.useMemo((function(){return Object(re.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(w.jsxs)(ae.a,{theme:i,children:[Object(w.jsx)(oe.a,{}),n]})},le=t(150),je=t(148),ue=t(147),de=function(){var e=Object(y.f)(),n=Object(v.useState)(0),t=Object(J.a)(n,2),i=t[0],c=t[1];Object(v.useEffect)((function(){0===i?e.push("/"):e.push("/Favorites")}),[i]);return Object(w.jsx)(le.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(w.jsxs)(je.a,{value:i,onChange:function(e,n){c(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(w.jsx)(ue.a,{label:"Home",index:0}),Object(w.jsx)(ue.a,{label:"Favorites",index:1})]})})},be=function(){return Object(w.jsx)(se,{children:Object(w.jsxs)(g.a,{children:[Object(w.jsx)(de,{}),Object(w.jsxs)(y.c,{children:[Object(w.jsx)(y.a,{exact:!0,path:"/PplFinder",component:ie}),Object(w.jsx)(y.a,{exact:!0,path:"/Favorites",component:ce})]})]})})};m.a.render(Object(w.jsx)(be,{}),document.querySelector("#root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.47d3c3af.chunk.js.map