"use strict";(self.webpackChunklab_240=self.webpackChunklab_240||[]).push([[7235],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const a={slug:"front-control-live-view",title:"\u0421\u0431\u043e\u0440\u0449\u0438\u043a-\u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b. \u041f\u0435\u0440\u0432\u044b\u0439 \u0432\u0437\u0433\u043b\u044f\u0434 \u0436\u0438\u0432\u044c\u0435\u043c.",tags:["napi","frontcontrol","napi-p"]},l=void 0,i={permalink:"/blog/front-control-live-view",editUrl:"https://github.com/lab240/lab240.github.io/blob/main/blog/2023-11-14-frontcontrolunilive/index.md",source:"@site/blog/2023-11-14-frontcontrolunilive/index.md",title:"\u0421\u0431\u043e\u0440\u0449\u0438\u043a-\u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b. \u041f\u0435\u0440\u0432\u044b\u0439 \u0432\u0437\u0433\u043b\u044f\u0434 \u0436\u0438\u0432\u044c\u0435\u043c.",description:"\u0420\u0430\u043d\u0435\u0435 \u043c\u044b \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u043b\u0438 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430, \u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u0433\u043e\u0442\u043e\u0432\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u0439 \u0444\u043e\u0442\u043a\u0438. \u042d\u0442\u043e \u043d\u0435\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0430\u0439\u0442, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c \u0441\u0435\u0431\u0435 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0444\u043e\u0442\u043a\u0430\u043c\u0438 \u0441 \u043f\u043e\u043b\u0435\u0439.",date:"2023-11-14T00:00:00.000Z",formattedDate:"14 \u043d\u043e\u044f\u0431\u0440\u044f 2023 \u0433.",tags:[{label:"napi",permalink:"/blog/tags/napi"},{label:"frontcontrol",permalink:"/blog/tags/frontcontrol"},{label:"napi-p",permalink:"/blog/tags/napi-p"}],readingTime:.315,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"front-control-live-view",title:"\u0421\u0431\u043e\u0440\u0449\u0438\u043a-\u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b. \u041f\u0435\u0440\u0432\u044b\u0439 \u0432\u0437\u0433\u043b\u044f\u0434 \u0436\u0438\u0432\u044c\u0435\u043c.",tags:["napi","frontcontrol","napi-p"]},nextItem:{title:"\u0421\u0431\u043e\u0440\u0449\u0438\u043a-\u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b. \u041f\u0435\u0440\u0432\u044b\u0439 \u0432\u0437\u0433\u043b\u044f\u0434 \u043d\u0430 \u043a\u043e\u043d\u0446\u0435\u043f\u0442.",permalink:"/blog/front-control-first-view"}},c={authorsImageUrls:[]},p=[{value:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0432\u0437\u0433\u043b\u044f\u0434 &quot;\u0436\u0438\u0432\u044c\u0435\u043c&quot;",id:"\u043f\u0435\u0440\u0432\u044b\u0439-\u0432\u0437\u0433\u043b\u044f\u0434-\u0436\u0438\u0432\u044c\u0435\u043c",level:2}],u={toc:p},f="wrapper";function s(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0420\u0430\u043d\u0435\u0435 \u043c\u044b \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u043b\u0438 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430, \u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u0433\u043e\u0442\u043e\u0432\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u0439 \u0444\u043e\u0442\u043a\u0438. \u042d\u0442\u043e \u043d\u0435\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0430\u0439\u0442, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c \u0441\u0435\u0431\u0435 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0444\u043e\u0442\u043a\u0430\u043c\u0438 \u0441 \u043f\u043e\u043b\u0435\u0439. "),(0,o.kt)("h2",{id:"\u043f\u0435\u0440\u0432\u044b\u0439-\u0432\u0437\u0433\u043b\u044f\u0434-\u0436\u0438\u0432\u044c\u0435\u043c"},'\u041f\u0435\u0440\u0432\u044b\u0439 \u0432\u0437\u0433\u043b\u044f\u0434 "\u0436\u0438\u0432\u044c\u0435\u043c"'),(0,o.kt)("p",null,"\u0412\u043e\u0442 \u0442\u0430\u043a\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(4351).Z,width:"534",height:"298"})),(0,o.kt)("p",null,'\u0421 "\u043a\u043e\u043b\u043e\u0434\u043a\u043e\u0439" \u0441 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043c\u0438.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(9328).Z,width:"539",height:"345"})))}s.isMDXComponent=!0},4351:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fc-l-1-f5e9919a2353991a9a8fa5b43c2fa0a3.png"},9328:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fc-l-2-7dbd93efd7a803e41fe1d38efe68281a.png"}}]);