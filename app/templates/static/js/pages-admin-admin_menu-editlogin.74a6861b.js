(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-admin_menu-editlogin"],{"0936":function(e,t,r){var a=r("c390");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=r("4f06").default;s("3341dcdc",a,!0,{sourceMap:!1,shadowMode:!1})},"4d63f":function(e,t,r){"use strict";var a=r("0936"),s=r.n(a);s.a},8702:function(e,t,r){"use strict";r.r(t);var a=r("c01f"),s=r("c8f3");for(var n in s)"default"!==n&&function(e){r.d(t,e,(function(){return s[e]}))}(n);r("4d63f");var o,i=r("f0c5"),u=Object(i["a"])(s["default"],a["b"],a["c"],!1,null,"380fa1f0",null,!1,a["a"],o);t["default"]=u.exports},c01f:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return a}));var a={"u-Form":r("f679").default,uFormItem:r("0eab").default,"u-Input":r("33d7").default,uButton:r("374a").default},s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{staticClass:"form"},[r("v-uni-view",{staticClass:"form-content"},[r("u--form",{ref:"form1",attrs:{labelPosition:"left",model:e.form1}},[r("v-uni-view",{staticClass:"second-title"},[e._v("登录信息")]),r("u-form-item",{ref:"item4",attrs:{label:"用户名","label-width":"120",prop:"username"}},[r("u--input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form1.username,callback:function(t){e.$set(e.form1,"username",t)},expression:"form1.username"}})],1),r("u-form-item",{ref:"item5",attrs:{label:"旧密码","label-width":"120",prop:"oldpassword"}},[r("u--input",{attrs:{placeholder:"请输入旧密码",type:"password"},model:{value:e.form1.oldpassword,callback:function(t){e.$set(e.form1,"oldpassword",t)},expression:"form1.oldpassword"}})],1),r("u-form-item",{ref:"item5",attrs:{label:"新密码","label-width":"120",prop:"password"}},[r("u--input",{attrs:{placeholder:"请输入新密码",type:"password"},model:{value:e.form1.password,callback:function(t){e.$set(e.form1,"password",t)},expression:"form1.password"}})],1),r("u-form-item",{ref:"item6",attrs:{label:"新密码验证","label-width":"120",prop:"password_verify"}},[r("u--input",{attrs:{placeholder:"请重新输入新密码",type:"password"},model:{value:e.form1.password_verify,callback:function(t){e.$set(e.form1,"password_verify",t)},expression:"form1.password_verify"}})],1)],1)],1)],1),r("v-uni-view",{staticClass:"bottom-button"},[r("u-button",{attrs:{type:"primary",shape:"circle",text:"提交",customStyle:"margin-top: 30px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}}),r("u-button",{attrs:{type:"error",shape:"circle",text:"重置",customStyle:"margin-top: 20px; margin-bottom: 30px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.reset.apply(void 0,arguments)}}})],1)],1)},n=[]},c390:function(e,t,r){var a=r("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-380fa1f0]{min-height:100%}.form-content[data-v-380fa1f0]{margin-top:20px;margin-left:5%;margin-right:5%}.bottom-button[data-v-380fa1f0]{width:80%;margin-top:20px;margin-left:10%;margin-right:10%;padding-bottom:10px}[data-v-380fa1f0] .u-form-item{padding:0 0 %?5?%}[data-v-380fa1f0] .u-form-item .u-form-item--left_content_label{font-size:%?32?%;line-height:%?94?%}.u-form-item_body[data-v-380fa1f0]{align-items:flex-start}.u-input[data-v-380fa1f0]{box-sizing:border-box;padding:%?26?% %?30?%;border-radius:%?16?%;font-size:%?30?%;color:#333}.second-title[data-v-380fa1f0]{margin-top:20px;font-size:25px;font-weight:700}',""]),e.exports=t},c8f3:function(e,t,r){"use strict";r.r(t);var a=r("fb18"),s=r.n(a);for(var n in a)"default"!==n&&function(e){r.d(t,e,(function(){return a[e]}))}(n);t["default"]=s.a},fb18:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{oldusername:"",form1:{username:"",password:"",password_verify:"",oldpassword:""},post1:{username:"",password:""},rules:{username:[{type:"string",required:!0,message:"请填写用户名",trigger:["blur","change"]},{validator:this.$common.validateUsername,trigger:["blur","change"]}],password:[{type:"string",required:!0,message:"请填写密码",trigger:["blur","change"]},{validator:this.$common.validatePassword,trigger:["blur","change"]}],password_verify:[{type:"string",required:!0,message:"请填写密码",trigger:["blur","change"]},{validator:this.validateSamePassword,trigger:["blur","change"],required:!0}],oldpassword:[{type:"string",required:!0,message:"请填写密码",trigger:["blur","change"]},{validator:this.validateOldPassword,validateTrigger:"submit",required:!0}]}}},onLoad:function(e){this.$request.checkLogin(),this.adminId=this.$db.get("current_user").id,this.oldusername=this.$db.get("current_user").username,this.form1.username=this.oldusername,this.post1.username=this.oldusername},onReady:function(){this.$refs.form1.setRules(this.rules)},methods:{navigateBack:function(){uni.navigateBack()},change:function(e){},submit:function(){var e=this;this.$refs.form1.validate().then((function(t){e.post1.username=e.form1.username,e.post1.password=e.form1.password,uni.showLoading({title:"加载中"});var r="/api/admin/update/"+e.adminId;e.$request.patch(r,e.post1).then((function(t){uni.hideLoading(),200!==t.statusCode?e.$.toast("提交失败("+t.statusCode+")"):uni.showToast({title:"修改成功！",duration:1e3,success:function(){setTimeout((function(){var t=e.$db.get("current_user");t.username=e.psot1.username,e.$db.set("current_user",t),uni.$emit("refurbish",{}),uni.$emit("editAdminLogin",{}),uni.navigateBack()}),1e3)}})}))})).catch((function(e){uni.$u.toast("信息有误"),console.log(e)}))},reset:function(){var e=this,t=["username","password","password_verify","oldpassword"];this.$refs.form1.resetFields(),this.$refs.form1.clearValidate(),this.$refs.form1.clearValidate(t),setTimeout((function(){e.$refs.form1.clearValidate(t)}),10)},hideKeyboard:function(){uni.hideKeyboard()},validateOldPassword:function(e,t,r){""===t?r(new Error("请再次输入密码")):this.$request.post("/api/admin/login",{username:this.oldusername,password:t}).then((function(e){console.log(e),200==e.statusCode?r():r(new Error("与旧密码不一致!"))}))},validateSamePassword:function(e,t,r){""===t?r(new Error("请再次输入密码")):t!==this.form1.password?r(new Error("两次输入密码不一致!")):r()}}};t.default=a}}]);