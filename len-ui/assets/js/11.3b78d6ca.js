(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{303:function(t,e,n){},311:function(t,e,n){"use strict";var i=n(303);n.n(i).a},314:function(t,e,n){"use strict";var i={name:"LenButton",props:{type:{type:String,default:"default"},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},icon:{type:String,default:""},disabled:{type:Boolean,default:!1}},methods:{handleClick:function(t){this.$emit("click",t)}}},l=(n(311),n(41)),a=Object(l.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"len-button",class:["len-button-"+t.type,{plain:t.plain},{round:t.round},{circle:t.circle},{disabled:t.disabled}],attrs:{disabled:t.disabled},on:{click:t.handleClick}},[t.icon?n("i",{class:t.icon}):t._e(),t._v(" "),t.$slots.default?n("span",[t._t("default")],2):t._e()])}),[],!1,null,"147ae6e6",null);e.a=a.exports},337:function(t,e,n){},338:function(t,e,n){},390:function(t,e,n){"use strict";var i=n(337);n.n(i).a},391:function(t,e,n){"use strict";var i=n(338);n.n(i).a},407:function(t,e,n){"use strict";n.r(e);var i={name:"LenDialog",props:{title:{type:String,default:"提示"},width:{type:String,default:"50%"},top:{type:String,default:"15vh"},visible:{type:Boolean,default:!1}},methods:{handleClose:function(){this.$emit("update:visible",!1)},afterEnter:function(){this.$emit("opened")},afterLeave:function(){this.$emit("closed")}}},l=(n(390),n(41)),a={name:"dialog-demo",components:{LenDialog:Object(l.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"dialog-fade"},on:{"after-enter":t.afterEnter,"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"len-dialog__wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.handleClose(e)}}},[n("div",{staticClass:"len-dialog",style:{width:t.width,marginTop:t.top}},[n("div",{staticClass:"len-dialog__header"},[t._t("title",[n("span",{staticClass:"len-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("button",{staticClass:"len-dialog__headerbtn",on:{click:t.handleClose}},[n("i",{staticClass:"el-icon-close"})])],2),t._v(" "),n("div",{staticClass:"len-dialog__body"},[t._t("default")],2),t._v(" "),t.$slots.footer?n("div",{staticClass:"len-dialog__footer"},[t._t("footer")],2):t._e()])])])}),[],!1,null,null,null).exports,LenButton:n(314).a},data:function(){return{visible:!1}},methods:{close:function(t){this.visible=t}}},o=(n(391),Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("len-dialog",{attrs:{width:"60%",top:"200px",visible:t.visible},on:{click:t.close},scopedSlots:t._u([{key:"footer",fn:function(){return[n("len-button",{attrs:{type:"primary"},on:{click:function(e){t.visible=!1}}},[t._v("确定")]),t._v(" "),n("len-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")])]},proxy:!0}])},[n("ul",[n("li",[t._v("你好，我是Len-UI")]),t._v(" "),n("li",[t._v("我还很年轻，期待你的帮助")]),t._v(" "),n("li",[t._v("感兴趣的话加入到Len-UI的创造中吧")])])]),t._v(" "),n("len-button",{attrs:{type:"primary"},on:{click:function(e){t.visible=!0}}},[t._v("Dialog")])],1)}),[],!1,null,"85c5b016",null));e.default=o.exports}}]);