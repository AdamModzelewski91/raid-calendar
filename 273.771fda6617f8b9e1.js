"use strict";(self.webpackChunkguild_raiding_app=self.webpackChunkguild_raiding_app||[]).push([[273],{5963:(L,b,d)=>{d.d(b,{H:()=>C});var x=d(9751),s=d(4986),p=d(3532);function C(v=0,R,y=s.P){let f=-1;return null!=R&&((0,p.K)(R)?y=R:f=R),new x.y(l=>{let h=function k(v){return v instanceof Date&&!isNaN(v)}(v)?+v-y.now():v;h<0&&(h=0);let u=0;return y.schedule(function(){l.closed||(l.next(u++),0<=f?this.schedule(void 0,f):l.complete())},h)})}},6406:(L,b,d)=>{d.d(b,{Z:()=>R});var x=d(4408),s=d(727);const p={schedule(f){let l=requestAnimationFrame,h=cancelAnimationFrame;const{delegate:u}=p;u&&(l=u.requestAnimationFrame,h=u.cancelAnimationFrame);const _=l(S=>{h=void 0,f(S)});return new s.w0(()=>h?.(_))},requestAnimationFrame(...f){const{delegate:l}=p;return(l?.requestAnimationFrame||requestAnimationFrame)(...f)},cancelAnimationFrame(...f){const{delegate:l}=p;return(l?.cancelAnimationFrame||cancelAnimationFrame)(...f)},delegate:void 0};var C=d(640);const R=new class v extends C.v{flush(l){this._active=!0;const h=this._scheduled;this._scheduled=void 0;const{actions:u}=this;let _;l=l||u.shift();do{if(_=l.execute(l.state,l.delay))break}while((l=u[0])&&l.id===h&&u.shift());if(this._active=!1,_){for(;(l=u[0])&&l.id===h&&u.shift();)l.unsubscribe();throw _}}}(class k extends x.o{constructor(l,h){super(l,h),this.scheduler=l,this.work=h}requestAsyncId(l,h,u=0){return null!==u&&u>0?super.requestAsyncId(l,h,u):(l.actions.push(this),l._scheduled||(l._scheduled=p.requestAnimationFrame(()=>l.flush(void 0))))}recycleAsyncId(l,h,u=0){var _;if(null!=u?u>0:this.delay>0)return super.recycleAsyncId(l,h,u);const{actions:S}=l;null!=h&&(null===(_=S[S.length-1])||void 0===_?void 0:_.id)!==h&&(p.cancelAnimationFrame(h),l._scheduled=void 0)}})},1273:(L,b,d)=>{d.d(b,{ZD:()=>I,mF:()=>F,Cl:()=>_e,rL:()=>j});var x=d(1281),s=d(4650),p=d(7579),k=d(9646),C=d(9751),v=d(8421),R=d(5577),y=d(1144),f=d(576),l=d(3268);const h=["addListener","removeListener"],u=["addEventListener","removeEventListener"],_=["on","off"];function S(i,n,e,t){if((0,f.m)(e)&&(t=e,e=void 0),t)return S(i,n,e).pipe((0,l.Z)(t));const[r,o]=function H(i){return(0,f.m)(i.addEventListener)&&(0,f.m)(i.removeEventListener)}(i)?u.map(a=>g=>i[a](n,g,e)):function Z(i){return(0,f.m)(i.addListener)&&(0,f.m)(i.removeListener)}(i)?h.map(A(i,n)):function Y(i){return(0,f.m)(i.on)&&(0,f.m)(i.off)}(i)?_.map(A(i,n)):[];if(!r&&(0,y.z)(i))return(0,R.z)(a=>S(a,n,e))((0,v.Xf)(i));if(!r)throw new TypeError("Invalid event target");return new C.y(a=>{const g=(...c)=>a.next(1<c.length?c:c[0]);return r(g),()=>o(g)})}function A(i,n){return e=>t=>i[e](n,t)}var U=d(6406),G=d(4408);let O,$=1;const z={};function T(i){return i in z&&(delete z[i],!0)}const X={setImmediate(i){const n=$++;return z[n]=!0,O||(O=Promise.resolve()),O.then(()=>T(n)&&i()),n},clearImmediate(i){T(i)}},{setImmediate:K,clearImmediate:J}=X,D={setImmediate(...i){const{delegate:n}=D;return(n?.setImmediate||K)(...i)},clearImmediate(i){const{delegate:n}=D;return(n?.clearImmediate||J)(i)},delegate:void 0};var q=d(640);const te=new class ee extends q.v{flush(n){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:t}=this;let r;n=n||t.shift();do{if(r=n.execute(n.state,n.delay))break}while((n=t[0])&&n.id===e&&t.shift());if(this._active=!1,r){for(;(n=t[0])&&n.id===e&&t.shift();)n.unsubscribe();throw r}}}(class Q extends G.o{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,t=0){return null!==t&&t>0?super.requestAsyncId(n,e,t):(n.actions.push(this),n._scheduled||(n._scheduled=D.setImmediate(n.flush.bind(n,void 0))))}recycleAsyncId(n,e,t=0){var r;if(null!=t?t>0:this.delay>0)return super.recycleAsyncId(n,e,t);const{actions:o}=n;null!=e&&(null===(r=o[o.length-1])||void 0===r?void 0:r.id)!==e&&(D.clearImmediate(e),n._scheduled===e&&(n._scheduled=void 0))}});var ie=d(727),ne=d(4986),re=d(4482),B=d(5403),se=d(5963);function E(i,n=ne.z){return function oe(i){return(0,re.e)((n,e)=>{let t=!1,r=null,o=null,a=!1;const g=()=>{if(o?.unsubscribe(),o=null,t){t=!1;const m=r;r=null,e.next(m)}a&&e.complete()},c=()=>{o=null,a&&e.complete()};n.subscribe((0,B.x)(e,m=>{t=!0,r=m,o||(0,v.Xf)(i(m)).subscribe(o=(0,B.x)(e,g,c))},()=>{a=!0,(!t||!o||o.closed)&&e.complete()}))})}(()=>(0,se.H)(i,n))}var le=d(9300),M=d(2722),ae=d(8675),w=d(3353),P=d(6895),V=d(445);const de=["contentWrapper"],ce=["*"],he=new s.OlP("VIRTUAL_SCROLL_STRATEGY");let F=(()=>{class i{constructor(e,t,r){this._ngZone=e,this._platform=t,this._scrolled=new p.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new C.y(t=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe(E(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,k.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,le.h)(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let r=(0,x.fI)(t),o=e.getElementRef().nativeElement;do{if(r==o)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>S(this._getWindow().document,"scroll").subscribe(()=>this._scrolled.next()))}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return i.\u0275fac=function(e){return new(e||i)(s.LFG(s.R0b),s.LFG(w.t4),s.LFG(P.K0,8))},i.\u0275prov=s.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),W=(()=>{class i{constructor(e,t,r,o){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=r,this.dir=o,this._destroyed=new p.x,this._elementScrolled=new C.y(a=>this.ngZone.runOutsideAngular(()=>S(this.elementRef.nativeElement,"scroll").pipe((0,M.R)(this._destroyed)).subscribe(a)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,r=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=r?e.end:e.start),null==e.right&&(e.right=r?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&0!=(0,w._i)()?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),2==(0,w._i)()?e.left=e.right:1==(0,w._i)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;(0,w.Mq)()?t.scrollTo(e):(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left))}measureScrollOffset(e){const t="left",r="right",o=this.elementRef.nativeElement;if("top"==e)return o.scrollTop;if("bottom"==e)return o.scrollHeight-o.clientHeight-o.scrollTop;const a=this.dir&&"rtl"==this.dir.value;return"start"==e?e=a?r:t:"end"==e&&(e=a?t:r),a&&2==(0,w._i)()?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&1==(0,w._i)()?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}}return i.\u0275fac=function(e){return new(e||i)(s.Y36(s.SBq),s.Y36(F),s.Y36(s.R0b),s.Y36(V.Is,8))},i.\u0275dir=s.lG2({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0}),i})(),j=(()=>{class i{constructor(e,t,r){this._platform=e,this._change=new p.x,this._changeListener=o=>{this._change.next(o)},this._document=r,t.runOutsideAngular(()=>{if(e.isBrowser){const o=this._getWindow();o.addEventListener("resize",this._changeListener),o.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect();return{top:-o.top||e.body.scrollTop||t.scrollY||r.scrollTop||0,left:-o.left||e.body.scrollLeft||t.scrollX||r.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(E(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return i.\u0275fac=function(e){return new(e||i)(s.LFG(w.t4),s.LFG(s.R0b),s.LFG(P.K0,8))},i.\u0275prov=s.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const N=new s.OlP("VIRTUAL_SCROLLABLE");let ge=(()=>{class i extends W{constructor(e,t,r,o){super(e,t,r,o)}measureViewportSize(e){const t=this.elementRef.nativeElement;return"horizontal"===e?t.clientWidth:t.clientHeight}}return i.\u0275fac=function(e){return new(e||i)(s.Y36(s.SBq),s.Y36(F),s.Y36(s.R0b),s.Y36(V.Is,8))},i.\u0275dir=s.lG2({type:i,features:[s.qOj]}),i})();const pe=typeof requestAnimationFrame<"u"?U.Z:te;let ve=(()=>{class i extends ge{get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=(0,x.Ig)(e)}constructor(e,t,r,o,a,g,c,m){super(e,g,r,a),this.elementRef=e,this._changeDetectorRef=t,this._scrollStrategy=o,this.scrollable=m,this._platform=(0,s.f3M)(w.t4),this._detachedSubject=new p.x,this._renderedRangeSubject=new p.x,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new C.y(Se=>this._scrollStrategy.scrolledIndexChange.subscribe(we=>Promise.resolve().then(()=>this.ngZone.run(()=>Se.next(we))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=ie.w0.EMPTY,this._viewportChanges=c.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,ae.O)(null),E(0,pe)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,M.R)(this._detachedSubject)).subscribe(t=>{const r=t.length;r!==this._dataLength&&(this._dataLength=r,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function me(i,n){return i.start==n.start&&i.end==n.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&"to-start"===t?0:e;const o="horizontal"==this.orientation,a=o?"X":"Y";let c=`translate${a}(${Number((o&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(c+=` translate${a}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=c&&(this._renderedContentTransform=c,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const r={behavior:t};"horizontal"===this.orientation?r.start=e:r.top=e,this.scrollable.scrollTo(r)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return t=this.scrollable==this?r=>super.measureScrollOffset(r):r=>this.scrollable.measureScrollOffset(r),Math.max(0,t(e??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t;const r="left",o="right",a="rtl"==this.dir?.value;t="start"==e?a?o:r:"end"==e?a?r:o:e||("horizontal"===this.orientation?"left":"top");const g=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-g}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return i.\u0275fac=function(e){return new(e||i)(s.Y36(s.SBq),s.Y36(s.sBO),s.Y36(s.R0b),s.Y36(he,8),s.Y36(V.Is,8),s.Y36(F),s.Y36(j),s.Y36(N,8))},i.\u0275cmp=s.Xpm({type:i,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,t){if(1&e&&s.Gf(de,7),2&e){let r;s.iGM(r=s.CRH())&&(t._contentWrapper=r.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,t){2&e&&s.ekj("cdk-virtual-scroll-orientation-horizontal","horizontal"===t.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==t.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[s._Bn([{provide:W,useFactory:(n,e)=>n||e,deps:[[new s.FiY,new s.tBr(N)],i]}]),s.qOj,s.jDz],ngContentSelectors:ce,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,t){1&e&&(s.F$t(),s.TgZ(0,"div",0,1),s.Hsn(2),s.qZA(),s._UZ(3,"div",2)),2&e&&(s.xp6(3),s.Udp("width",t._totalContentWidth)("height",t._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0}),i})(),I=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({}),i})(),_e=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({imports:[V.vT,I,ve,V.vT,I]}),i})()}}]);