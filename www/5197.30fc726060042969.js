"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5197],{5197:(W,w,a)=>{a.r(w),a.d(w,{ion_refresher:()=>T,ion_refresher_content:()=>H});var d=a(467),n=a(4635),_=a(3351),y=a(909),h=a(4920),k=a(1086),c=a(9690),m=a(9986),x=a(464),E=a(3992),C=a(7895);a(8438),a(8476);const S=e=>{const t=e.querySelector("ion-spinner"),r=t.shadowRoot.querySelector("circle"),s=e.querySelector(".spinner-arrow-container"),l=e.querySelector(".arrow-container"),f=l?l.querySelector("ion-icon"):null,o=(0,m.c)().duration(1e3).easing("ease-out"),i=(0,m.c)().addElement(s).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),p=(0,m.c)().addElement(r).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),g=(0,m.c)().addElement(t).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(l&&f){const b=(0,m.c)().addElement(l).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),u=(0,m.c)().addElement(f).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([b,u])}return o.addAnimation([i,p,g])},v=(e,t,r=200)=>{if(!e)return Promise.resolve();const s=(0,h.t)(e,r);return(0,n.w)(()=>{e.style.setProperty("transition",`${r}ms all ease-out`),void 0===t?e.style.removeProperty("transform"):e.style.setProperty("transform",`translate3d(0px, ${t}, 0px)`)}),s},R=()=>navigator.maxTouchPoints>0&&CSS.supports("background: -webkit-named-image(apple-pay-logo-black)"),P=function(){var e=(0,d.A)(function*(t,r){const s=t.querySelector("ion-refresher-content");if(!s)return Promise.resolve(!1);yield new Promise(o=>(0,h.c)(s,o));const l=t.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),f=t.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==l&&null!==f&&("ios"===r&&R()||"md"===r)});return function(r,s){return e.apply(this,arguments)}}(),T=class{constructor(e){(0,n.r)(this,e),this.ionRefresh=(0,n.d)(this,"ionRefresh",7),this.ionPull=(0,n.d)(this,"ionPull",7),this.ionStart=(0,n.d)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}checkNativeRefresher(){var e=this;return(0,d.A)(function*(){const t=yield P(e.el,(0,c.b)(e));if(t&&!e.nativeRefresher){const r=e.el.closest("ion-content");e.setupNativeRefresher(r)}else t||e.destroyNativeRefresher()})()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}resetNativeRefresher(e,t){var r=this;return(0,d.A)(function*(){r.state=t,"ios"===(0,c.b)(r)?yield v(e,void 0,300):yield(0,h.t)(r.el.querySelector(".refresher-refreshing-icon"),200),r.didRefresh=!1,r.needsCompletion=!1,r.pointerDown=!1,r.animations.forEach(s=>s.destroy()),r.animations=[],r.progress=0,r.state=1})()}setupiOSNativeRefresher(e,t){var r=this;return(0,d.A)(function*(){r.elementToTransform=r.scrollEl;const s=e.shadowRoot.querySelectorAll("svg");let l=.16*r.scrollEl.clientHeight;const f=s.length;(0,n.w)(()=>s.forEach(o=>o.style.setProperty("animation","none"))),r.scrollListenerCallback=()=>{!r.pointerDown&&1===r.state||(0,n.e)(()=>{const o=r.scrollEl.scrollTop,i=r.el.clientHeight;if(o>0){if(8===r.state){const u=(0,h.j)(0,o/(.5*i),1);return void(0,n.w)(()=>((e,t)=>{e.style.setProperty("opacity",t.toString())})(t,1-u))}return}r.pointerDown&&(r.didStart||(r.didStart=!0,r.ionStart.emit()),r.pointerDown&&r.ionPull.emit());const p=r.didStart?30:0,g=r.progress=(0,h.j)(0,(Math.abs(o)-p)/l,1);8===r.state||1===g?(r.pointerDown&&((e,t)=>{(0,n.w)(()=>{e.style.setProperty("--refreshing-rotation-duration",t>=1?"0.5s":"2s"),e.style.setProperty("opacity","1")})})(t,r.lastVelocityY),r.didRefresh||(r.beginRefresh(),r.didRefresh=!0,(0,k.d)({style:k.I.Light}),r.pointerDown||v(r.elementToTransform,`${i}px`))):(r.state=2,((e,t,r)=>{(0,n.w)(()=>{e.forEach((l,f)=>{const o=f*(1/t),g=(0,h.j)(0,(r-o)/(1-o),1);l.style.setProperty("opacity",g.toString())})})})(s,f,g))})},r.scrollEl.addEventListener("scroll",r.scrollListenerCallback),r.gesture=(yield Promise.resolve().then(a.bind(a,8607))).createGesture({el:r.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:()=>{r.pointerDown=!0,r.didRefresh||v(r.elementToTransform,"0px"),0===l&&(l=.16*r.scrollEl.clientHeight)},onMove:o=>{r.lastVelocityY=o.velocityY},onEnd:()=>{r.pointerDown=!1,r.didStart=!1,r.needsCompletion?(r.resetNativeRefresher(r.elementToTransform,32),r.needsCompletion=!1):r.didRefresh&&(0,n.e)(()=>v(r.elementToTransform,`${r.el.clientHeight}px`))}}),r.disabledChanged()})()}setupMDNativeRefresher(e,t,r){var s=this;return(0,d.A)(function*(){const l=(0,h.g)(t).querySelector("circle"),f=s.el.querySelector("ion-refresher-content .refresher-pulling-icon"),o=(0,h.g)(r).querySelector("circle");null!==l&&null!==o&&(0,n.w)(()=>{l.style.setProperty("animation","none"),r.style.setProperty("animation-delay","-655ms"),o.style.setProperty("animation-delay","-655ms")}),s.gesture=(yield Promise.resolve().then(a.bind(a,8607))).createGesture({el:s.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:()=>8!==s.state&&32!==s.state&&0===s.scrollEl.scrollTop,onStart:i=>{s.progress=0,i.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:i=>{if(i.velocityY<0&&0===s.progress&&!i.data.didStart||i.data.cancelled)i.data.cancelled=!0;else{if(!i.data.didStart){i.data.didStart=!0,s.state=2;const{scrollEl:p}=s,g=p.matches(y.I)?"overflow":"--overflow";(0,n.w)(()=>p.style.setProperty(g,"hidden"));const b=(e=>{const t=e.previousElementSibling;return null!==t&&"ION-HEADER"===t.tagName?"translate":"scale"})(e),u=((e,t,r)=>"scale"===e?((e,t)=>{const r=t.clientHeight,s=(0,m.c)().addElement(e).keyframes([{offset:0,transform:`scale(0) translateY(-${r}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return S(e).addAnimation([s])})(t,r):((e,t)=>{const r=t.clientHeight,s=(0,m.c)().addElement(e).keyframes([{offset:0,transform:`translateY(-${r}px)`},{offset:1,transform:"translateY(100px)"}]);return S(e).addAnimation([s])})(t,r))(b,f,s.el);return i.data.animation=u,u.progressStart(!1,0),s.ionStart.emit(),void s.animations.push(u)}s.progress=(0,h.j)(0,i.deltaY/180*.5,1),i.data.animation.progressStep(s.progress),s.ionPull.emit()}},onEnd:i=>{if(!i.data.didStart)return;s.gesture.enable(!1);const{scrollEl:p}=s,g=p.matches(y.I)?"overflow":"--overflow";if((0,n.w)(()=>p.style.removeProperty(g)),s.progress<=.4)return void i.data.animation.progressEnd(0,s.progress,500).onFinish(()=>{s.animations.forEach(U=>U.destroy()),s.animations=[],s.gesture.enable(!0),s.state=1});const b=(0,_.g)([0,0],[0,0],[1,1],[1,1],s.progress)[0],u=(e=>(0,m.c)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(f);s.animations.push(u),(0,n.w)((0,d.A)(function*(){f.style.setProperty("--ion-pulling-refresher-translate",100*b+"px"),i.data.animation.progressEnd(),yield u.play(),s.beginRefresh(),i.data.animation.destroy(),s.gesture.enable(!0)}))}}),s.disabledChanged()})()}setupNativeRefresher(e){var t=this;return(0,d.A)(function*(){if(t.scrollListenerCallback||!e||t.nativeRefresher||!t.scrollEl)return;t.setCss(0,"",!1,""),t.nativeRefresher=!0;const r=t.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),s=t.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===(0,c.b)(t)?t.setupiOSNativeRefresher(r,s):t.setupMDNativeRefresher(e,r,s)})()}componentDidUpdate(){this.checkNativeRefresher()}connectedCallback(){var e=this;return(0,d.A)(function*(){if("fixed"!==e.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const t=e.el.closest(y.b);t?(0,h.c)(t,(0,d.A)(function*(){const r=t.querySelector(y.I);e.scrollEl=yield(0,y.g)(null!=r?r:t),e.backgroundContentEl=yield t.getBackgroundElement(),(yield P(e.el,(0,c.b)(e)))?e.setupNativeRefresher(t):(e.gesture=(yield Promise.resolve().then(a.bind(a,8607))).createGesture({el:t,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:()=>e.canStart(),onStart:()=>e.onStart(),onMove:s=>e.onMove(s),onEnd:()=>e.onEnd()}),e.disabledChanged())})):(0,y.p)(e.el)})()}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(){var e=this;return(0,d.A)(function*(){e.nativeRefresher?(e.needsCompletion=!0,e.pointerDown||(0,h.r)(()=>(0,h.r)(()=>e.resetNativeRefresher(e.elementToTransform,32)))):e.close(32,"120ms")})()}cancel(){var e=this;return(0,d.A)(function*(){e.nativeRefresher?e.pointerDown||(0,h.r)(()=>(0,h.r)(()=>e.resetNativeRefresher(e.elementToTransform,16))):e.close(16,"")})()}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1,this.memoizeOverflowStyle()}onMove(e){if(!this.scrollEl)return;const t=e.event;if(void 0!==t.touches&&t.touches.length>1||56&this.state)return;const r=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,s=e.deltaY*r;if(s<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(t.cancelable&&t.preventDefault(),this.setCss(s,"0ms",!0,""),0===s)return void(this.progress=0);const l=this.pullMin;this.progress=s/l,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),s<l?this.state=2:s>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state?this.cancel():1===this.state&&this.restoreOverflowStyle()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,t){setTimeout(()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"",!0)},600),this.state=e,this.setCss(0,this.closeDuration,!0,t)}setCss(e,t,r,s,l=!1){this.nativeRefresher||(this.appliedStyles=e>0,(0,n.w)(()=>{if(this.scrollEl&&this.backgroundContentEl){const f=this.scrollEl.style,o=this.backgroundContentEl.style;f.transform=o.transform=e>0?`translateY(${e}px) translateZ(0px)`:"",f.transitionDuration=o.transitionDuration=t,f.transitionDelay=o.transitionDelay=s,f.overflow=r?"hidden":""}l&&this.restoreOverflowStyle()}))}memoizeOverflowStyle(){if(this.scrollEl){const{overflow:e,overflowX:t,overflowY:r}=this.scrollEl.style;this.overflowStyles={overflow:null!=e?e:"",overflowX:null!=t?t:"",overflowY:null!=r?r:""}}}restoreOverflowStyle(){if(void 0!==this.overflowStyles&&void 0!==this.scrollEl){const{overflow:e,overflowX:t,overflowY:r}=this.overflowStyles;this.scrollEl.style.overflow=e,this.scrollEl.style.overflowX=t,this.scrollEl.style.overflowY=r,this.overflowStyles=void 0}}render(){const e=(0,c.b)(this);return(0,n.h)(n.f,{key:"e7f4f2f96de7e80430bf54967ebc12e7216b2ca9",slot:"fixed",class:{[e]:!0,[`refresher-${e}`]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return(0,n.i)(this)}static get watchers(){return{disabled:["disabledChanged"]}}};T.style={ios:"ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, var(--ion-background-color-step-450, #747577))}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #0054e9)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #0054e9);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #ececec));background:var(--ion-color-step-250, var(--ion-background-color-step-250, #ffffff));-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}"};const H=class{constructor(e){(0,n.r)(this,e),this.customHTMLEnabled=c.c.get("innerHTMLTemplatesEnabled",x.E),this.pullingIcon=void 0,this.pullingText=void 0,this.refreshingSpinner=void 0,this.refreshingText=void 0}componentWillLoad(){if(void 0===this.pullingIcon){const e=R(),t=(0,c.b)(this);this.pullingIcon=c.c.get("refreshingIcon","ios"===t&&e?c.c.get("spinner",e?"lines":E.i):"circular")}if(void 0===this.refreshingSpinner){const e=(0,c.b)(this);this.refreshingSpinner=c.c.get("refreshingSpinner",c.c.get("spinner","ios"===e?"lines":"circular"))}}renderPullingText(){const{customHTMLEnabled:e,pullingText:t}=this;return e?(0,n.h)("div",{class:"refresher-pulling-text",innerHTML:(0,x.a)(t)}):(0,n.h)("div",{class:"refresher-pulling-text"},t)}renderRefreshingText(){const{customHTMLEnabled:e,refreshingText:t}=this;return e?(0,n.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,x.a)(t)}):(0,n.h)("div",{class:"refresher-refreshing-text"},t)}render(){const e=this.pullingIcon,t=null!=e&&void 0!==C.S[e],r=(0,c.b)(this);return(0,n.h)(n.f,{key:"19633bbcf02e3dba885d6bdcdaf2269bf4c8e2f5",class:r},(0,n.h)("div",{key:"28922e434a55a6cac0476fe2bee56941ce0d1c02",class:"refresher-pulling"},this.pullingIcon&&t&&(0,n.h)("div",{key:"fe575bf996021884677e9b23a3215d63caf894f5",class:"refresher-pulling-icon"},(0,n.h)("div",{key:"59fe12297fd95bc33b8df8cd35316e2a1c084d91",class:"spinner-arrow-container"},(0,n.h)("ion-spinner",{key:"af9cc013ae04945c140b2865610ca73edb52ab48",name:this.pullingIcon,paused:!0}),"md"===r&&"circular"===this.pullingIcon&&(0,n.h)("div",{key:"34df66ad1b0f706a0532957251aa2c20bf4587d8",class:"arrow-container"},(0,n.h)("ion-icon",{key:"ffdb5c123e606b823491c6c51cc2b497f62581bb",icon:E.h,"aria-hidden":"true"})))),this.pullingIcon&&!t&&(0,n.h)("div",{key:"ac3a2032bb969264d20fa057e9123441005d7a9d",class:"refresher-pulling-icon"},(0,n.h)("ion-icon",{key:"d969d10915548e72aae289b52154366f3dd39b31",icon:this.pullingIcon,lazy:!1,"aria-hidden":"true"})),void 0!==this.pullingText&&this.renderPullingText()),(0,n.h)("div",{key:"a8f854f81a94812d7bef8ce088331d94f49ff53d",class:"refresher-refreshing"},this.refreshingSpinner&&(0,n.h)("div",{key:"a1f646945370e40c844d62bc0c647443ae9dfbe7",class:"refresher-refreshing-icon"},(0,n.h)("ion-spinner",{key:"ab3ff4047769b6436e222b46d193c1e8b23e2fce",name:this.refreshingSpinner})),void 0!==this.refreshingText&&this.renderRefreshingText()))}get el(){return(0,n.i)(this)}}}}]);