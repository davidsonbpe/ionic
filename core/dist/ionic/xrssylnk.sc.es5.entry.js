var __awaiter=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(r,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(a,s)}l((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var o,n,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Ionic.loadBundle("xrssylnk",["exports","./chunk-c0d86ae2.js","./chunk-efee13a5.js","./chunk-6aa900a7.js","./chunk-7348297b.js","./chunk-22728a76.js"],function(e,t,o,n,r,i){var a=window.Ionic.h;function s(e,t,o){var n="top",r="left",i=t.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,p=a.height,c=t.ownerDocument.defaultView.innerWidth,d=t.ownerDocument.defaultView.innerHeight,u=o&&o.target&&o.target.getBoundingClientRect(),m=null!=u&&"top"in u?u.top:d/2-p/2,f=null!=u&&"left"in u?u.left:c/2,h=u&&u.width||0,v=u&&u.height||0,y=t.querySelector(".popover-arrow"),b=y.getBoundingClientRect(),g=b.width,w=b.height;null==u&&(y.style.display="none");var P={top:m+v,left:f+h/2-g/2},D={top:m+v+(w-1),left:f+h/2-s/2},k=!1,E=!1;D.left<l+25?(k=!0,D.left=l):s+l+D.left+25>c&&(E=!0,D.left=c-s-l,r="right"),m+v+p>d&&m-p>0?(P.top=m-(w+1),D.top=m-p-(w-1),t.className=t.className+" popover-bottom",n="bottom"):m+v+p>d&&(i.style.bottom=l+"%"),y.style.top=P.top+"px",y.style.left=P.left+"px",i.style.top=D.top+"px",i.style.left=D.left+"px",k&&(i.style.left="calc("+D.left+"px + var(--ion-safe-area-left, 0px))"),E&&(i.style.left="calc("+D.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=n+" "+r;var x=new e,_=new e;_.addElement(t.querySelector("ion-backdrop")),_.fromTo("opacity",.01,.08);var S=new e;return S.addElement(t.querySelector(".popover-wrapper")),S.fromTo("opacity",.01,1),Promise.resolve(x.addElement(t).easing("ease").duration(100).add(_).add(S))}var l=5;function p(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}function c(e,t,o){var n=t.ownerDocument,r="rtl"===n.dir,i="top",a=r?"right":"left",s=t.querySelector(".popover-content"),l=s.getBoundingClientRect(),p=l.width,c=l.height,u=n.defaultView.innerWidth,m=n.defaultView.innerHeight,f=o&&o.target&&o.target.getBoundingClientRect(),h=null!=f&&"bottom"in f?f.bottom:m/2-c/2,v=f&&f.height||0,y={top:h,left:null!=f&&"left"in f?r?f.left-p+f.width:f.left:u/2-p/2};y.left<d?(y.left=d,a="left"):p+d+y.left>u&&(y.left=u-p-d,a="right"),h+v+c>m&&h-c>0?(y.top=h-c-v,t.className=t.className+" popover-bottom",i="bottom"):h+v+c>m&&(s.style.bottom=d+"px"),s.style.top=y.top+"px",s.style.left=y.left+"px",s.style.transformOrigin=i+" "+a;var b=new e,g=new e;g.addElement(t.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.32);var w=new e;w.addElement(t.querySelector(".popover-wrapper")),w.fromTo("opacity",.01,1);var P=new e;P.addElement(t.querySelector(".popover-content")),P.fromTo("scale",.001,1);var D=new e;return D.addElement(t.querySelector(".popover-viewport")),D.fromTo("opacity",.01,1),Promise.resolve(b.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(w).add(P).add(D))}var d=12;function u(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.32,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}var m=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,t.BACKDROP)},e.prototype.lifecycle=function(e){var t=this.usersElement,o=f[e.type];if(t&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},e.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var e,o,r;return __generator(this,function(a){switch(a.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return o=Object.assign({},this.componentProps,{popover:this.el}),r=this,[4,n.attachComponent(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],o)];case 1:return r.usersElement=a.sent(),[4,i.deepReady(this.usersElement)];case 2:return a.sent(),[2,t.present(this,"popoverEnter",s,c,this.event)]}})})},e.prototype.dismiss=function(e,o){return __awaiter(this,void 0,void 0,function(){var r;return __generator(this,function(i){switch(i.label){case 0:return[4,t.dismiss(this,e,o,"popoverLeave",p,u,this.event)];case 1:return(r=i.sent())?[4,n.detachComponent(this.delegate,this.usersElement)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,r]}})})},e.prototype.onDidDismiss=function(){return t.eventMethod(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return t.eventMethod(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){var e;return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},o.getClassMap(this.cssClass),(e={},e[""+this.mode]=!0,e["popover-translucent"]=this.translucent,e))}},e.prototype.render=function(){return[a("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),a("div",{class:"popover-wrapper"},a("div",{class:"popover-arrow"}),a("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h   .popover-content.sc-ion-popover-md, [dir=rtl]   .sc-ion-popover-md-h   .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),f={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},h=function(){function e(){}return e.prototype.create=function(e){return t.createOverlay(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,o,n){return t.dismissOverlay(this.doc,e,o,"ion-popover",n)},e.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,t.getOverlay(this.doc,"ion-popover")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();e.IonPopover=m,e.IonPopoverController=h,Object.defineProperty(e,"__esModule",{value:!0})});