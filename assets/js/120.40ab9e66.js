(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{517:function(e,t,n){},631:function(e,t,n){"use strict";var c=n(517);n.n(c).a},709:function(e,t,n){"use strict";n.r(t);var c={data:function(){return{activeConfirm:!1}},methods:{acceptAlert:function(e){this.$vs.notify({color:"danger",title:"Deleted image",text:"The selected image was successfully deleted"})}}},i=(n(631),n(0)),a=Object(i.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"centerx"},[n("vs-button",{attrs:{"vs-color":"danger","vs-type":"gradient"},on:{click:function(t){e.activeConfirm=!0}}},[e._v("Run Confirm")]),n("vs-dialog",{attrs:{"vs-color":"danger","vs-title":"Delete Image","vs-type":"confirm","vs-active":e.activeConfirm},on:{"vs-accept":e.acceptAlert,"update:vsActive":function(t){e.activeConfirm=t}}},[e._v("\n    You are sure to delete this image?\n  ")])],1)},[],!1,null,null,null);t.default=a.exports}}]);