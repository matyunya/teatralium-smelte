import{S as s,i as e,s as r,e as t,b as a,c as n,d as i,f as o,g as c,h as l,j as h,a as p,n as u}from"./index.856e67de.js";import{s as f}from"./subtitle.c5d04088.js";function d(s){let e,r,d,H,T,x=m(s[0])+"",L=f(s[0])+"";return{c(){e=t("a"),r=t("h2"),d=a(),H=t("h5"),this.h()},l(s){e=n(s,"A",{class:!0,href:!0,rel:!0});var t=i(e);r=n(t,"H2",{class:!0}),i(r).forEach(o),d=c(t),H=n(t,"H5",{}),i(H).forEach(o),t.forEach(o),this.h()},h(){l(r,"class","my-0 py-0"),l(e,"class","md:pl-10 pt-10 px-4 no-underline"),l(e,"href",T=s[0].url+"/"),l(e,"rel","prefetch")},m(s,t){h(s,e,t),p(e,r),r.innerHTML=x,p(e,d),p(e,H),H.innerHTML=L},p(s,[t]){1&t&&x!==(x=m(s[0])+"")&&(r.innerHTML=x),1&t&&L!==(L=f(s[0])+"")&&(H.innerHTML=L),1&t&&T!==(T=s[0].url+"/")&&l(e,"href",T)},i:u,o:u,d(s){s&&o(e)}}}function m({title:s,customTitle:e}){return e||(s.includes(":")?s.split(":")[0]:s)}function H(s,e,r){let{post:t={}}=e;return s.$set=(s=>{"post"in s&&r(0,t=s.post)}),[t]}class T extends s{constructor(s){super(),e(this,s,H,d,r,{post:0})}}export{T as P};