"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5887],{5887:(x,a,l)=>{l.r(a),l.d(a,{ion_split_pane:()=>c});var d=l(467),n=l(4635),b=l(9690);const r="split-pane-main",h="split-pane-side",p={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},c=class{constructor(e){(0,n.r)(this,e),this.ionSplitPaneVisible=(0,n.d)(this,"ionSplitPaneVisible",7),this.visible=!1,this.contentId=void 0,this.disabled=!1,this.when=p.lg}visibleChanged(e){this.ionSplitPaneVisible.emit({visible:e})}isVisible(){var e=this;return(0,d.A)(function*(){return Promise.resolve(e.visible)})()}connectedCallback(){var e=this;return(0,d.A)(function*(){typeof customElements<"u"&&null!=customElements&&(yield customElements.whenDefined("ion-split-pane")),e.styleMainElement(),e.updateState()})()}disconnectedCallback(){this.rmL&&(this.rmL(),this.rmL=void 0)}updateState(){if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)return void(this.visible=!1);const e=this.when;if("boolean"==typeof e)return void(this.visible=e);const o=p[e]||e;if(0===o.length)return void(this.visible=!1);const t=s=>{this.visible=s.matches},i=window.matchMedia(o);i.addListener(t),this.rmL=()=>i.removeListener(t),this.visible=i.matches}styleMainElement(){const e=this.contentId,o=this.el.children,t=this.el.childElementCount;let i=!1;for(let s=0;s<t;s++){const m=o[s],f=void 0!==e&&m.id===e;if(f){if(i)return void console.warn("split pane cannot have more than one main node");w(m,f),i=!0}}i||console.warn("split pane does not have a specified main node")}render(){const e=(0,b.b)(this);return(0,n.h)(n.f,{key:"d04ff97717268184725f25b39bb1416b2b423260",class:{[e]:!0,[`split-pane-${e}`]:!0,"split-pane-visible":this.visible}},(0,n.h)("slot",{key:"4d355509ab6fcdac415184068ffe1241a5078db3"}))}get el(){return(0,n.i)(this)}static get watchers(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}},w=(e,o)=>{let t,i;o?(t=r,i=h):(t=h,i=r);const s=e.classList;s.add(t),s.remove(i)};c.style={ios:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--side-min-width:270px;--side-max-width:28%}",md:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--side-min-width:270px;--side-max-width:28%}"}}}]);