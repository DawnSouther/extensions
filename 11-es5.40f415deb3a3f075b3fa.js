!function(){function a(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function n(a,n){for(var s=0;s<n.length;s++){var t=n[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function s(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1Mbh":function(a,n){a.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;loader-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  loading = <span class="hljs-literal">true</span>;\n  hasBackdrop = <span class="hljs-literal">true</span>;\n  <span class="hljs-keyword">type</span> = <span class="hljs-string">&#x27;spinner&#x27;</span>;\n  color = <span class="hljs-string">&#x27;primary&#x27;</span>;\n}\n'},"4MN1":function(a,n,s){"use strict";s.r(n),n.default='<div class="loader-demo">\n  <mtx-loader></mtx-loader>\n</div>\n'},"88pA":function(a,n,s){"use strict";s.r(n),n.default='<h2>Loader configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="spinner">spinner</mat-radio-button>\n    <mat-radio-button value="progressbar">progressbar</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>Color:</label>\n  <mat-radio-group [(ngModel)]="color">\n    <mat-radio-button value="primary">primary</mat-radio-button>\n    <mat-radio-button value="accent">accent</mat-radio-button>\n    <mat-radio-button value="warn">warn</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="hasBackdrop">hasBackdrop</mat-checkbox>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="loading">loading</mat-checkbox>\n</section>\n\n<h2>Result</h2>\n\n<mtx-loader [loading]="loading" [type]="type" [color]="color" [hasBackdrop]="hasBackdrop">\n  <div class="loader-demo">\n    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore\n    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam\n    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n    consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed\n    quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam\n    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\n    autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil\n    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n  </div>\n</mtx-loader>\n'},BPEe:function(a,n){a.exports='<span class="hljs-selector-class">.loader-demo</span> {\n  <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">16px</span>;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">16px</span> <span class="hljs-number">0</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid;\n}\n'},Ejav:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var o=e("fXoL"),l=function(){var n=function(){function n(){a(this,n),this.textContent=""}return s(n,[{key:"ngOnDestroy",value:function(){}}]),n}();return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=o.Ib({type:n,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(a,n){1&a&&o.Pb(0,"div",0),2&a&&o.oc("innerHTML",n.textContent,o.Bc)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12)}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.025);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{margin:0 0 32px;border-radius:2px;box-shadow:0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12)}"],encapsulation:2}),n}()},Jrgb:function(a,n,s){"use strict";s.r(n),n.default=".loader-demo {\n  height: 200px;\n  padding: 0 16px;\n  margin: 16px 0;\n  border: 1px solid;\n}\n"},O17O:function(a,n,s){"use strict";s.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'loader-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  loading = true;\n  hasBackdrop = true;\n  type = 'spinner';\n  color = 'primary';\n}\n"},OFUr:function(a,n,s){"use strict";s.r(n),n.default='<h1 id="loader">loader</h1>\n<h2 id="api-reference-for-material-extensions-loader">API reference for Material Extensions Loader</h2>\n<p><code>import { MtxLoaderModule } from &apos;@ng-matero/extensions/loader&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxloader"><code>MtxLoader</code></h4>\n<p>Selector: <code>[mtx-loader]</code></p>\n<p>Exported as: <code>mtxLoader</code></p>\n<h5 id="properties">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">@Input() <code>type: &apos;spinner&apos; | &apos;progressbar&apos;</code></td>\n<td align="left">The loader type. Defaulted to <strong><code>&apos;spinner&apos;</code></strong></td>\n</tr>\n<tr>\n<td align="left">@Input() <code>loading: boolean</code></td>\n<td align="left">The loading status.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>color: ThemePalette</code></td>\n<td align="left">Theme color palette for the component.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>mode&#xFF1A;ProgressSpinnerMode | ProgressBarMode</code></td>\n<td align="left">Mode of the progress circle.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>value: number</code></td>\n<td align="left">Value of the progress circle or progress bar.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>strokeWidth: number</code></td>\n<td align="left">Stroke width of the progress spinner. Defaulted to <strong><code>4</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>diameter: number</code></td>\n<td align="left">The diameter of the progress spinner (will set width and height of svg). Defaulted to <strong><code>48</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>bufferValue: number</code></td>\n<td align="left">Buffer value of the progress bar. Defaulted to <strong><code>0</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>hasBackdrop: boolean</code></td>\n<td align="left">Whether show loader backdrop. Defaulted to <strong><code>true</code></strong>.</td>\n</tr>\n</tbody></table>\n'},ZpCV:function(n,t,e){"use strict";e.d(t,"a",function(){return x});var o=e("fXoL"),l=e("dNgK"),p=e("yeTJ"),r=e("bTqV"),c=e("Qu3c"),i=e("NFeN"),d=e("ofXK"),u=e("wZkO"),m=["demo"];function h(a,n){if(1&a){var s=o.Vb();o.Ub(0,"mat-tab",10),o.Ub(1,"div",11),o.Ub(2,"div",12),o.Ub(3,"button",13),o.cc("click",function(){o.Ac(s);var a=o.xc(8);return o.gc(2).copySource(a)}),o.Ub(4,"mat-icon"),o.Lc(5,"content_copy"),o.Tb(),o.Tb(),o.Tb(),o.Ub(6,"div",14),o.Pb(7,"pre",15,16),o.Tb(),o.Tb(),o.Tb()}if(2&a){var t=n.$implicit;o.oc("label",t.file),o.Cb(3),o.oc("matTooltip","Copy example source"),o.Cb(4),o.oc("innerHtml",t.content,o.Bc)}}function g(a,n){if(1&a&&(o.Ub(0,"div",8),o.Ub(1,"mat-tab-group"),o.Jc(2,h,9,3,"mat-tab",9),o.Tb(),o.Tb()),2&a){var s=o.gc();o.Cb(2),o.oc("ngForOf",s.exampleData.files)}}function b(a,n){if(1&a&&o.Pb(0,"div",17),2&a){var s=o.gc();o.oc("innerHtml",s.exampleData.description,o.Bc)}}function f(a,n){}var x=function(){var n=function(){function n(s,t,e){a(this,n),this.snackbar=s,this.copier=t,this.componentFactoryResolver=e,this.showSource=!1}return s(n,[{key:"ngOnInit",value:function(){var a=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(a)}},{key:"ngOnDestroy",value:function(){this.demoComponentRef&&this.demoComponentRef.destroy()}},{key:"toggleSourceView",value:function(){this.showSource=!this.showSource}},{key:"copySource",value:function(a){this.copier.copyText(a.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}]),n}();return n.\u0275fac=function(a){return new(a||n)(o.Ob(l.a),o.Ob(p.a),o.Ob(o.j))},n.\u0275cmp=o.Ib({type:n,selectors:[["example-viewer"]],viewQuery:function(a,n){var s;(1&a&&o.Oc(m,3,o.R),2&a)&&(o.wc(s=o.dc())&&(n.demoRef=s.first))},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(a,n){1&a&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"span"),o.Lc(3),o.Tb(),o.Pb(4,"div",2),o.Ub(5,"button",3),o.cc("click",function(){return n.toggleSourceView()}),o.Ub(6,"mat-icon"),o.Lc(7,"code"),o.Tb(),o.Tb(),o.Tb(),o.Jc(8,g,3,1,"div",4),o.Ub(9,"div",5),o.Jc(10,b,1,1,"div",6),o.Jc(11,f,0,0,"ng-template",null,7,o.Kc),o.Tb(),o.Tb()),2&a&&(o.Cb(3),o.Mc(n.exampleData.title),o.Cb(2),o.oc("matTooltip","View source"),o.Cb(3),o.oc("ngIf",n.showSource),o.Cb(2),o.oc("ngIf",n.exampleData.description))},directives:[r.b,c.a,i.a,d.o,u.b,d.n,u.a],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),n}()},afCr:function(a,n){a.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;loader-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n\n}\n'},b8aJ:function(a,n,s){"use strict";s.r(n),n.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n\n.mat-button-base {\n  margin: 0 .5rem;\n}\n\n.loader-demo {\n  padding: 16px;\n  margin: 16px 0;\n  border: 1px solid;\n}\n"},"iZA+":function(a,n){a.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n\n<span class="hljs-selector-class">.mat-button-base</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> .<span class="hljs-number">5rem</span>;\n}\n\n<span class="hljs-selector-class">.loader-demo</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">16px</span>;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">16px</span> <span class="hljs-number">0</span>;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid;\n}\n'},lMDn:function(a,n){a.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;loader-demo&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mtx-loader</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-loader</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},lmNx:function(n,s,t){"use strict";t.r(s),t.d(s,"LoaderOverviewComponent",function(){return q}),t.d(s,"LoaderApiComponent",function(){return k}),t.d(s,"LoaderModule",function(){return C});var e,o=t("tyNb"),l=t("OlrJ"),p=t("fXoL"),r=t("QibW"),c=t("3Pt+"),i=t("bSwM"),d=t("Dx6R"),u={title:"Configurable loader",component:(e=function n(){a(this,n),this.loading=!0,this.hasBackdrop=!0,this.type="spinner",this.color="primary"},e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p.Ib({type:e,selectors:[["loader-example"]],decls:31,vars:8,consts:[[3,"ngModel","ngModelChange"],["value","spinner"],["value","progressbar"],["value","primary"],["value","accent"],["value","warn"],[3,"loading","type","color","hasBackdrop"],[1,"loader-demo"]],template:function(a,n){1&a&&(p.Ub(0,"h2"),p.Lc(1,"Loader configuration"),p.Tb(),p.Ub(2,"section"),p.Ub(3,"label"),p.Lc(4,"Type:"),p.Tb(),p.Ub(5,"mat-radio-group",0),p.cc("ngModelChange",function(a){return n.type=a}),p.Ub(6,"mat-radio-button",1),p.Lc(7,"spinner"),p.Tb(),p.Ub(8,"mat-radio-button",2),p.Lc(9,"progressbar"),p.Tb(),p.Tb(),p.Tb(),p.Ub(10,"section"),p.Ub(11,"label"),p.Lc(12,"Color:"),p.Tb(),p.Ub(13,"mat-radio-group",0),p.cc("ngModelChange",function(a){return n.color=a}),p.Ub(14,"mat-radio-button",3),p.Lc(15,"primary"),p.Tb(),p.Ub(16,"mat-radio-button",4),p.Lc(17,"accent"),p.Tb(),p.Ub(18,"mat-radio-button",5),p.Lc(19,"warn"),p.Tb(),p.Tb(),p.Tb(),p.Ub(20,"section"),p.Ub(21,"mat-checkbox",0),p.cc("ngModelChange",function(a){return n.hasBackdrop=a}),p.Lc(22,"hasBackdrop"),p.Tb(),p.Tb(),p.Ub(23,"section"),p.Ub(24,"mat-checkbox",0),p.cc("ngModelChange",function(a){return n.loading=a}),p.Lc(25,"loading"),p.Tb(),p.Tb(),p.Ub(26,"h2"),p.Lc(27,"Result"),p.Tb(),p.Ub(28,"mtx-loader",6),p.Ub(29,"div",7),p.Lc(30," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "),p.Tb(),p.Tb()),2&a&&(p.Cb(5),p.oc("ngModel",n.type),p.Cb(8),p.oc("ngModel",n.color),p.Cb(8),p.oc("ngModel",n.hasBackdrop),p.Cb(3),p.oc("ngModel",n.loading),p.Cb(4),p.oc("loading",n.loading)("type",n.type)("color",n.color)("hasBackdrop",n.hasBackdrop))},directives:[r.b,c.k,c.m,r.a,i.a,d.a],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-button-base[_ngcontent-%COMP%]{margin:0 .5rem}.loader-demo[_ngcontent-%COMP%]{padding:16px;margin:16px 0;border:1px solid}"]}),e),files:[{file:"app.component.html",content:t("oPDd"),filecontent:t("88pA")},{file:"app.component.ts",content:t("1Mbh"),filecontent:t("O17O")},{file:"app.component.scss",content:t("iZA+"),filecontent:t("b8aJ")}]},m={title:"Simple loader",component:function(){var n=function n(){a(this,n)};return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=p.Ib({type:n,selectors:[["loader-example"]],decls:2,vars:0,consts:[[1,"loader-demo"]],template:function(a,n){1&a&&(p.Ub(0,"div",0),p.Pb(1,"mtx-loader"),p.Tb())},directives:[d.a],styles:[".loader-demo[_ngcontent-%COMP%]{height:200px;padding:0 16px;margin:16px 0;border:1px solid}"]}),n}(),files:[{file:"app.component.html",content:t("lMDn"),filecontent:t("4MN1")},{file:"app.component.ts",content:t("afCr"),filecontent:t("xQIM")},{file:"app.component.scss",content:t("BPEe"),filecontent:t("Jrgb")}]},h=t("ofXK"),g=t("ZpCV"),b=t("Ejav");function f(a,n){if(1&a&&(p.Sb(0),p.Pb(1,"example-viewer",2),p.Rb()),2&a){var s=n.$implicit;p.Cb(1),p.oc("exampleData",s)}}function x(a,n){if(1&a&&(p.Sb(0),p.Jc(1,f,2,1,"ng-container",1),p.Rb()),2&a){var s=n.ngIf;p.Cb(1),p.oc("ngForOf",s.examples)}}function j(a,n){if(1&a&&(p.Sb(0),p.Pb(1,"doc-viewer",1),p.Rb()),2&a){var s=n.ngIf;p.Cb(1),p.oc("textContent",s.content.default)}}var v,y,w,q=((w=function n(s){a(this,n),this.route=s}).\u0275fac=function(a){return new(a||w)(p.Ob(o.a))},w.\u0275cmp=p.Ib({type:w,selectors:[["app-loader-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(a,n){1&a&&(p.Jc(0,x,2,1,"ng-container",0),p.hc(1,"async")),2&a&&p.oc("ngIf",p.ic(1,1,n.route.data))},directives:[h.o,h.n,g.a],pipes:[h.b],encapsulation:2}),w),k=((y=function n(s){a(this,n),this.route=s}).\u0275fac=function(a){return new(a||y)(p.Ob(o.a))},y.\u0275cmp=p.Ib({type:y,selectors:[["app-loader-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(a,n){1&a&&(p.Jc(0,j,2,1,"ng-container",0),p.hc(1,"async")),2&a&&p.oc("ngIf",p.ic(1,1,n.route.data))},directives:[h.o,b.a],pipes:[h.b],encapsulation:2}),y),C=((v=function n(){a(this,n)}).\u0275fac=function(a){return new(a||v)},v.\u0275mod=p.Mb({type:v}),v.\u0275inj=p.Lb({imports:[[l.c,o.j.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:q,pathMatch:"full",data:{examples:[u,m]}},{path:"api",component:k,pathMatch:"full",data:{content:t("OFUr")}},{path:"**",redirectTo:"overview"}])]]}),v)},oPDd:function(a,n){a.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Loader configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;spinner&quot;</span>&gt;</span>spinner<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;progressbar&quot;</span>&gt;</span>progressbar<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Color:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warn&quot;</span>&gt;</span>warn<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;hasBackdrop&quot;</span>&gt;</span>hasBackdrop<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>loading<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-loader</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span> [<span class="hljs-attr">hasBackdrop</span>]=<span class="hljs-string">&quot;hasBackdrop&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;loader-demo&quot;</span>&gt;</span>\n    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore\n    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam\n    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n    consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed\n    quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam\n    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam\n    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis\n    autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil\n    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-loader</span>&gt;</span>\n'},xQIM:function(a,n,s){"use strict";s.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'loader-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n\n}\n"}}])}();