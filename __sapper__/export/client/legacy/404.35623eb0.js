import{_ as t,a,b as s,i as e,c as n,S as r,e as o,d as c,s as i,X as l,g as u,h,Y as f,j as m,m as v,Z as d,f as g,a3 as p,k as y,l as E,o as b,n as k}from"./index.fab8d267.js";function x(t){var a,s,e=t[1].stack+"";return{c:function(){a=o("pre"),s=l(e)},l:function(t){a=u(t,"PRE",{});var n=h(a);s=f(n,e),n.forEach(m)},m:function(t,e){v(t,a,e),c(a,s)},p:function(t,a){2&a&&e!==(e=t[1].stack+"")&&d(s,e)},d:function(t){t&&m(a)}}}function _(t){var a,s,e,n,r,i,_,j,I,P,R,q,z=t[1].message+"";document.title=a=t[0];var A=t[2]&&t[1].stack&&x(t);return{c:function(){s=g(),e=o("h1"),n=l(t[0]),r=g(),i=o("p"),_=l(z),j=g(),A&&A.c(),I=g(),P=o("div"),R=o("marquee"),q=l("П Р О И З О Ш Л А КАКАЯ_ТО УЖАСНАЯ О Ш И Б К А"),this.h()},l:function(a){p('[data-svelte="svelte-1moakz"]',document.head).forEach(m),s=y(a),e=u(a,"H1",{class:!0});var o=h(e);n=f(o,t[0]),o.forEach(m),r=y(a),i=u(a,"P",{class:!0});var c=h(i);_=f(c,z),c.forEach(m),j=y(a),A&&A.l(a),I=y(a),P=u(a,"DIV",{class:!0});var l=h(P);R=u(l,"MARQUEE",{bgcolor:!0,class:!0});var v=h(R);q=f(v,"П Р О И З О Ш Л А КАКАЯ_ТО УЖАСНАЯ О Ш И Б К А"),v.forEach(m),l.forEach(m),this.h()},h:function(){E(e,"class","svelte-hgpyh2"),E(i,"class","svelte-hgpyh2"),E(R,"bgcolor","lavender"),E(R,"class","text-primary-a400 my-16 text-5xl bg-primary-100"),E(P,"class","my-56")},m:function(t,a){v(t,s,a),v(t,e,a),c(e,n),v(t,r,a),v(t,i,a),c(i,_),v(t,j,a),A&&A.m(t,a),v(t,I,a),v(t,P,a),c(P,R),c(R,q)},p:function(t,s){var e=b(s,1)[0];1&e&&a!==(a=t[0])&&(document.title=a),1&e&&d(n,t[0]),2&e&&z!==(z=t[1].message+"")&&d(_,z),t[2]&&t[1].stack?A?A.p(t,e):((A=x(t)).c(),A.m(I.parentNode,I)):A&&(A.d(1),A=null)},i:k,o:k,d:function(t){t&&m(s),t&&m(e),t&&m(r),t&&m(i),t&&m(j),A&&A.d(t),t&&m(I),t&&m(P)}}}function j(t,a,s){var e=a.status,n=a.error;return t.$set=function(t){"status"in t&&s(0,e=t.status),"error"in t&&s(1,n=t.error)},[e,n,!1]}export default(function(l){t(h,r);var u=a(h);function h(t){var a,r;return s(this,h),a=u.call(this),document.getElementById("svelte-hgpyh2-style")||((r=o("style")).id="svelte-hgpyh2-style",r.textContent="h1.svelte-hgpyh2,p.svelte-hgpyh2{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}",c(document.head,r)),e(n(a),t,j,_,i,{status:0,error:1}),a}return h}());