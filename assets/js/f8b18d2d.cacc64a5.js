(self.webpackChunklab_240=self.webpackChunklab_240||[]).push([[3821],{5188:(a,t,e)=>{a.exports={src:{srcSet:e.p+"assets/ideal-img/header.bc05ba5.480.png 480w,"+e.p+"assets/ideal-img/header.9957762.664.png 664w,"+e.p+"assets/ideal-img/header.ef38812.847.png 847w,"+e.p+"assets/ideal-img/header.cbdb671.1022.png 1022w",images:[{path:e.p+"assets/ideal-img/header.bc05ba5.480.png",width:480,height:121},{path:e.p+"assets/ideal-img/header.9957762.664.png",width:664,height:168},{path:e.p+"assets/ideal-img/header.ef38812.847.png",width:847,height:214},{path:e.p+"assets/ideal-img/header.cbdb671.1022.png",width:1022,height:258}],src:e.p+"assets/ideal-img/header.bc05ba5.480.png",toString:function(){return e.p+"assets/ideal-img/header.bc05ba5.480.png"},placeholder:void 0,width:480,height:121},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAIAAADuA9qHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAASUlEQVQImQE+AMH/AGE1O0sxNXhYUpNrYVg9V7TAtomqs16nuYbN0bLm6QAdDxosGSlFPk1NVGhzhZSSr7ZHgKBXr8Gl4uWx7/E6AB2eLSCG3gAAAABJRU5ErkJggg=="}},7241:(a,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>h,metadata:()=>n,toc:()=>b});var s=e(7462),i=(e(7294),e(4137)),r=e(5944),g=e(5188),l=e.n(g);const h={slug:"ls1046a-cpu-chart",title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0443 LS1046a",authors:"IgorKha",tags:[1046,"NXP","CPU","chart","bash","monitoring"]},o=void 0,n={permalink:"/blog/ls1046a-cpu-chart",editUrl:"https://github.com/lab240/lab240.github.io/blob/main/blog/2023-08-27-1046-cpu-chart/index.mdx",source:"@site/blog/2023-08-27-1046-cpu-chart/index.mdx",title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0443 LS1046a",description:"\u0412\u0441\u0435\u043c \u043f\u0440\u0438\u0432\u0435\u0442! \u0412 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u044f \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0443 \u043f\u0440\u043e \u0442\u043e, \u043a\u0430\u043a \u043c\u044b \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u0431\u043e\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0447\u0430\u0441\u0442\u043e\u0442\u0435 \u0438 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430 \u0431\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0431\u0430\u0437\u0435 \u0441\u0431\u043e\u0440\u043a\u0438 Yocto. \u041c\u044b \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0435\u043c \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0441\u043e\u0431\u0440\u0430\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u0430 bash-\u0441\u043a\u0440\u0438\u043f\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435 \u043d\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0438 \u043a\u0430\u043a \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0438\u0445 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0430\u0448\u0435\u0433\u043e \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441\u0430.",date:"2023-08-27T00:00:00.000Z",formattedDate:"27 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2023 \u0433.",tags:[{label:"1046",permalink:"/blog/tags/1046"},{label:"NXP",permalink:"/blog/tags/nxp"},{label:"CPU",permalink:"/blog/tags/cpu"},{label:"chart",permalink:"/blog/tags/chart"},{label:"bash",permalink:"/blog/tags/bash"},{label:"monitoring",permalink:"/blog/tags/monitoring"}],readingTime:1.985,hasTruncateMarker:!0,authors:[{name:"IgorKha",title:"lab240 maintainer",url:"https://github.com/IgorKha",imageURL:"https://avatars.githubusercontent.com/u/2268209?v=4",key:"IgorKha"}],frontMatter:{slug:"ls1046a-cpu-chart",title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0443 LS1046a",authors:"IgorKha",tags:["1046","NXP","CPU","chart","bash","monitoring"]},nextItem:{title:"\u041b\u0435\u0442\u043e\u043f\u0438\u0441\u044c \u043f\u043b\u0430\u0442\u044b nxp ls1046 (\u0436\u0438\u0437\u043d\u044c)",permalink:"/blog/hard-1046-log-blog"}},p={authorsImageUrls:[void 0]},b=[],m={toc:b},d="wrapper";function c(a){let{components:t,...e}=a;return(0,i.kt)(d,(0,s.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{img:l(),mdxType:"Image"}),(0,i.kt)("p",null,"\u0412\u0441\u0435\u043c \u043f\u0440\u0438\u0432\u0435\u0442! \u0412 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u044f \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0443 \u043f\u0440\u043e \u0442\u043e, \u043a\u0430\u043a \u043c\u044b \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u0431\u043e\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0447\u0430\u0441\u0442\u043e\u0442\u0435 \u0438 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430 \u0431\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0431\u0430\u0437\u0435 \u0441\u0431\u043e\u0440\u043a\u0438 Yocto. \u041c\u044b \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0435\u043c \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0441\u043e\u0431\u0440\u0430\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",(0,i.kt)("del",{parentName:"p"},"\u0441\u0432\u043e\u0435\u0433\u043e \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u0430")," bash-\u0441\u043a\u0440\u0438\u043f\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435 \u043d\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0438 \u043a\u0430\u043a \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043b\u0438 \u0438\u0445 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0430\u0448\u0435\u0433\u043e \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441\u0430."))}c.isMDXComponent=!0}}]);