webpackJsonp([0],[,,function(t,e,n){"use strict";var a=n(1),r=n(19),c=n(14),s=n.n(c);a.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"datatable",component:s.a}]})},,function(t,e){},function(t,e,n){function a(t){n(10)}var r=n(0)(n(6),n(16),a,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(15),r=n.n(a);e.default={components:{Page:r.a},name:"datatable",data:function(){return{list:[],page:2,total:0,curr:1,currData:[]}},methods:{fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;fetch("http://localhost:3000/getData").then(function(t){return t.json()}).then(function(e){t.list=e.data,t.total=t.list.length;for(var n=(t.curr,t.page,(t.curr-1)*t.page),a=n;a<t.curr*t.page;a++)t.currData.push(t.list[a])})}),changePage:function(t){this.curr=t,this.currData=[];for(var e=(this.curr,this.page,(this.curr-1)*this.page),n=e;n<this.curr*this.page;n++)this.currData.push(this.list[n])}},mounted:function(){this.fetch()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page",data:function(){return{pageNum:0}},props:["page","total","curr"],methods:{showPages:function(){this.pageNum=Number(this.total)/Number(this.page)},changePage:function(t){t>0&&t<=this.pageNum&&this.$emit("changepage",t)}},mounted:function(){this.showPages()},watch:{total:function(t,e){this.showPages()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n(5),c=n.n(r),s=n(2),i=n(4),u=(n.n(i),n(3));n.n(u);a.a.config.productionTip=!1,new a.a({el:"#app",router:s.a,template:"<App/>",components:{App:c.a}})},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){function a(t){n(12)}var r=n(0)(n(7),n(18),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(11)}var r=n(0)(n(8),n(17),a,"data-v-4f8d64ca",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("ul",{staticClass:"pagination"},[n("li",{on:{click:function(e){t.changePage(t.curr-1)}}},[n("a",{attrs:{href:"#"}},[t._v("«")])]),t._v(" "),t._l(t.pageNum,function(e){return n("li",{class:[e==t.curr?"active":""],on:{click:function(n){t.changePage(e)}}},[n("a",{attrs:{href:"#"}},[t._v(t._s(e))])])}),t._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:function(e){t.changePage(t.curr+1)}}},[t._v("»")])])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("table",{staticClass:"table table-striped"},[n("caption",{staticClass:"text-center"},[t._v("数据展示")]),t._v(" "),t._m(0),t._v(" "),n("tbody",t._l(t.currData,function(e){return n("tr",[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.age))]),t._v(" "),n("td",[t._v(t._s(e.sex))])])}))]),t._v(" "),n("Page",{attrs:{page:t.page,total:t.total,curr:t.curr},on:{changepage:t.changePage}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"text-center"},[t._v("姓名")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("年龄")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("性别")])])])}]}}],[9]);
//# sourceMappingURL=app.42c106f06585ccf4beda.js.map