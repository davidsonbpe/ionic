var __awaiter=this&&this.__awaiter||function(t,r,e,n){function o(t){return t instanceof e?t:new e((function(r){r(t)}))}return new(e||(e=Promise))((function(e,i){function a(t){try{d(n.next(t))}catch(r){i(r)}}function s(t){try{d(n["throw"](t))}catch(r){i(r)}}function d(t){t.done?e(t.value):o(t.value).then(a,s)}d((n=n.apply(t,r||[])).next())}))};var __generator=this&&this.__generator||function(t,r){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(r){return d([t,r])}}function d(a){if(n)throw new TypeError("Generator is already executing.");while(e)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:e.label++;return{value:a[1],done:false};case 5:e.label++;o=a[1];a=[0];continue;case 7:a=e.ops.pop();e.trys.pop();continue;default:if(!(i=e.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){e.label=a[1];break}if(a[0]===6&&e.label<i[1]){e.label=i[1];i=a;break}if(i&&e.label<i[2]){e.label=i[2];e.ops.push(a);break}if(i[2])e.ops.pop();e.trys.pop();continue}a=r.call(t,e)}catch(s){a=[6,s];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-e27bfba0.system.js","./p-381179d2.system.js","./p-90f9da43.system.js","./p-75439a7f.system.js","./p-e940705b.system.js","./p-b6779b96.system.js","./p-cff074d4.system.js","./p-38a4fcc1.system.js"],(function(t){"use strict";var r,e,n,o,i,a,s,d,l,p,u,c,h,b,g,f;return{setters:[function(t){r=t.r;e=t.c;n=t.h;o=t.H;i=t.e},function(t){a=t.b},function(){},function(t){s=t.c},function(t){d=t.s},function(){},function(t){l=t.i;p=t.d;u=t.e;c=t.f;h=t.g;b=t.s},function(t){g=t.g;f=t.c}],execute:function(){var m=function(t,r){var e=s();var n=s();var o=t.host||t;var i=t.querySelector(".toast-wrapper");var a="calc(-10px - var(--ion-safe-area-bottom, 0px))";var d="calc(10px + var(--ion-safe-area-top, 0px))";n.addElement(i);switch(r){case"top":n.fromTo("transform","translateY(-100%)","translateY("+d+")");break;case"middle":var l=Math.floor(o.clientHeight/2-i.clientHeight/2);i.style.top=l+"px";n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translateY(100%)","translateY("+a+")");break}return e.addElement(o).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)};var x=function(t,r){var e=s();var n=s();var o=t.host||t;var i=t.querySelector(".toast-wrapper");var a="calc(-10px - var(--ion-safe-area-bottom, 0px))";var d="calc(10px + var(--ion-safe-area-top, 0px))";n.addElement(i);switch(r){case"top":n.fromTo("transform","translateY("+d+")","translateY(-100%)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translateY("+a+")","translateY(100%)");break}return e.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)};var v=function(t,r){var e=s();var n=s();var o=t.host||t;var i=t.querySelector(".toast-wrapper");var a="calc(8px + var(--ion-safe-area-bottom, 0px))";var d="calc(8px + var(--ion-safe-area-top, 0px))";n.addElement(i);switch(r){case"top":i.style.top=d;n.fromTo("opacity",.01,1);break;case"middle":var l=Math.floor(o.clientHeight/2-i.clientHeight/2);i.style.top=l+"px";n.fromTo("opacity",.01,1);break;default:i.style.bottom=a;n.fromTo("opacity",.01,1);break}return e.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n)};var w=function(t){var r=s();var e=s();var n=t.host||t;var o=t.querySelector(".toast-wrapper");e.addElement(o).fromTo("opacity",.99,0);return r.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(e)};var y=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";var k=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";var T=function(){function t(t){var n=this;r(this,t);this.presented=false;this.duration=0;this.keyboardClose=false;this.position="bottom";this.translucent=false;this.animated=true;this.dispatchCancelHandler=function(t){var r=t.detail.role;if(l(r)){var e=n.getButtons().find((function(t){return t.role==="cancel"}));n.callButtonHandler(e)}};p(this.el);this.didPresent=e(this,"ionToastDidPresent",7);this.willPresent=e(this,"ionToastWillPresent",7);this.willDismiss=e(this,"ionToastWillDismiss",7);this.didDismiss=e(this,"ionToastDidDismiss",7)}t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(r){switch(r.label){case 0:return[4,u(this,"toastEnter",m,v,this.position)];case 1:r.sent();if(this.duration>0){this.durationTimeout=setTimeout((function(){return t.dismiss(undefined,"timeout")}),this.duration)}return[2]}}))}))};t.prototype.dismiss=function(t,r){if(this.durationTimeout){clearTimeout(this.durationTimeout)}return c(this,t,r,"toastLeave",x,w,this.position)};t.prototype.onDidDismiss=function(){return h(this.el,"ionToastDidDismiss")};t.prototype.onWillDismiss=function(){return h(this.el,"ionToastWillDismiss")};t.prototype.getButtons=function(){var t=this.buttons?this.buttons.map((function(t){return typeof t==="string"?{text:t}:t})):[];return t};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,(function(){var r,e;return __generator(this,(function(n){switch(n.label){case 0:r=t.role;if(l(r)){return[2,this.dismiss(undefined,r)]}return[4,this.callButtonHandler(t)];case 1:e=n.sent();if(e){return[2,this.dismiss(undefined,r)]}return[2,Promise.resolve()]}}))}))};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var r,e;return __generator(this,(function(n){switch(n.label){case 0:if(!(t&&t.handler))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,b(t.handler)];case 2:r=n.sent();if(r===false){return[2,false]}return[3,4];case 3:e=n.sent();console.error(e);return[3,4];case 4:return[2,true]}}))}))};t.prototype.renderButtons=function(t,r){var e;var o=this;if(t.length===0){return}var i=a(this);var s=(e={"toast-button-group":true},e["toast-button-group-"+r]=true,e);return n("div",{class:s},t.map((function(t){return n("button",{type:"button",class:_(t),tabIndex:0,onClick:function(){return o.buttonClick(t)},part:"button"},n("div",{class:"toast-button-inner"},t.icon&&n("ion-icon",{icon:t.icon,slot:t.text===undefined?"icon-only":undefined,class:"toast-icon"}),t.text),i==="md"&&n("ion-ripple-effect",{type:t.icon!==undefined&&t.text===undefined?"unbounded":"bounded"}))})))};t.prototype.render=function(){var t,r;var e=this.getButtons();var i=e.filter((function(t){return t.side==="start"}));var s=e.filter((function(t){return t.side!=="start"}));var l=a(this);var p=(t={"toast-wrapper":true},t["toast-"+this.position]=true,t);return n(o,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign((r={},r[l]=true,r),f(this.color)),g(this.cssClass)),{"toast-translucent":this.translucent}),tabindex:"-1",onIonToastWillDismiss:this.dispatchCancelHandler},n("div",{class:p},n("div",{class:"toast-container",part:"container"},this.renderButtons(i,"start"),n("div",{class:"toast-content"},this.header!==undefined&&n("div",{class:"toast-header",part:"header"},this.header),this.message!==undefined&&n("div",{class:"toast-message",part:"message",innerHTML:d(this.message)})),this.renderButtons(s,"end"))))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}();t("ion_toast",T);var _=function(t){var r;return Object.assign((r={"toast-button":true,"toast-button-icon-only":t.icon!==undefined&&t.text===undefined},r["toast-button-"+t.role]=t.role!==undefined,r["ion-focusable"]=true,r["ion-activatable"]=true,r),g(t.cssClass))};T.style={ios:y}}}}));