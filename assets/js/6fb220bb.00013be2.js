"use strict";(self.webpackChunklab_240=self.webpackChunklab_240||[]).push([[6],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const l={slug:"telegraf-starlark",title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432 Telegraf",authors:"dmn",tags:["team","lab240"]},i=void 0,o={permalink:"/blog/telegraf-starlark",editUrl:"https://github.com/lab240/lab240.github.io/blob/main/blog/2023-08-21-dmn/index.md",source:"@site/blog/2023-08-21-dmn/index.md",title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432 Telegraf",description:"\u041f\u0440\u0435\u0434\u0438\u0441\u043b\u043e\u0432\u0438\u0435. \u041e Telegraf.",date:"2023-08-21T00:00:00.000Z",formattedDate:"21 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2023 \u0433.",tags:[{label:"team",permalink:"/blog/tags/team"},{label:"lab240",permalink:"/blog/tags/lab-240"}],readingTime:4.14,hasTruncateMarker:!1,authors:[{name:"dmn",title:"lab240 maintainer",url:"https://github.com/dmnovikov",imageURL:"https://avatars.githubusercontent.com/u/17533288?v=4",key:"dmn"}],frontMatter:{slug:"telegraf-starlark",title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432 Telegraf",authors:"dmn",tags:["team","lab240"]},nextItem:{title:"\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0443 \u0441 \u041f\u0414\u0423 *)",permalink:"/blog/dmn-prj-na-1"}},s={authorsImageUrls:[void 0]},p=[{value:"\u041f\u0440\u0435\u0434\u0438\u0441\u043b\u043e\u0432\u0438\u0435. \u041e Telegraf.",id:"\u043f\u0440\u0435\u0434\u0438\u0441\u043b\u043e\u0432\u0438\u0435-\u043e-telegraf",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 Telegraf",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-telegraf",level:2},{value:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445",level:2},{value:"\u041f\u0440\u0438\u0435\u043c\u043d\u0438\u043a \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043f\u0440\u0438\u0435\u043c\u043d\u0438\u043a-\u0434\u0430\u043d\u043d\u044b\u0445",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u043f\u0440\u0435\u0434\u0438\u0441\u043b\u043e\u0432\u0438\u0435-\u043e-telegraf"},"\u041f\u0440\u0435\u0434\u0438\u0441\u043b\u043e\u0432\u0438\u0435. \u041e Telegraf."),(0,a.kt)("p",null,"Telegraf \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u043a \u043f\u0440\u0438\u0435\u043c\u043d\u0438\u043a\u0430\u043c \u0434\u0430\u043d\u043d\u044b\u0445. \u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u044b \u043e\u043f\u0440\u043e\u0441\u0430 \u0434\u0430\u0442\u0447\u0438\u043a\u043e\u0432, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a modbus\\mqtt, \u0430 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043f\u0440\u0438\u0435\u043c\u043d\u0438\u043a\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 (influxdb, mysql). \u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0441\u043e\u0442\u0435\u043d \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432 \u0434\u043b\u044f Telegraf \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0430\u0435\u0442 \u043d\u0430\u0441 \u043e\u0442 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u043f\u043e \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u043d\u0438\u044e \u0434\u0430\u043d\u043d\u044b\u0445, \u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 Telegraf: ",(0,a.kt)("a",{parentName:"li",href:"https://www.influxdata.com/time-series-platform/telegraf/"},"https://www.influxdata.com/time-series-platform/telegraf/")," "),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u043b\u0430\u0433\u0438\u043d\u044b Telegraf: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.influxdata.com/telegraf/v1.26/plugins/"},"https://docs.influxdata.com/telegraf/v1.26/plugins/")))),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-telegraf"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 Telegraf"),(0,a.kt)("p",null,'\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c "\u043a\u043e\u043c\u0431\u0430\u0439\u043d" Telegraf \u0432 \u043d\u0430\u0448\u0438\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u044f\u0445 \u043f\u043e \u0441\u0431\u043e\u0440\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043b\u044e\u0431\u0438\u043c \u0435\u0433\u043e \u0437\u0430 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. '),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043d\u0444\u0438\u0433 \u0434\u043b\u044f \u0441\u0431\u043e\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e modbus \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0442\u0430\u043a"),(0,a.kt)("p",null,"Modbus TCP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[[inputs.modbus]]\n  name = "Device"\n  slave_id = 4\n  timeout = "3s"\n\n  controller = "tcp://127.0.0.1:502" \n\n  holding_registers = [\n    { name = "elemy_binary1", byte_order = "AB",   data_type = "UINT16", scale=1.0,  address = [0]},\n    { name = "elemy_binary2", byte_order = "AB",   data_type = "UINT16", scale=1.0,  address = [1]},\n   ]\n\n')),(0,a.kt)("p",null,"Modbus rtu "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:"Modbus RTU",Modbus:!0,RTU:!0},"")),(0,a.kt)("p",null,"MQTT Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'\n[[inputs.mqtt_consumer]]\n\n  servers = ["tcp://SERVER:1883"]\n\n  topics = ["/donoff/+/out/sensors/+"]\n\n  username = "MQTT_USER"\n  password = "MQTT_PASS"\n\n  data_format = "value"\n  data_type = "string"\n  \n  \n[[inputs.mqtt_consumer.topic_parsing]]\n    topic = "/donoff/+/out/sensors/+"\n    tags = "/prj/dev/_/_/_"\n    fields = "/_/_/_/_/sensor_name"\n\n')),(0,a.kt)("h2",{id:"\u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445"},"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("p",null,"\u041f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0439\u0434\u0443\u0442 \u0432 \u043f\u0440\u0438\u0435\u043c\u043d\u0438\u043a, \u043e\u043d\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u044b, \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u043c\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430\u043c\u0438. \u041d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c\u044b\u0435 \u0433\u043e\u0442\u043e\u0432\u044b \u0432 \u043f\u0440\u044f\u043c\u043e\u043c \u0432\u0438\u0434\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u0432 \u0442\u0443\u0436\u0435 \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u0434\u043e \u043e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 (\u043b\u0438\u0448\u043d\u0438\u0435), \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0438\u043f\u044b, \u0438 \u0434\u0430\u0436\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445. "),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430 \u0434\u043b\u044f MQTT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[[processors.pivot]]\n    tag_key = "sensor_name"\n    value_key = "value"\n')),(0,a.kt)("p",null,"\u041e\u0434\u043d\u0430\u043a\u043e, \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u0431\u043e\u043b\u0435\u0435 \u043c\u043e\u0449\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 - \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a Starlark, \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043e\u0447\u0435\u043d\u044c \u0431\u043b\u0438\u0437\u043e\u043a \u043a Python."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 Starlark: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md"},"https://github.com/bazelbuild/starlark/blob/master/spec.md"))),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0430\u0437\u0437\u0431\u043e\u0440\u0430 \u0442\u043e\u043f\u0438\u043a\u043e\u0432 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0438\u0437 MQTT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"\n[[processors.starlark]]\n # Reads the Starlark script embedded\n\n  source = '''\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def apply(metric):\n\n#\u0420\u0430\u0437\u0431\u043e\u0440 \u043f\u043e\u043b\u044f \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0435\u043d\u0441\u043e\u0440\u0430 \n\n  sm=str(metric.fields['sensor_name'])\n \n#\u041c\u043e\u0436\u043d\u043e \"\u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c\" \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u043d\u0443\u0436\u043d\u044b\n\n  if sm == 'pzem004':\n    metric.fields.clear()\n    return metric\n\n#\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445\n  sv=float(metric.fields['value'])\n\n#\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u043c \u0432\u043c\u0435\u0441\u0442\u043e value=\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a \u0438\u043c\u044f_\u0441\u0435\u043d\u0441\u043e\u0440\u0430=\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\n  metric.fields[metric.fields['sensor_name']]=sv\n\n#\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435 type (\u0442\u0438\u043f \u0434\u0430\u0442\u0447\u0438\u043a\u0430) \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0438\u043c\u0435\u043d\u0438 \u0434\u0430\u0447\u0442\u0438\u043a\u0430 \u0438 \u0434\u0435\u043b\u0430\u0435\u043c undef \u0435\u0441\u043b\u0438 \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0442\u044c.\n\n  if 'temp' in sm:\n    metric.fields['type']='temp'\n  elif ('curr' in sm) or ('sct' in sm) :\n    metric.fields['type']='current'\n  elif ('sec' in sm):\n    metric.fields['type']='seconds'\n  elif ('power' in sm):\n    metric.fields['type']='power'\n  elif ('energy' in sm):\n    metric.fields['type']='energy'\n  elif ('energy' in sm):\n    metric.fields['type']='volt'\n  else:\n    metric.fields['type']='undef'\n    \n #\u0423\u0431\u0438\u0440\u0430\u0435\u043c \u043b\u0438\u0448\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438    \n  \n  metric.fields.pop('value')\n  metric.tags.pop('topic')\n  metric.fields.pop('sensor_name')\n\n  return metric\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"'''\n")),(0,a.kt)("p",null,"\u0415\u0449\u0435 \u043e\u0434\u0438\u043d \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f starlark - \u0440\u0430\u0437\u0431\u043e\u0440 \u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 modbus \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 \u043d\u0430 \u0431\u0438\u0442\u044b (\u0432\u043e\u0442 \u0442\u0430\u043a \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u043b \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'\n[inputs.modbus]]\n  name = "Device"\n  slave_id = 4\n  timeout = "3s"\n  controller = "tcp://127.0.0.1:502"\n  holding_registers = [\n    { name = "elemy_binary1", byte_order = "AB",   data_type = "UINT16", scale=1.0,  address = [0]},\n     ]\n\n[[processors.starlark]]\n # Reads the Starlark script embedded\n\n  source = \'\'\'\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def apply(metric):\n  \n  ei=metric.fields['elemy_binary1']\n\n# \u0413\u043e\u0442\u043e\u0432\u0438\u043c \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 16 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\n\n  bit_array=[None]*16\n\n# \u0411\u0435\u0440\u0435\u043c \u0432\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u043a\u0430\u0436\u0434\u044b\u0439 \u0431\u0438\u0442 \u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043c\u0430\u0441\u0441\u0438\u0432\u0430\n  \n  for i in range(0,16):\n   bit_array[i]=(ei>>i) & 1\n\n# \u0424\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u043c \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0431\u0438\u0442\u043e\u0432 (\u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438 multi_bit) \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\n\n  metric.fields['priority']=bit_array[1]+2*bit_array[0]\n  \n  \n  metric.fields['switch_mode']=bit_array[2]\n  \n  metric.fields['is_input1_norm_state']=bit_array[8]\n  metric.fields['is_input2_norm_state']=bit_array[9]\n  \n  metric.fields['is_input1_active']=bit_array[10]\n  metric.fields['is_input2_active']=bit_array[11]\n  \n  metric.fields['load_state']=bit_array[13]+2*bit_array[12]\n  \n  metric.fields['is_out_voltage1']=bit_array[14]\n  metric.fields['is_out_voltage2']=bit_array[15]\n    \n  return metric\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"'''\n")),(0,a.kt)("p",null,"\u041d\u0430\u0434\u0435\u0435\u043c\u0441\u044f \u0438\u0437 \u044d\u0442\u0438\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043f\u043e\u043d\u044f\u0442\u043d\u043e, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0433\u0438\u0431\u043e\u043a \u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u0435\u043d \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 Starlark. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u0424\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438, \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 Telegraf \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0432\u0437\u044f\u0442\u044b \u0438\u0437 \u043c\u043d\u043e\u0433\u0438\u0445 \u0438 \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u043e \u043f\u0440\u0438\u0440\u043e\u0434\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432. \u0410 \u0434\u0430\u043b\u0435\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c \u043d\u0430 Starlark - \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u044b, \u043f\u043e\u0434\u0447\u0438\u0449\u0435\u043d\u044b, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0438 \u0432\u044b\u0434\u0430\u043d\u044b \u0432 \u043f\u0440\u0438\u0435\u043c\u043d\u0438\u043a.")),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u0435\u043c\u043d\u0438\u043a-\u0434\u0430\u043d\u043d\u044b\u0445"},"\u041f\u0440\u0438\u0435\u043c\u043d\u0438\u043a \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("p",null,'\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043c \u0432\u044b\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 influx_v2. \u041a\u0430\u043a \u0432\u0438\u0434\u043d\u043e, \u043a\u043e\u043d\u0444\u0438\u0433 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e "\u0442\u0443\u043f\u043e\u0439", \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u044b \u0443\u0436\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 !'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'\n[[outputs.influxdb_v2]]\n  ## The URLs of the InfluxDB cluster nodes.\n  ##\n  ## Multiple URLs can be specified for a single cluster, only ONE of the\n  ## urls will be written to each interval.\n  ##   ex: urls = ["https://us-west-2-1.aws.cloud2.influxdata.com"]\n  urls = ["http://mon_influxdb2:8086"]\n\n  ## Token for authentication.\n  token = "TOKEN"\n\n  ## Organization is the name of the organization you wish to write to.\n  organization = "nnzipc"\n\n  ## Destination bucket to write into.\n  bucket = "bucket1"\n\n  ## The value of this tag will be used to determine the bucket.  If this\n  ## tag is not set the \'bucket\' option is used as the default.\n  # bucket_tag = ""\n\n  ## If true, the bucket tag will not be added to the metric.\n  # exclude_bucket_tag = false\n\n  ## Timeout for HTTP messages.\n  # timeout = "5s"\n\n  ## Additional HTTP headers\n  # http_headers = {"X-Special-Header" = "Special-Value"}\n\n  ## HTTP Proxy override, if unset values the standard proxy environment\n  ## variables are consulted to determine which proxy, if any, should be used.\n  # http_proxy = "http://corporate.proxy:3128"\n\n  ## HTTP User-Agent\n  user_agent = "telegraf"\n\n  ## Content-Encoding for write request body, can be set to "gzip" to\n  ## compress body or "identity" to apply no encoding.\n  # content_encoding = "gzip"\n\n  ## Enable or disable uint support for writing uints influxdb 2.0.\n  # influx_uint_support = false\n\n  ## Optional TLS Config for use on HTTP connections.\n  # tls_ca = "/etc/telegraf/ca.pem"\n  # tls_cert = "/etc/telegraf/cert.pem"\n  # tls_key = "/etc/telegraf/key.pem"\n  ## Use TLS but skip chain & host verification\n  # insecure_skip_verify = false\n\n\n')),(0,a.kt)("p",null,"\ud83d\udca5 \u0423\u0434\u0430\u0447\u0438 \u0412\u0430\u043c (\u0438 \u043d\u0430\u043c) \u0432 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"))}c.isMDXComponent=!0}}]);