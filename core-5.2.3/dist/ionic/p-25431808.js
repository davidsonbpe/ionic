import{w as i,B as a}from"./p-94e8fa7d.js";const n="ionViewWillEnter",e="ionViewDidEnter",o="ionViewWillLeave",s="ionViewDidLeave",t="ionViewWillUnload",r=a=>new Promise((n,e)=>{i(()=>{c(a),w(a).then(i=>{i.animation&&i.animation.destroy(),l(a),n(i)},i=>{l(a),e(i)})})}),c=i=>{const a=i.enteringEl,n=i.leavingEl;E(a,n,i.direction),i.showGoBack?a.classList.add("can-go-back"):a.classList.remove("can-go-back"),h(a,!1),n&&h(n,!1)},w=async i=>{const n=await d(i);return n&&a.isBrowser?p(n,i):b(i)},l=i=>{const a=i.leavingEl;i.enteringEl.classList.remove("ion-page-invisible"),void 0!==a&&a.classList.remove("ion-page-invisible")},d=async i=>{if(i.leavingEl&&i.animated&&0!==i.duration)return i.animationBuilder?i.animationBuilder:"ios"===i.mode?(await __sc_import_ionic("./p-15b71c32.js")).iosTransitionAnimation:(await __sc_import_ionic("./p-2758b3b0.js")).mdTransitionAnimation},p=async(i,a)=>{await m(a,!0);const n=i(a.baseEl,a);g(a.enteringEl,a.leavingEl);const e=await v(n,a);return a.progressCallback&&a.progressCallback(void 0),e&&V(a.enteringEl,a.leavingEl),{hasCompleted:e,animation:n}},b=async i=>{const a=i.enteringEl,n=i.leavingEl;return await m(i,!1),g(a,n),V(a,n),{hasCompleted:!0}},m=async(i,a)=>{const n=(void 0!==i.deepWait?i.deepWait:a)?[f(i.enteringEl),f(i.leavingEl)]:[_(i.enteringEl),_(i.leavingEl)];await Promise.all(n),await u(i.viewIsReady,i.enteringEl)},u=async(i,a)=>{i&&await i(a)},v=(i,a)=>{const n=a.progressCallback,e=new Promise(a=>{i.onFinish(i=>a(1===i))});return n?(i.progressStart(!0),n(i)):i.play(),e},g=(i,a)=>{y(a,"ionViewWillLeave"),y(i,"ionViewWillEnter")},V=(i,a)=>{y(i,"ionViewDidEnter"),y(a,"ionViewDidLeave")},y=(i,a)=>{if(i){const n=new CustomEvent(a,{bubbles:!1,cancelable:!1});i.dispatchEvent(n)}},_=i=>i&&i.componentOnReady?i.componentOnReady():Promise.resolve(),f=async i=>{const a=i;if(a){if(null!=a.componentOnReady&&null!=await a.componentOnReady())return;await Promise.all(Array.from(a.children).map(f))}},h=(i,a)=>{a?(i.setAttribute("aria-hidden","true"),i.classList.add("ion-page-hidden")):(i.hidden=!1,i.removeAttribute("aria-hidden"),i.classList.remove("ion-page-hidden"))},E=(i,a,n)=>{void 0!==i&&(i.style.zIndex="back"===n?"99":"101"),void 0!==a&&(a.style.zIndex="100")},L=i=>{if(i.classList.contains("ion-page"))return i;return i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||i};export{n as L,e as a,o as b,s as c,t as d,f as e,L as g,y as l,h as s,r as t}