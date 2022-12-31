"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[166],{33086:(P,b,o)=>{o.d(b,{Q:()=>m});var t=o(94650),c=o(36895),f=o(97392);class p{constructor(d){this.platformLocation=d,this._text=""}ngOnInit(){this._text=this.example.toLowerCase().split(" ").filter(d=>"&"!==d).join("-")}getFragmentUrl(){return`${this.platformLocation.pathname}#${this._text}`}}p.\u0275fac=function(d){return new(d||p)(t.Y36(c.lw))},p.\u0275cmp=t.Xpm({type:p,selectors:[["header-link"]],inputs:{example:"example"},decls:3,vars:2,consts:[["aria-label","Link to this heading",1,"docs-markdown-a","header-link",3,"href"]],template:function(d,T){1&d&&(t.TgZ(0,"a",0)(1,"mat-icon"),t._uU(2,"link"),t.qZA()()),2&d&&(t.Q6J("href",T.getFragmentUrl(),t.LSH),t.uIk("aria-describedby",T.example))},dependencies:[f.Hw],styles:["h1 .header-link,h2 .header-link,h3 .header-link,h4 .header-link,h5 .header-link,h6 .header-link{display:inline-flex;padding:2px 0;margin-left:-30px;color:#6e6e6e;text-decoration:none;-webkit-user-select:none;user-select:none;visibility:hidden;vertical-align:middle}h1:hover .header-link,h2:hover .header-link,h3:hover .header-link,h4:hover .header-link,h5:hover .header-link,h6:hover .header-link{visibility:visible}h1 span,h2 span,h3 span,h4 span,h5 span,h6 span{vertical-align:middle}\n"],encapsulation:2});class m{constructor(){this.text="",this.id=""}ngOnInit(){this.id=this.text.toLowerCase().split(" ").filter(d=>"&"!==d).join("-")}}m.\u0275fac=function(d){return new(d||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["doc-heading"]],inputs:{text:"text"},decls:4,vars:3,consts:[[3,"id"],[3,"example"]],template:function(d,T){1&d&&(t.TgZ(0,"h3",0),t._UZ(1,"header-link",1),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&d&&(t.Q6J("id",T.id),t.xp6(1),t.Q6J("example",T.text),t.xp6(2),t.hij(" ",T.text,""))},dependencies:[p],encapsulation:2})},29241:(P,b,o)=>{o.d(b,{z:()=>c});var t=o(94650);class c{constructor(){this.textContent=""}ngOnDestroy(){}}c.\u0275fac=function(p){return new(p||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(p,m){1&p&&t._UZ(0,"div",0),2&p&&t.Q6J("innerHTML",m.textContent,t.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0}.docs-markdown table code{padding:0;background-color:transparent}.docs-markdown th{max-width:100px;padding:13px 16px;font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2})},22281:(P,b,o)=>{o.d(b,{B:()=>x});var t=o(94650),c=o(17009),f=o(27163),p=o(36895),m=o(4859),C=o(97392),d=o(3848),T=o(10266);const A=["demo"];function V(g,u){if(1&g){const h=t.EpF();t.TgZ(0,"mat-tab",11)(1,"div",12)(2,"div",13)(3,"button",14),t.NdJ("click",function(){t.CHM(h);const M=t.MAs(8),O=t.oxw(2);return t.KtG(O.copySource(M))}),t.TgZ(4,"mat-icon"),t._uU(5,"content_copy"),t.qZA()()(),t.TgZ(6,"div",15),t._UZ(7,"pre",16,17),t.qZA()()()}if(2&g){const h=u.$implicit;t.Q6J("label",h.file),t.xp6(3),t.Q6J("matTooltip","Copy example source"),t.xp6(4),t.Q6J("innerHtml",h.content,t.oJD)}}function R(g,u){if(1&g&&(t.TgZ(0,"div",8)(1,"mat-tab-group",9),t.YNc(2,V,9,3,"mat-tab",10),t.qZA()()),2&g){const h=t.oxw();t.xp6(2),t.Q6J("ngForOf",h.exampleData.files)}}function k(g,u){if(1&g&&t._UZ(0,"div",18),2&g){const h=t.oxw();t.Q6J("innerHtml",h.exampleData.description,t.oJD)}}function E(g,u){}class x{constructor(u,h,L){this.snackbar=u,this.copier=h,this.componentFactoryResolver=L,this.showSource=!1}ngOnInit(){const u=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(u)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(u){this.copier.copyText(u.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}x.\u0275fac=function(u){return new(u||x)(t.Y36(c.ux),t.Y36(f.u),t.Y36(t._Vd))},x.\u0275cmp=t.Xpm({type:x,selectors:[["example-viewer"]],viewQuery:function(u,h){if(1&u&&t.Gf(A,7,t.s_b),2&u){let L;t.iGM(L=t.CRH())&&(h.demoRef=L.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button","aria-label","View source",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],["animationDuration","0ms","mat-stretch-tabs","false"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(u,h){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span"),t._uU(3),t.qZA(),t._UZ(4,"div",2),t.TgZ(5,"button",3),t.NdJ("click",function(){return h.toggleSourceView()}),t.TgZ(6,"mat-icon"),t._uU(7,"code"),t.qZA()()(),t.YNc(8,R,3,1,"div",4),t.TgZ(9,"div",5),t.YNc(10,k,1,1,"div",6),t.YNc(11,E,0,0,"ng-template",null,7,t.W1O),t.qZA()()),2&u&&(t.xp6(3),t.Oqu(h.exampleData.title),t.xp6(2),t.Q6J("matTooltip","View source"),t.xp6(3),t.Q6J("ngIf",h.showSource),t.xp6(2),t.Q6J("ngIf",h.exampleData.description))},dependencies:[p.sg,p.O5,m.RK,C.Hw,d.uX,d.SP,T.gM],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]})},13081:(P,b,o)=>{o.d(b,{Zw:()=>u,aw:()=>B,sK:()=>Z});var t=o(94650),c=o(39646),f=o(45191),p=o(4128),m=o(97272),C=o(49770),d=o(95698),T=o(77579),A=o(26063);class V extends T.x{constructor(i=1/0,e=1/0,n=A.l){super(),this._bufferSize=i,this._windowTime=e,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,e)}next(i){const{isStopped:e,_buffer:n,_infiniteTimeWindow:s,_timestampProvider:r,_windowTime:l}=this;e||(n.push(i),!s&&n.push(r.now()+l)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(i),{_infiniteTimeWindow:n,_buffer:s}=this,r=s.slice();for(let l=0;l<r.length&&!i.closed;l+=n?1:2)i.next(r[l]);return this._checkFinalizedStatuses(i),e}_trimBuffer(){const{_bufferSize:i,_timestampProvider:e,_buffer:n,_infiniteTimeWindow:s}=this,r=(s?1:2)*i;if(i<1/0&&r<n.length&&n.splice(0,n.length-r),!s){const l=e.now();let y=0;for(let v=1;v<n.length&&n[v]<=l;v+=2)y=v;y&&n.splice(0,y+1)}}}var R=o(13099);function k(a,i,e){let n,s=!1;return a&&"object"==typeof a?({bufferSize:n=1/0,windowTime:i=1/0,refCount:s=!1,scheduler:e}=a):n=a??1/0,(0,R.B)({connector:()=>new V(n,i,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:s})}var E=o(54004),x=o(24351),g=o(63900);class u{}let h=(()=>{class a extends u{getTranslation(e){return(0,c.of)({})}}return a.\u0275fac=function(){let i;return function(n){return(i||(i=t.n5z(a)))(n||a)}}(),a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();class L{}let M=(()=>{class a{handle(e){return e.key}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();function w(a){return typeof a<"u"&&null!==a}function U(a){return a&&"object"==typeof a&&!Array.isArray(a)}function N(a,i){let e=Object.assign({},a);return U(a)&&U(i)&&Object.keys(i).forEach(n=>{U(i[n])?n in a?e[n]=N(a[n],i[n]):Object.assign(e,{[n]:i[n]}):Object.assign(e,{[n]:i[n]})}),e}class S{}let J=(()=>{class a extends S{constructor(){super(...arguments),this.templateMatcher=/{{\s?([^{}\s]*)\s?}}/g}interpolate(e,n){let s;return s="string"==typeof e?this.interpolateString(e,n):"function"==typeof e?this.interpolateFunction(e,n):e,s}getValue(e,n){let s="string"==typeof n?n.split("."):[n];n="";do{n+=s.shift(),!w(e)||!w(e[n])||"object"!=typeof e[n]&&s.length?s.length?n+=".":e=void 0:(e=e[n],n="")}while(s.length);return e}interpolateFunction(e,n){return e(n)}interpolateString(e,n){return n?e.replace(this.templateMatcher,(s,r)=>{let l=this.getValue(n,r);return w(l)?l:s}):e}}return a.\u0275fac=function(){let i;return function(n){return(i||(i=t.n5z(a)))(n||a)}}(),a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();class F{}let z=(()=>{class a extends F{compile(e,n){return e}compileTranslations(e,n){return e}}return a.\u0275fac=function(){let i;return function(n){return(i||(i=t.n5z(a)))(n||a)}}(),a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();class G{constructor(){this.currentLang=this.defaultLang,this.translations={},this.langs=[],this.onTranslationChange=new t.vpe,this.onLangChange=new t.vpe,this.onDefaultLangChange=new t.vpe}}const I=new t.OlP("USE_STORE"),j=new t.OlP("USE_DEFAULT_LANG"),K=new t.OlP("DEFAULT_LANGUAGE"),H=new t.OlP("USE_EXTEND");let Z=(()=>{class a{constructor(e,n,s,r,l,y=!0,v=!1,_=!1,D){this.store=e,this.currentLoader=n,this.compiler=s,this.parser=r,this.missingTranslationHandler=l,this.useDefaultLang=y,this.isolate=v,this.extend=_,this.pending=!1,this._onTranslationChange=new t.vpe,this._onLangChange=new t.vpe,this._onDefaultLangChange=new t.vpe,this._langs=[],this._translations={},this._translationRequests={},D&&this.setDefaultLang(D)}get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}setDefaultLang(e){if(e===this.defaultLang)return;let n=this.retrieveTranslations(e);typeof n<"u"?(null==this.defaultLang&&(this.defaultLang=e),n.pipe((0,d.q)(1)).subscribe(s=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(e===this.currentLang)return(0,c.of)(this.translations[e]);let n=this.retrieveTranslations(e);return typeof n<"u"?(this.currentLang||(this.currentLang=e),n.pipe((0,d.q)(1)).subscribe(s=>{this.changeLang(e)}),n):(this.changeLang(e),(0,c.of)(this.translations[e]))}retrieveTranslations(e){let n;return(typeof this.translations[e]>"u"||this.extend)&&(this._translationRequests[e]=this._translationRequests[e]||this.getTranslation(e),n=this._translationRequests[e]),n}getTranslation(e){this.pending=!0;const n=this.currentLoader.getTranslation(e).pipe(k(1),(0,d.q)(1));return this.loadingTranslations=n.pipe((0,E.U)(s=>this.compiler.compileTranslations(s,e)),k(1),(0,d.q)(1)),this.loadingTranslations.subscribe({next:s=>{this.translations[e]=this.extend&&this.translations[e]?{...s,...this.translations[e]}:s,this.updateLangs(),this.pending=!1},error:s=>{this.pending=!1}}),n}setTranslation(e,n,s=!1){n=this.compiler.compileTranslations(n,e),this.translations[e]=(s||this.extend)&&this.translations[e]?N(this.translations[e],n):n,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(n=>{-1===this.langs.indexOf(n)&&this.langs.push(n)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(e,n,s){let r;if(n instanceof Array){let l={},y=!1;for(let v of n)l[v]=this.getParsedResult(e,v,s),(0,f.b)(l[v])&&(y=!0);if(y){const v=n.map(_=>(0,f.b)(l[_])?l[_]:(0,c.of)(l[_]));return(0,p.D)(v).pipe((0,E.U)(_=>{let D={};return _.forEach((W,Q)=>{D[n[Q]]=W}),D}))}return l}if(e&&(r=this.parser.interpolate(this.parser.getValue(e,n),s)),typeof r>"u"&&null!=this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(r=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],n),s)),typeof r>"u"){let l={key:n,translateService:this};typeof s<"u"&&(l.interpolateParams=s),r=this.missingTranslationHandler.handle(l)}return typeof r<"u"?r:n}get(e,n){if(!w(e)||!e.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe((0,x.b)(s=>(s=this.getParsedResult(s,e,n),(0,f.b)(s)?s:(0,c.of)(s))));{let s=this.getParsedResult(this.translations[this.currentLang],e,n);return(0,f.b)(s)?s:(0,c.of)(s)}}getStreamOnTranslationChange(e,n){if(!w(e)||!e.length)throw new Error('Parameter "key" required');return(0,m.z)((0,C.P)(()=>this.get(e,n)),this.onTranslationChange.pipe((0,g.w)(s=>{const r=this.getParsedResult(s.translations,e,n);return"function"==typeof r.subscribe?r:(0,c.of)(r)})))}stream(e,n){if(!w(e)||!e.length)throw new Error('Parameter "key" required');return(0,m.z)((0,C.P)(()=>this.get(e,n)),this.onLangChange.pipe((0,g.w)(s=>{const r=this.getParsedResult(s.translations,e,n);return(0,f.b)(r)?r:(0,c.of)(r)})))}instant(e,n){if(!w(e)||!e.length)throw new Error('Parameter "key" required');let s=this.getParsedResult(this.translations[this.currentLang],e,n);if((0,f.b)(s)){if(e instanceof Array){let r={};return e.forEach((l,y)=>{r[e[y]]=e[y]}),r}return e}return s}set(e,n,s=this.currentLang){this.translations[s][e]=this.compiler.compile(n,s),this.updateLangs(),this.onTranslationChange.emit({lang:s,translations:this.translations[s]})}changeLang(e){this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),null==this.defaultLang&&this.changeDefaultLang(e)}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.getTranslation(e)}resetLang(e){this._translationRequests[e]=void 0,this.translations[e]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,typeof e>"u"?void 0:(-1!==e.indexOf("-")&&(e=e.split("-")[0]),-1!==e.indexOf("_")&&(e=e.split("_")[0]),e)}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,e}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(G),t.LFG(u),t.LFG(F),t.LFG(S),t.LFG(L),t.LFG(j),t.LFG(I),t.LFG(H),t.LFG(K))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})(),B=(()=>{class a{static forRoot(e={}){return{ngModule:a,providers:[e.loader||{provide:u,useClass:h},e.compiler||{provide:F,useClass:z},e.parser||{provide:S,useClass:J},e.missingTranslationHandler||{provide:L,useClass:M},G,{provide:I,useValue:e.isolate},{provide:j,useValue:e.useDefaultLang},{provide:H,useValue:e.extend},{provide:K,useValue:e.defaultLanguage},Z]}}static forChild(e={}){return{ngModule:a,providers:[e.loader||{provide:u,useClass:h},e.compiler||{provide:F,useClass:z},e.parser||{provide:S,useClass:J},e.missingTranslationHandler||{provide:L,useClass:M},{provide:I,useValue:e.isolate},{provide:j,useValue:e.useDefaultLang},{provide:H,useValue:e.extend},{provide:K,useValue:e.defaultLanguage},Z]}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({}),a})()},19832:(P,b,o)=>{o.d(b,{w:()=>t});class t{constructor(f,p="/assets/i18n/",m=".json"){this.http=f,this.prefix=p,this.suffix=m}getTranslation(f){return this.http.get(`${this.prefix}${f}${this.suffix}`)}}}}]);