(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-admin_index-admin-info"],{"291b":function(t,i,n){"use strict";var e=n("a7d8"),a=n.n(e);a.a},6694:function(t,i,n){"use strict";n.r(i);var e=n("a006"),a=n("cc4c");for(var s in a)"default"!==s&&function(t){n.d(i,t,(function(){return a[t]}))}(s);n("291b");var o,c=n("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"492b51cf",null,!1,e["a"],o);i["default"]=r.exports},"76c6":function(t,i,n){"use strict";n("d3b7"),n("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={computed:{scrollerHeight:function(){return(uni.getSystemInfoSync().windowHeight-50).toString()+"px"}},data:function(){return{admin_info:{},hasLogin:!1,department_list:[],department:"",adminMenus:[{name:"基本信息",icon:"/static/admin-info/about.png",url:"/pages/admin/admin_menu/view"},{name:"修改登录信息",icon:"/static/admin-info/change.png",url:"/pages/admin/admin_menu/editlogin"},{name:"增加管理员",icon:"/static/admin-info/addPeople.png",url:"/pages/admin/admin_menu/add-admin"}],departmentMenus:[{name:"科室列表",icon:"/static/admin-info/department.png",url:"/pages/department/department-view"},{name:"静脉列表",icon:"/static/admin-info/vein.png",url:"/pages/vein/vein-view"},{name:"工具列表",icon:"/static/admin-info/tool.png",url:"/pages/tool/tool-view"},{name:"药品列表",icon:"/static/admin-info/drug.png",url:"/pages/drug/drug-view"}]}},onReady:function(){},onLoad:function(){var t=this;this.$request.checkLogin(),this.initData(),uni.$on("editAdmin",(function(i){t.initData()})),uni.$on("editAdminLogin",(function(i){t.initData()}))},onShow:function(){this.initData()},onUnload:function(){uni.$off("editAdmin"),uni.$off("editAdminLogin")},methods:{initData:function(){this.$db.get("token")?(this.hasLogin=!0,this.admin_info=this.$db.get("current_user")):this.hasLogin=!1,this.department_list=this.$db.get("department_list"),this.department_list.unshift({id:0,name:"全部"}),this.department=this.department_list[this.admin_info.department].name},logout:function(){var t=this;uni.showModal({content:"是否要退出登录",success:function(i){i.confirm&&(t.$db.set("login_status",!1),t.$db.clear(),uni.showToast({title:"退出登录成功",icon:"none"}),uni.reLaunch({url:"/pages/index/index"}))}})},adminNavigateHandle:function(t){uni.navigateTo({url:t})}}};i.default=e},"9fa8":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.body[data-v-492b51cf]{width:100%;overflow:scroll;color:#fff;position:relative;background-color:#fff;margin-left:auto;margin-right:auto}.button[data-v-492b51cf]{margin-top:20px;margin-bottom:20px;margin-right:20%;margin-left:20%}.member-top[data-v-492b51cf]{position:relative;width:100%;height:%?300?%;background-color:#fa0}.member-top-c[data-v-492b51cf]{position:absolute;text-align:left;top:10%;left:5%}.user-name[data-v-492b51cf]{font-size:%?55?%;color:#000;margin-bottom:%?16?%;font-weight:1000}.user-username[data-v-492b51cf]{font-size:%?40?%;color:#000;margin-bottom:%?16?%;font-weight:700}.user-department[data-v-492b51cf]{font-size:%?40?%;color:#000;margin-bottom:%?16?%;font-weight:700}.divider[data-v-492b51cf]{background-color:#f6f6f6;height:10px}',""]),t.exports=i},a006:function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){return e}));var e={uButton:n("374a").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"body",style:{height:t.scrollerHeight}},[n("v-uni-view",{staticClass:"tab-bar-line"}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"member-top"},[n("v-uni-view",{staticClass:"member-top-c"},[n("v-uni-view",{staticClass:"user-name"},[t._v(t._s(t.admin_info.name))]),n("v-uni-view",{staticClass:"user-username"},[t._v(t._s(t.admin_info.username))]),n("v-uni-view",{staticClass:"user-department"},[t._v("科室："+t._s(t.department))])],1)],1),n("v-uni-view",{staticClass:"cell-group"},[n("v-uni-view",{staticClass:"cell-item right-img"},[n("v-uni-view",{staticClass:"cell-item-hd"},[n("v-uni-view",{staticClass:"cell-hd-title"},[t._v("管理员操作")])],1)],1)],1),n("v-uni-view",{staticClass:"member-grid"},t._l(t.adminMenus,(function(i,e){return n("v-uni-view",{key:e,staticClass:"member-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.adminNavigateHandle(i.url)}}},[n("v-uni-image",{staticClass:"member-item-icon",attrs:{src:i.icon}}),n("v-uni-text",{staticClass:"member-item-text"},[t._v(t._s(i.name))])],1)})),1),n("v-uni-view",{staticClass:"divider"}),n("v-uni-view",{staticClass:"cell-group"},[n("v-uni-view",{staticClass:"cell-item right-img"},[n("v-uni-view",{staticClass:"cell-item-hd"},[n("v-uni-view",{staticClass:"cell-hd-title"},[t._v("医院操作")])],1)],1)],1),n("v-uni-view",{staticClass:"member-grid"},t._l(t.departmentMenus,(function(i,e){return n("v-uni-view",{key:e,staticClass:"member-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.adminNavigateHandle(i.url)}}},[n("v-uni-image",{staticClass:"member-item-icon",attrs:{src:i.icon}}),n("v-uni-text",{staticClass:"member-item-text"},[t._v(t._s(i.name))])],1)})),1),n("v-uni-view",{staticClass:"divider"}),n("v-uni-view",{staticClass:"cell-group"},[n("v-uni-view",{staticClass:"cell-item right-img"},[n("v-uni-view",{staticClass:"cell-item-hd"},[n("v-uni-view",{staticClass:"cell-hd-title"},[t._v("操作")])],1)],1)],1),n("v-uni-view",{staticClass:"button"},[n("u-button",{attrs:{type:"error",shape:"circle",text:"登出"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.logout.apply(void 0,arguments)}}})],1)],1),n("tabBar-admin",{attrs:{currentPage:2}})],1)},s=[]},a7d8:function(t,i,n){var e=n("9fa8");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("722fab62",e,!0,{sourceMap:!1,shadowMode:!1})},cc4c:function(t,i,n){"use strict";n.r(i);var e=n("76c6"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,(function(){return e[t]}))}(s);i["default"]=a.a}}]);