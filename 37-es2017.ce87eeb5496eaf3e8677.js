(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[37],{83037:function(n,s,a){"use strict";a.r(s),a.d(s,{ButtonApiComponent:function(){return q},ButtonModule:function(){return w},ButtonOverviewComponent:function(){return v}});var t=a(63423),o=a(74968),l=a(37716),e=a(82613),p=a(3679),c=a(7539),r=a(51095),i=a(4885);let u=(()=>{class n{constructor(n,s,a,t){this.matButton=n,this.componentFactoryResolver=s,this.viewContainerRef=a,this.renderer=t,this.spinnerFactory=this.componentFactoryResolver.resolveComponentFactory(i.Ou)}ngOnChanges(n){!n.loading||(n.loading.currentValue?(this.matButton._elementRef.nativeElement.classList.add("mat-button-loading"),this.matButton.disabled=!0,this.createSpinner()):n.loading.firstChange||(this.matButton._elementRef.nativeElement.classList.remove("mat-button-loading"),this.matButton.disabled=this.disabled,this.destroySpinner()))}createSpinner(){this.spinner||(this.spinner=this.viewContainerRef.createComponent(this.spinnerFactory),this.spinner.instance.color=this.color,this.spinner.instance.diameter=20,this.spinner.instance.mode="indeterminate",this.renderer.appendChild(this.matButton._elementRef.nativeElement,this.spinner.instance._elementRef.nativeElement))}destroySpinner(){this.spinner&&(this.spinner.destroy(),this.spinner=null)}}return n.\u0275fac=function(s){return new(s||n)(l.Y36(r.lW),l.Y36(l._Vd),l.Y36(l.s_b),l.Y36(l.Qsj))},n.\u0275dir=l.lG2({type:n,selectors:[["button","mat-button","","loading",""],["button","mat-raised-button","","loading",""],["button","mat-stroked-button","","loading",""],["button","mat-flat-button","","loading",""],["button","mat-icon-button","","loading",""],["button","mat-fab","","loading",""],["button","mat-mini-fab","","loading",""]],inputs:{loading:"loading",disabled:"disabled",color:"color"},features:[l.TTD]}),n})();var g=a(76627);const m={title:"Configurable loading button",component:(()=>{class n{constructor(){this.color="primary",this.loading=!0}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["button-example"]],decls:36,vars:17,consts:[[3,"ngModel","ngModelChange"],["value","basic"],["value","primary"],["value","accent"],["value","warn"],[3,"ngModel","labelPosition","ngModelChange"],["mat-button","",3,"loading","color"],["mat-raised-button","",3,"loading","color"],["mat-stroked-button","",3,"loading","color"],["mat-flat-button","",3,"loading","color"],["mat-icon-button","",3,"loading","color"],["mat-fab","",3,"loading","color"],["mat-mini-fab","",3,"loading","color"]],template:function(n,s){1&n&&(l.TgZ(0,"h2"),l._uU(1,"Loading button configuration"),l.qZA(),l.TgZ(2,"section"),l.TgZ(3,"label"),l._uU(4,"Color:"),l.qZA(),l.TgZ(5,"mat-radio-group",0),l.NdJ("ngModelChange",function(n){return s.color=n}),l.TgZ(6,"mat-radio-button",1),l._uU(7,"Basic"),l.qZA(),l.TgZ(8,"mat-radio-button",2),l._uU(9,"Primary"),l.qZA(),l.TgZ(10,"mat-radio-button",3),l._uU(11,"Accent"),l.qZA(),l.TgZ(12,"mat-radio-button",4),l._uU(13,"Warn"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(14,"section"),l.TgZ(15,"mat-checkbox",5),l.NdJ("ngModelChange",function(n){return s.loading=n}),l._uU(16,"Loading"),l.qZA(),l.qZA(),l.TgZ(17,"h2"),l._uU(18,"Result"),l.qZA(),l.TgZ(19,"button",6),l._uU(20,"Button"),l.qZA(),l.TgZ(21,"button",7),l._uU(22,"Button"),l.qZA(),l.TgZ(23,"button",8),l._uU(24,"Button"),l.qZA(),l.TgZ(25,"button",9),l._uU(26,"Button"),l.qZA(),l.TgZ(27,"button",10),l.TgZ(28,"mat-icon"),l._uU(29,"more_vert"),l.qZA(),l.qZA(),l.TgZ(30,"button",11),l.TgZ(31,"mat-icon"),l._uU(32,"delete"),l.qZA(),l.qZA(),l.TgZ(33,"button",12),l.TgZ(34,"mat-icon"),l._uU(35,"menu"),l.qZA(),l.qZA()),2&n&&(l.xp6(5),l.Q6J("ngModel",s.color),l.xp6(10),l.Q6J("ngModel",s.loading)("labelPosition","before"),l.xp6(4),l.Q6J("loading",s.loading)("color",s.color),l.xp6(2),l.Q6J("loading",s.loading)("color",s.color),l.xp6(2),l.Q6J("loading",s.loading)("color",s.color),l.xp6(2),l.Q6J("loading",s.loading)("color",s.color),l.xp6(2),l.Q6J("loading",s.loading)("color",s.color),l.xp6(3),l.Q6J("loading",s.loading)("color",s.color),l.xp6(3),l.Q6J("loading",s.loading)("color",s.color))},directives:[e.VQ,p.JJ,p.On,e.U0,c.oG,r.lW,u,g.Hw],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-button-base[_ngcontent-%COMP%]{margin:0 .5rem}"]}),n})(),files:[{file:"app.component.html",content:a(80232),filecontent:a(31261)},{file:"app.component.ts",content:a(98961),filecontent:a(40406)},{file:"app.component.scss",content:a(15935),filecontent:a(79735)}]};var d=a(38583),h=a(22281),b=a(29241);function j(n,s){if(1&n&&(l.ynx(0),l._UZ(1,"example-viewer",2),l.BQk()),2&n){const n=s.$implicit;l.xp6(1),l.Q6J("exampleData",n)}}function f(n,s){if(1&n&&(l.ynx(0),l.YNc(1,j,2,1,"ng-container",1),l.BQk()),2&n){const n=s.ngIf;l.xp6(1),l.Q6J("ngForOf",n.examples)}}function x(n,s){if(1&n&&(l.ynx(0),l._UZ(1,"doc-viewer",1),l.BQk()),2&n){const n=s.ngIf;l.xp6(1),l.Q6J("textContent",n.content.default)}}let v=(()=>{class n{constructor(n){this.route=n}}return n.\u0275fac=function(s){return new(s||n)(l.Y36(t.gz))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-button-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(n,s){1&n&&(l.YNc(0,f,2,1,"ng-container",0),l.ALo(1,"async")),2&n&&l.Q6J("ngIf",l.lcZ(1,1,s.route.data))},directives:[d.O5,d.sg,h.B],pipes:[d.Ov],encapsulation:2}),n})(),q=(()=>{class n{constructor(n){this.route=n}}return n.\u0275fac=function(s){return new(s||n)(l.Y36(t.gz))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-button-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(n,s){1&n&&(l.YNc(0,x,2,1,"ng-container",0),l.ALo(1,"async")),2&n&&l.Q6J("ngIf",l.lcZ(1,1,s.route.data))},directives:[d.O5,b.z],pipes:[d.Ov],encapsulation:2}),n})(),w=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[o.m8,t.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:v,pathMatch:"full",data:{examples:[m]}},{path:"api",component:q,pathMatch:"full",data:{content:a(47256)}},{path:"**",redirectTo:"overview"}])]]}),n})()},29241:function(n,s,a){"use strict";a.d(s,{z:function(){return o}});var t=a(37716);let o=(()=>{class n{constructor(){this.textContent=""}ngOnDestroy(){}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(n,s){1&n&&t._UZ(0,"div",0),2&n&&t.Q6J("innerHTML",s.textContent,t.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px #0000003d,0 0 2px #0000001f}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.025);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;padding:20px;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2}),n})()},22281:function(n,s,a){"use strict";a.d(s,{B:function(){return b}});var t=a(37716),o=a(77001),l=a(27163),e=a(51095),p=a(11436),c=a(76627),r=a(38583),i=a(65939);const u=["demo"];function g(n,s){if(1&n){const n=t.EpF();t.TgZ(0,"mat-tab",10),t.TgZ(1,"div",11),t.TgZ(2,"div",12),t.TgZ(3,"button",13),t.NdJ("click",function(){t.CHM(n);const s=t.MAs(8);return t.oxw(2).copySource(s)}),t.TgZ(4,"mat-icon"),t._uU(5,"content_copy"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",14),t._UZ(7,"pre",15,16),t.qZA(),t.qZA(),t.qZA()}if(2&n){const n=s.$implicit;t.Q6J("label",n.file),t.xp6(3),t.Q6J("matTooltip","Copy example source"),t.xp6(4),t.Q6J("innerHtml",n.content,t.oJD)}}function m(n,s){if(1&n&&(t.TgZ(0,"div",8),t.TgZ(1,"mat-tab-group"),t.YNc(2,g,9,3,"mat-tab",9),t.qZA(),t.qZA()),2&n){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.exampleData.files)}}function d(n,s){if(1&n&&t._UZ(0,"div",17),2&n){const n=t.oxw();t.Q6J("innerHtml",n.exampleData.description,t.oJD)}}function h(n,s){}let b=(()=>{class n{constructor(n,s,a){this.snackbar=n,this.copier=s,this.componentFactoryResolver=a,this.showSource=!1}ngOnInit(){const n=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(n)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(n){this.copier.copyText(n.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return n.\u0275fac=function(s){return new(s||n)(t.Y36(o.ux),t.Y36(l.u),t.Y36(t._Vd))},n.\u0275cmp=t.Xpm({type:n,selectors:[["example-viewer"]],viewQuery:function(n,s){if(1&n&&t.Gf(u,7,t.s_b),2&n){let n;t.iGM(n=t.CRH())&&(s.demoRef=n.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"span"),t._uU(3),t.qZA(),t._UZ(4,"div",2),t.TgZ(5,"button",3),t.NdJ("click",function(){return s.toggleSourceView()}),t.TgZ(6,"mat-icon"),t._uU(7,"code"),t.qZA(),t.qZA(),t.qZA(),t.YNc(8,m,3,1,"div",4),t.TgZ(9,"div",5),t.YNc(10,d,1,1,"div",6),t.YNc(11,h,0,0,"ng-template",null,7,t.W1O),t.qZA(),t.qZA()),2&n&&(t.xp6(3),t.Oqu(s.exampleData.title),t.xp6(2),t.Q6J("matTooltip","View source"),t.xp6(3),t.Q6J("ngIf",s.showSource),t.xp6(2),t.Q6J("ngIf",s.exampleData.description))},directives:[e.lW,p.gM,c.Hw,r.O5,i.SP,r.sg,i.uX],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),n})()},80232:function(n){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Loading button configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Color:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;basic&quot;</span>&gt;</span>Basic<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Primary<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>Accent<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warn&quot;</span>&gt;</span>Warn<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Loading<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-stroked-button</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-flat-button</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-icon-button</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>more_vert<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-fab</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>delete<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-mini-fab</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading&quot;</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>menu<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n'},98961:function(n){n.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ThemePalette</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;button-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  <span class="hljs-attr">color</span>: <span class="hljs-title class_">ThemePalette</span> = <span class="hljs-string">&#x27;primary&#x27;</span>;\n  loading = <span class="hljs-literal">true</span>;\n}\n'},47256:function(n,s,a){"use strict";a.r(s),s.default='<h1 id="button">Button</h1>\n<p>It has just add a <code>loading</code> property for material button.</p>\n'},31261:function(n,s,a){"use strict";a.r(s),s.default='<h2>Loading button configuration</h2>\n\n<section>\n  <label>Color:</label>\n  <mat-radio-group [(ngModel)]="color">\n    <mat-radio-button value="basic">Basic</mat-radio-button>\n    <mat-radio-button value="primary">Primary</mat-radio-button>\n    <mat-radio-button value="accent">Accent</mat-radio-button>\n    <mat-radio-button value="warn">Warn</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="loading" [labelPosition]="\'before\'">Loading</mat-checkbox>\n</section>\n\n<h2>Result</h2>\n\n<button mat-button [loading]="loading" [color]="color">Button</button>\n<button mat-raised-button [loading]="loading" [color]="color">Button</button>\n<button mat-stroked-button [loading]="loading" [color]="color">Button</button>\n<button mat-flat-button [loading]="loading" [color]="color">Button</button>\n<button mat-icon-button [loading]="loading" [color]="color">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<button mat-fab [loading]="loading" [color]="color">\n  <mat-icon>delete</mat-icon>\n</button>\n<button mat-mini-fab [loading]="loading" [color]="color">\n  <mat-icon>menu</mat-icon>\n</button>\n'},40406:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { ThemePalette } from '@angular/material/core';\n\n@Component({\n  selector: 'button-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  color: ThemePalette = 'primary';\n  loading = true;\n}\n"},15935:function(n){"use strict";n.exports='module.exports = "<span class=\\"hljs-selector-class\\">.mat-radio-button</span> {\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">1em</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-checkbox</span> {\\n  <span class=\\"hljs-attribute\\">display</span>: inline-block;\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">0</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-button-base</span> {\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">0</span> .<span class=\\"hljs-number\\">5rem</span>;\\n}\\n"'},79735:function(n){"use strict";n.exports='export default ".mat-radio-button {\\n  margin: 1em;\\n}\\n\\n.mat-checkbox {\\n  display: inline-block;\\n  margin: 1rem 1rem 1rem 0;\\n}\\n\\n.mat-button-base {\\n  margin: 0 .5rem;\\n}\\n";'}}]);