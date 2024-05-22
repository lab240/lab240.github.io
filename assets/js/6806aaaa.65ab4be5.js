"use strict";(self.webpackChunklab_240=self.webpackChunklab_240||[]).push([[3740],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(7462),a=(n(7294),n(4137));const o={slug:"modbus-stand-2",title:"\u0421\u0442\u0435\u043d\u0434 ModBus 2",authors:"dmn",tags:["modbus","nnzipc"]},l=void 0,u={permalink:"/blog/modbus-stand-2",editUrl:"https://github.com/lab240/lab240.github.io/blob/main/blog/2024-05-22-modbus-stand2/index.md",source:"@site/blog/2024-05-22-modbus-stand2/index.md",title:"\u0421\u0442\u0435\u043d\u0434 ModBus 2",description:"\u041d\u043e\u0432\u043e\u0435 \u0432 \u0436\u0435\u043b\u0435\u0437\u0435 ModbusStand 2.0",date:"2024-05-22T00:00:00.000Z",formattedDate:"22 \u043c\u0430\u044f 2024 \u0433.",tags:[{label:"modbus",permalink:"/blog/tags/modbus"},{label:"nnzipc",permalink:"/blog/tags/nnzipc"}],readingTime:.69,hasTruncateMarker:!0,authors:[{name:"dmn",title:"lab240 maintainer",url:"https://github.com/dmnovikov",imageURL:"https://avatars.githubusercontent.com/u/17533288?v=4",key:"dmn"}],frontMatter:{slug:"modbus-stand-2",title:"\u0421\u0442\u0435\u043d\u0434 ModBus 2",authors:"dmn",tags:["modbus","nnzipc"]},nextItem:{title:"\u0421\u0431\u043e\u0440\u0449\u0438\u043a-\u043a\u043e\u043c\u043f\u0430\u043a\u0442 \u043d\u0430 \u0432\u044b\u0441\u0442\u0430\u0432\u043a\u0435 \u0426\u041e\u0414",permalink:"/blog/elemy-exebition"}},i={authorsImageUrls:[void 0]},s=[{value:"\u041d\u043e\u0432\u043e\u0435 \u0432 \u0436\u0435\u043b\u0435\u0437\u0435 ModbusStand 2.0",id:"\u043d\u043e\u0432\u043e\u0435-\u0432-\u0436\u0435\u043b\u0435\u0437\u0435-modbusstand-20",level:2},{value:"\u041d\u043e\u0432\u043e\u0435 \u0432 \u0441\u043e\u0444\u0442\u0435",id:"\u043d\u043e\u0432\u043e\u0435-\u0432-\u0441\u043e\u0444\u0442\u0435",level:2}],p={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u043d\u043e\u0432\u043e\u0435-\u0432-\u0436\u0435\u043b\u0435\u0437\u0435-modbusstand-20"},"\u041d\u043e\u0432\u043e\u0435 \u0432 \u0436\u0435\u043b\u0435\u0437\u0435 ModbusStand 2.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u0438\u0442\u0430\u043d\u0438\u0435 4-40\u0432;"),(0,a.kt)("li",{parentName:"ul"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c\\\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0430\u0442\u0447\u0438\u043a;"),(0,a.kt)("li",{parentName:"ul"},'\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c "\u043f\u0440\u0438\u0442\u044f\u043d\u0443\u0442\u044c" Wemos\\\u0428\u0438\u043b\u0434\u0443 \u043a \u043f\u043b\u0430\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435'),(0,a.kt)("li",{parentName:"ul"},"\u0412\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u043d\u044b \u043f\u043e\u0434 \u043d\u0430\u0432\u0435\u0441\u043d\u043e\u0439 \u043c\u043e\u043d\u0442\u0430\u0436 (\u0434\u043b\u044f \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0431\u043e\u0440\u043a\u0438)")),(0,a.kt)("h2",{id:"\u043d\u043e\u0432\u043e\u0435-\u0432-\u0441\u043e\u0444\u0442\u0435"},"\u041d\u043e\u0432\u043e\u0435 \u0432 \u0441\u043e\u0444\u0442\u0435"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u041f\u0440\u043e\u0448\u0438\u0432\u043a\u0430 \u0434\u043b\u044f Wemos: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lab240/esp8266-modbus-stand/tree/dev1"},"https://github.com/lab240/esp8266-modbus-stand/tree/dev1"),"\n\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0434\u0430\u0448 \u0431\u043e\u0440\u0434\u0430 \u0434\u043b\u044f Grafana, \u043a\u043e\u043d\u0444\u0438\u0433\u0438 \u0434\u043b\u044f Telegraf: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lab240/modbus-stand-tools"},"https://github.com/lab240/modbus-stand-tools"))),(0,a.kt)("p",null,"\u041e\u0442\u043a\u0440\u044b\u0442\u0430\u044f \u043f\u0440\u043e\u0448\u0438\u0432\u043a\u0430 \u0434\u043b\u044f Wemos \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442"),(0,a.kt)("p",null,"\u0421\u043a\u0435\u0442\u0447 \u0434\u043b\u044f \u0441\u0440\u0435\u0434\u044b Arduino IDE \\ VC \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 (\u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u0435\u0437 \u043f\u0440\u043e\u0448\u0438\u0432\u043a\u0438)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041d\u0430\u0437\u043d\u0430\u0447\u0430\u0442\u044c Modbus \u0430\u0434\u0440\u0435\u0441"),(0,a.kt)("li",{parentName:"ul"},"\u041c\u0435\u043d\u044f\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e hold-\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u043e\u0432 \u0438 coil-\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},"\u041c\u0435\u043d\u044f\u0442\u044c \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b RS485 \u043f\u043e\u0440\u0442\u0430")))}c.isMDXComponent=!0}}]);