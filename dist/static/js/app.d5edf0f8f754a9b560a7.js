webpackJsonp([1],{"1uuo":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=s("7+uW"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.luckydogs&&t.luckydogs.length?s("div",{staticClass:"hello"},[s("h1",[t._v(t._s("There are "+t.luckydogs.length+" lucky dogs!"))]),t._v(" "),s("el-transfer",{attrs:{data:t.data,titles:["Source","Target"],"button-texts":["到左边","幸运儿"]},on:{change:t.handleChange},model:{value:t.selected_luckydogs,callback:function(e){t.selected_luckydogs=e},expression:"selected_luckydogs"}})],1):t._e()},staticRenderFns:[]};var a=s("VU/8")({name:"LuckyDogs",props:["luckydogs"],data:function(){return{selected_luckydogs:[]}},methods:{handleChange:function(){for(var t=[],e=0;e<this.selected_luckydogs.length;e++){var s=this.selected_luckydogs[e];t.push({name:this.luckydogs[s]})}this.$emit("selected",t)}},computed:{data:function(){for(var t=[],e=0;e<this.luckydogs.length;e++)t.push({key:e,label:"LuckyDogs "+this.luckydogs[e],disabled:!1});return t}}},n,!1,function(t){s("qyq0")},"data-v-37b83531",null).exports,o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},t._l(t.results,function(e,l){return s("h3",{key:l},[t._v("\n       "+t._s(l+1+":")+" Congratulations, "+t._s(e.name)+", You are the Lucky Dog!  "+t._s(e.time)+".\n    ")])}))},staticRenderFns:[]};var r=s("VU/8")({name:"Results",data:function(){return{msg:"Welcome to LuckyDogs Results"}},props:["results"]},o,!1,function(t){s("ZABF")},"data-v-0e86d895",null).exports,c=s("M4fF"),i=s.n(c),u={name:"App",components:{"lucky-dogs":a,results:r},data:function(){return{lucky_dogs:["国栋","蔡颖","李祥","伟耀","晓梅","婷婷","汝邈","熙哥"],Mode:"hand",Times:8,RESULTS:[],LUCKY_DOG:"",selected:[],clickTime:0,newLuckDog:"",Interval:"",showsetting:!0}},methods:{addLuckyDog:function(){this.newLuckDog&&this.lucky_dogs.push(this.newLuckDog)},delLuckDog:function(t){this.lucky_dogs.splice(t,1)},clearAll:function(){this.lucky_dogs=[]},ToggleSetting:function(){this.showsetting=!this.showsetting},handleSelected:function(t,e){console.log(t,e),this.selected=t},getResult:function(){if(this.selected.length){this.showsetting=!1;var t=this.RandomNumBoth(0,this.selected.length-1),e={name:this.selected[t].name,time:(new Date).toLocaleTimeString()};this.RESULTS.push(e)}else alert("No lucky dog can be selected!")},autoGetResult:function(){var t=this;this.selected.length?(this.showsetting=!1,t.clickTime=0,this.Interval=setInterval(function(){t.getResult(),t.clickTime++,t.Times==t.clickTime&&clearInterval(t.Interval)},1e3)):alert("No lucky dog can be selected!")},shuffle:function(){this.selected=i.a.shuffle(this.selected),this.showsetting=!1},Reset:function(){this.Mode="hand",this.Times=8,this.RESULTS=[],this.LUCKY_DOG="",this.clickTime=0,this.newLuckDog="",clearInterval(this.Interval),this.Interval="",this.showsetting=!0},RandomNumBoth:function(t,e){var s=e-t,l=Math.random(),n=t+Math.round(l*s);return console.log(n),n}},computed:{finalResult:function(){return i.a.groupBy(this.RESULTS,function(t){return t.name})}},watch:{Mode:function(t,e){this.clickTime=0,this.RESULTS=[];"shuffle"==t&&(this.shuffle(),this.showsetting=!1)}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",[s("el-container",[s("el-header",[s("h1",[t._v("Who is the lucky dog？")])]),t._v(" "),s("el-main",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showsetting,expression:"showsetting"}]},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{staticClass:"info",attrs:{span:24}},[s("span",[t._v("\n                    请输入Lucky dog：\n                  ")])]),t._v(" "),s("el-col",{staticClass:"input",attrs:{span:24}},[s("el-input",{attrs:{placeholder:"添加 lucky dog",clearable:""},model:{value:t.newLuckDog,callback:function(e){t.newLuckDog=e},expression:"newLuckDog"}})],1),t._v(" "),s("el-col",{staticClass:"add_btn",attrs:{span:24}},[s("el-button",{attrs:{type:"primary"},on:{click:t.addLuckyDog}},[t._v("Add LUCKY DOG")])],1),t._v(" "),t.lucky_dogs&&t.lucky_dogs.length?s("el-col",{attrs:{span:24}},[s("el-card",{staticClass:"box-card"},[s("h3",[t._v("lucky dogs lists")]),t._v(" "),t._l(t.lucky_dogs,function(e,l){return s("div",{key:l,staticClass:"text item"},[s("span",[t._v(t._s(e))]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-delete"},on:{click:function(e){t.delLuckDog(l)}}},[t._v("删除")])],1)}),t._v(" "),s("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-delete"},on:{click:t.clearAll}},[t._v("清空")])],2)],1):t._e()],1)],1),t._v(" "),s("el-col",{attrs:{span:12}},[s("lucky-dogs",{attrs:{luckydogs:t.lucky_dogs},on:{selected:t.handleSelected}})],1)],1),t._v(" "),s("hr"),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[t._v("\n                请输入选择次数：\n              ")]),t._v(" "),s("el-col",{attrs:{span:16}},[s("el-input",{attrs:{placeholder:"请输入次数",clearable:""},model:{value:t.Times,callback:function(e){t.Times=e},expression:"Times"}})],1)],1),t._v(" "),s("hr")],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[t._v("\n              选择模式：\n            ")]),t._v(" "),s("el-col",{attrs:{span:16}},[s("el-radio",{attrs:{label:"auto"},model:{value:t.Mode,callback:function(e){t.Mode=e},expression:"Mode"}},[t._v("自动执行")]),t._v(" "),s("el-radio",{attrs:{label:"hand"},model:{value:t.Mode,callback:function(e){t.Mode=e},expression:"Mode"}},[t._v("手动执行")]),t._v(" "),s("el-radio",{attrs:{label:"shuffle"},model:{value:t.Mode,callback:function(e){t.Mode=e},expression:"Mode"}},[t._v("随机排序")])],1)],1),t._v(" "),s("hr"),t._v(" "),"auto"==t.Mode?s("el-row",{attrs:{gutter:20}},[s("el-button",{attrs:{type:"primary",disabled:t.Times==t.clickTime&&0!=t.clickTime},on:{click:t.autoGetResult}},[t._v(" auto pick")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.Reset}},[t._v("Reset")]),t._v(" "),s("el-button",{on:{click:t.ToggleSetting}},[t._v("Toggle setting")])],1):"hand"==t.Mode?s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:24}},[s("el-button",{attrs:{type:"primary",disabled:t.Times==t.clickTime&&0!=t.clickTime&&t.Interval},on:{click:t.getResult}},[t._v("pick")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.Reset}},[t._v("Reset")]),t._v(" "),s("el-button",{on:{click:t.ToggleSetting}},[t._v("Toggle setting")])],1)],1):"shuffle"==t.Mode?s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:24}},[s("el-button",{attrs:{type:"primary"},on:{click:t.shuffle}},[t._v("shuffle")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.Reset}},[t._v("Reset")]),t._v(" "),s("el-button",{on:{click:t.ToggleSetting}},[t._v("Toggle setting")])],1),t._v(" "),s("el-col",{staticClass:"sort-result"},[s("h3",[t._v("最新的顺序如下：")]),t._v(" "),t._l(t.selected,function(e,l){return s("h3",{key:l},[t._v(t._s(l+1)+"、"+t._s(e.name))])})],2)],1):t._e(),t._v(" "),s("hr"),t._v(" "),t.RESULTS.length?s("el-row",[s("el-col",{staticClass:"sort-result"},t._l(t.finalResult,function(e,l){return s("h3",{key:l},[t._v(t._s(l+1)+"的次数是："+t._s(e.length))])})),t._v(" "),s("el-col",{staticClass:"sort-result",attrs:{span:24}},[s("results",{attrs:{results:t.RESULTS}})],1)],1):t._e()],1)],1)],1)},staticRenderFns:[]};var h=s("VU/8")(u,d,!1,function(t){s("XTNU")},null,null).exports,v=s("/ocq"),_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var g=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},_,!1,function(t){s("1uuo")},"data-v-d8ec41bc",null).exports;l.default.use(v.a);var f=new v.a({routes:[{path:"/",name:"HelloWorld",component:g}]}),k=s("zL8q"),p=s.n(k);s("tvR6");l.default.use(p.a),l.default.config.productionTip=!1,new l.default({el:"#app",router:f,components:{App:h},template:"<App/>"})},XTNU:function(t,e){},ZABF:function(t,e){},qyq0:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d5edf0f8f754a9b560a7.js.map