(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1409:function(e,n,t){"use strict";t.r(n);t(135);var a=t(86),l=t.n(a),r=(t(316),t(317)),o=t.n(r),c=(t(137),t(87)),i=t.n(c);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=t(12),u=t(13),p=t(16),h=t(15),m=t(17),f=t(1),w=t.n(f);t(378);t.d(n,"default",function(){return C});var C=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(l)))).state={showModal1:!1,showModal2:!1,showModal3:!1,showModal4:!1},t.handleCancel=function(e){t.setState(s({},e,!1))},t.handleConfirm=function(e){i.a[e]({title:"\u786e\u8ba4\uff1f",content:"Are you sure?",maskClosable:!0,onOk:function(){console.log("Ok")},onCancel:function(){console.log("cancel")}})},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return w.a.createElement("div",null,w.a.createElement(o.a,{title:"\u57fa\u7840\u6a21\u6001\u6846",className:"card-wrap"},w.a.createElement(l.a,{type:"primary",onClick:function(){return e.handleOpen("showModal1")}},"Open"),w.a.createElement(l.a,{type:"primary",onClick:function(){return e.handleOpen("showModal2")}},"\u81ea\u5b9a\u4e49\u9875\u811a"),w.a.createElement(l.a,{type:"primary",onClick:function(){return e.handleOpen("showModal3")}},"\u9876\u90e820px\u5f39\u7a97"),w.a.createElement(l.a,{type:"primary",onClick:function(){return e.handleOpen("showModal4")}},"\u6c34\u5e73\u5782\u76f4\u5c45\u4e2d")),w.a.createElement(o.a,{title:"\u4fe1\u606f\u786e\u8ba4\u6846",className:"card-wrap card-top"},w.a.createElement(l.a,{type:"primary",onClick:function(){return e.handleConfirm("confirm")}},"Confirm"),w.a.createElement(l.a,{type:"primary",onClick:function(){return e.handleConfirm("info")}},"Info"),w.a.createElement(l.a,{type:"primary",onClick:function(){return e.handleConfirm("success")}},"Success"),w.a.createElement(l.a,{type:"primary",onClick:function(){return e.handleConfirm("warning")}},"Warning")),w.a.createElement(i.a,{title:"React",visible:this.state.showModal1,onCancel:function(){return e.handleCancel("showModal1")}},w.a.createElement("p",null,"\u6b22\u8fce\u6765\u5230react\u5355\u8f66\u9879\u76ee\u540e\u53f0\u7cfb\u7edf")),w.a.createElement(i.a,{title:"React",visible:this.state.showModal2,okText:"\u597d\u7684",cancelText:"\u7b97\u4e86",onCancel:function(){return e.handleCancel("showModal2")}},w.a.createElement("p",null,"\u6b22\u8fce\u6765\u5230react\u5355\u8f66\u9879\u76ee\u540e\u53f0\u7cfb\u7edf")),w.a.createElement(i.a,{title:"React",visible:this.state.showModal3,style:{top:"20px"},onCancel:function(){return e.handleCancel("showModal3")}},w.a.createElement("p",null,"\u6b22\u8fce\u6765\u5230react\u5355\u8f66\u9879\u76ee\u540e\u53f0\u7cfb\u7edf")),w.a.createElement(i.a,{title:"React",visible:this.state.showModal4,okText:"\u597d\u7684",cancelText:"\u7b97\u4e86",wrapClassName:"vertical-center-modal",onCancel:function(){return e.handleCancel("showModal4")}},w.a.createElement("p",null,"\u6b22\u8fce\u6765\u5230react\u5355\u8f66\u9879\u76ee\u540e\u53f0\u7cfb\u7edf")))}},{key:"handleOpen",value:function(e){this.setState(s({},e,!0))}}]),n}(f.Component)},378:function(e,n,t){var a=t(379);"string"===typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};t(23)(a,l);a.locals&&(e.exports=a.locals)},379:function(e,n,t){(e.exports=t(22)(!1)).push([e.i,".card-wrap button {\n  margin-right: 10px;\n}\n.card-top {\n  margin-top: 10px;\n}\n/* modals */\n/* use css to set position of modal */\n.vertical-center-modal {\n  text-align: center;\n  white-space: nowrap;\n}\n.vertical-center-modal:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  width: 0;\n}\n.vertical-center-modal .ant-modal {\n  display: inline-block;\n  vertical-align: middle;\n  top: 0;\n  text-align: left;\n}\n/* antd carousel */\n.ant-carousel .slick-slide {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: #364d79;\n  overflow: hidden;\n}\n.ant-carousel .slick-slide h3 {\n  color: #fff;\n}\n.slider-wrap .ant-carousel .slick-slide {\n  height: 240px;\n}\n.avatar-uploader > .ant-upload {\n  width: 128px;\n  height: 128px;\n}\n",""])}}]);