webpackJsonp([1],{"1uuo":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.luckydogs&&e.luckydogs.length?s("div",{staticClass:"hello"},[s("h1",[e._v(e._s("There are "+e.luckydogs.length+" lucky dogs!"))]),e._v(" "),s("el-transfer",{attrs:{data:e.data,titles:["Source","Target"],"button-texts":["到左边","幸运儿"]},on:{change:e.handleChange},model:{value:e.selected_luckydogs,callback:function(t){e.selected_luckydogs=t},expression:"selected_luckydogs"}})],1):e._e()},staticRenderFns:[]};var a=s("VU/8")({name:"LuckyDogs",props:["luckydogs"],data:function(){return{selected_luckydogs:[]}},methods:{handleChange:function(){for(var e=[],t=0;t<this.selected_luckydogs.length;t++){var s=this.selected_luckydogs[t];e.push({name:this.luckydogs[s]})}this.$emit("selected",e)}},computed:{data:function(){for(var e=[],t=0;t<this.luckydogs.length;t++)e.push({key:t,label:"LuckyDogs "+this.luckydogs[t],disabled:!1});return e}}},l,!1,function(e){s("qyq0")},"data-v-37b83531",null).exports,r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},e._l(e.results,function(t,n){return s("h2",{key:n},[e._v("\n       "+e._s(n+1+":")+" Congratulations, "+e._s(t.name)+", You are the Lucky Dog!  "+e._s(t.time)+".\n    ")])}))},staticRenderFns:[]};var o=s("VU/8")({name:"Results",data:function(){return{msg:"Welcome to LuckyDogs Results"}},props:["results"]},r,!1,function(e){s("P7QM")},"data-v-d7b298da",null).exports,c=s("M4fF"),u=s.n(c),i={name:"App",components:{"lucky-dogs":a,results:o},data:function(){return{lucky_dogs:["国栋","蔡颖","李祥","伟耀","晓梅","婷婷","汝邈","熙哥"],Mode:"hand",Times:8,RESULTS:[],LUCKY_DOG:"",selected:[],clickTime:0,newLuckDog:"",Interval:""}},methods:{addLuckyDog:function(){this.newLuckDog&&this.lucky_dogs.push(this.newLuckDog)},handleSelected:function(e,t){console.log(e,t),this.selected=e},getResult:function(){if(this.selected.length){var e=this.RandomNumBoth(0,this.selected.length-1),t={name:this.selected[e].name,time:(new Date).toLocaleTimeString()};this.RESULTS.push(t)}else alert("No lucky dog can be selected!")},autoGetResult:function(){var e=this;this.selected.length?(e.clickTime=0,this.Interval=setInterval(function(){e.getResult(),e.clickTime++,e.Times==e.clickTime&&clearInterval(e.Interval)},1e3)):alert("No lucky dog can be selected!")},Reset:function(){this.Mode="hand",this.Times=8,this.RESULTS=[],this.LUCKY_DOG="",this.clickTime=0,this.newLuckDog="",clearInterval(this.Interval),this.Interval=""},RandomNumBoth:function(e,t){var s=t-e,n=Math.random(),l=e+Math.round(n*s);return console.log(l),l}},computed:{finalResult:function(){return u.a.groupBy(this.RESULTS,function(e){return e.name})}},watch:{Mode:function(e,t){this.clickTime=0,this.RESULTS=[]}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-container",[s("el-container",[s("el-header",[s("h1",[e._v("Who is the lucky dog？")])]),e._v(" "),s("el-main",[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{staticClass:"info",attrs:{span:24}},[s("span",[e._v("\n                  请输入Lucky dog：\n                ")])]),e._v(" "),s("el-col",{staticClass:"input",attrs:{span:24}},[s("el-input",{attrs:{placeholder:"添加 lucky dog",clearable:""},model:{value:e.newLuckDog,callback:function(t){e.newLuckDog=t},expression:"newLuckDog"}})],1),e._v(" "),s("el-col",{staticClass:"add_btn",attrs:{span:24}},[s("el-button",{attrs:{type:"primary"},on:{click:e.addLuckyDog}},[e._v("Add LUCKY DOG")])],1)],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("lucky-dogs",{attrs:{luckydogs:e.lucky_dogs},on:{selected:e.handleSelected}})],1)],1),e._v(" "),s("hr"),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[e._v("\n              请输入选择次数：\n            ")]),e._v(" "),s("el-col",{attrs:{span:16}},[s("el-input",{attrs:{placeholder:"请输入次数",clearable:""},model:{value:e.Times,callback:function(t){e.Times=t},expression:"Times"}})],1)],1),e._v(" "),s("hr"),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[e._v("\n              选择模式：\n            ")]),e._v(" "),s("el-col",{attrs:{span:16}},[s("el-radio",{attrs:{label:"auto"},model:{value:e.Mode,callback:function(t){e.Mode=t},expression:"Mode"}},[e._v("自动执行")]),e._v(" "),s("el-radio",{attrs:{label:"hand"},model:{value:e.Mode,callback:function(t){e.Mode=t},expression:"Mode"}},[e._v("手动执行")])],1)],1),e._v(" "),s("hr"),e._v(" "),"auto"==e.Mode?s("el-row",{attrs:{gutter:20}},[s("el-button",{attrs:{type:"primary",disabled:e.Times==e.clickTime&&0!=e.clickTime},on:{click:e.autoGetResult}},[e._v(" auto pick")]),e._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:e.Reset}},[e._v("Reset")])],1):s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:24}},[s("el-button",{attrs:{type:"primary",disabled:e.Times==e.clickTime&&0!=e.clickTime&&e.Interval},on:{click:e.getResult}},[e._v("pick")]),e._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:e.Reset}},[e._v("Reset")])],1)],1),e._v(" "),s("hr"),e._v(" "),e.RESULTS.length?s("el-row",[s("el-col",e._l(e.finalResult,function(t,n){return s("h3",{key:n},[e._v(e._s(n)+"的次数是："+e._s(t.length))])})),e._v(" "),s("el-col",{attrs:{span:24}},[s("results",{attrs:{results:e.RESULTS}})],1)],1):e._e()],1)],1)],1)},staticRenderFns:[]};var h=s("VU/8")(i,d,!1,function(e){s("OT+m")},null,null).exports,v=s("/ocq"),_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),s("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),s("br"),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var g=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},_,!1,function(e){s("1uuo")},"data-v-d8ec41bc",null).exports;n.default.use(v.a);var m=new v.a({routes:[{path:"/",name:"HelloWorld",component:g}]}),p=s("zL8q"),k=s.n(p);s("tvR6");n.default.use(k.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:m,components:{App:h},template:"<App/>"})},"OT+m":function(e,t){},P7QM:function(e,t){},qyq0:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c2867e8cd856fc1d93a6.js.map