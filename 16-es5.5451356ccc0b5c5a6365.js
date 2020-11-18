!function(){function s(s,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function a(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1pVs":function(s,a){s.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n\n:host ::ng-deep {\n  .mtx-form-group {\n    display: block;\n\n    <span class="hljs-selector-class">.mtx-form-label</span> {\n      <span class="hljs-attribute">width</span>: <span class="hljs-number">120px</span>;\n    }\n  }\n}\n'},"9W4b":function(s,n,t){"use strict";t.r(n),t.d(n,"FormGroupOverviewComponent",(function(){return y})),t.d(n,"FormGroupApiComponent",(function(){return C})),t.d(n,"FormGroupModule",(function(){return P}));var e=t("sEIs"),l=t("M0ag"),o=t("EM62"),p=t("F1o0"),r=t("nIj0"),c=t("+Tre"),i=t("QzYN"),u=t("29Wa"),d=t("Cd2c"),m=t("R7+U"),h=t("2kYt"),g=t("cMjj"),b=t("gcUQ"),j=t("mFH5");function f(s,a){if(1&s&&(o.Tb(0,"mat-option",18),o.Nc(1),o.Sb()),2&s){var n=a.$implicit;o.nc("value",n.value),o.Bb(1),o.Pc(" ",n.viewValue," ")}}var q,x={title:"Basic",description:"",component:(q=function s(){a(this,s),this.color="primary",this.required=!1,this.disabled=!1,this.showSuffix=!1,this.showPrefix=!1,this.foods=[{value:"steak-0",viewValue:"Steak"},{value:"pizza-1",viewValue:"Pizza"},{value:"tacos-2",viewValue:"Tacos"}]},q.\u0275fac=function(s){return new(s||q)},q.\u0275cmp=o.Hb({type:q,selectors:[["form-group-example"]],decls:47,vars:34,consts:[[3,"ngModel","ngModelChange"],["value","primary"],["value","accent"],["value","warn"],[3,"ngModel","labelPosition","ngModelChange"],["label","Mat Input",3,"showRequiredMarker"],[3,"color"],["matInput","","placeholder","Placeholder",3,"ngModel","required","disabled","ngModelChange"],["label","Mat Select",3,"showRequiredMarker"],["name","food","placeholder","Placeholder",3,"ngModel","required","disabled","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["label","Mtx Select",3,"showRequiredMarker"],["bindLabel","viewValue","bindValue","value","placeholder","Placeholder",3,"ngModel","items","required","disabled","ngModelChange"],["label","Mat Textarea",3,"showRequiredMarker"],["label","Mat Datepicker",3,"showRequiredMarker"],["matInput","","placeholder","Choose a date",3,"ngModel","matDatepicker","required","disabled","ngModelChange"],["matSuffix","",3,"for"],["picker",""],[3,"value"]],template:function(s,a){if(1&s&&(o.Tb(0,"section"),o.Tb(1,"label"),o.Nc(2,"Color:"),o.Sb(),o.Tb(3,"mat-radio-group",0),o.bc("ngModelChange",(function(s){return a.color=s})),o.Tb(4,"mat-radio-button",1),o.Nc(5,"primary"),o.Sb(),o.Tb(6,"mat-radio-button",2),o.Nc(7,"accent"),o.Sb(),o.Tb(8,"mat-radio-button",3),o.Nc(9,"warn"),o.Sb(),o.Sb(),o.Sb(),o.Tb(10,"section"),o.Tb(11,"mat-checkbox",4),o.bc("ngModelChange",(function(s){return a.required=s})),o.Nc(12,"Required"),o.Sb(),o.Sb(),o.Tb(13,"section"),o.Tb(14,"mat-checkbox",4),o.bc("ngModelChange",(function(s){return a.disabled=s})),o.Nc(15,"Disabled"),o.Sb(),o.Sb(),o.Tb(16,"h2"),o.Nc(17,"Result"),o.Sb(),o.Tb(18,"mtx-form-group",5),o.Tb(19,"mat-form-field",6),o.Tb(20,"input",7),o.bc("ngModelChange",(function(s){return a.text=s})),o.Sb(),o.Tb(21,"mat-hint"),o.Nc(22,"Hint"),o.Sb(),o.Sb(),o.Sb(),o.Tb(23,"mtx-form-group",8),o.Tb(24,"mat-form-field",6),o.Tb(25,"mat-select",9),o.bc("ngModelChange",(function(s){return a.selectedFood=s})),o.Lc(26,f,2,2,"mat-option",10),o.Sb(),o.Tb(27,"mat-hint"),o.Nc(28,"Hint"),o.Sb(),o.Sb(),o.Sb(),o.Tb(29,"mtx-form-group",11),o.Tb(30,"mat-form-field",6),o.Tb(31,"mtx-select",12),o.bc("ngModelChange",(function(s){return a.selectedFood=s})),o.Sb(),o.Tb(32,"mat-hint"),o.Nc(33,"Hint"),o.Sb(),o.Sb(),o.Sb(),o.Tb(34,"mtx-form-group",13),o.Tb(35,"mat-form-field",6),o.Tb(36,"textarea",7),o.bc("ngModelChange",(function(s){return a.text=s})),o.Sb(),o.Tb(37,"mat-hint"),o.Nc(38,"Hint"),o.Sb(),o.Sb(),o.Sb(),o.Tb(39,"mtx-form-group",14),o.Tb(40,"mat-form-field",6),o.Tb(41,"input",15),o.bc("ngModelChange",(function(s){return a.date=s})),o.Sb(),o.Ob(42,"mat-datepicker-toggle",16),o.Ob(43,"mat-datepicker",null,17),o.Tb(45,"mat-hint"),o.Nc(46,"Hint"),o.Sb(),o.Sb(),o.Sb()),2&s){var n=o.wc(44);o.Bb(3),o.nc("ngModel",a.color),o.Bb(8),o.nc("ngModel",a.required)("labelPosition","before"),o.Bb(3),o.nc("ngModel",a.disabled)("labelPosition","before"),o.Bb(4),o.nc("showRequiredMarker",a.required),o.Bb(1),o.nc("color",a.color),o.Bb(1),o.nc("ngModel",a.text)("required",a.required)("disabled",a.disabled),o.Bb(3),o.nc("showRequiredMarker",a.required),o.Bb(1),o.nc("color",a.color),o.Bb(1),o.nc("ngModel",a.selectedFood)("required",a.required)("disabled",a.disabled),o.Bb(1),o.nc("ngForOf",a.foods),o.Bb(3),o.nc("showRequiredMarker",a.required),o.Bb(1),o.nc("color",a.color),o.Bb(1),o.nc("ngModel",a.selectedFood)("items",a.foods)("required",a.required)("disabled",a.disabled),o.Bb(3),o.nc("showRequiredMarker",a.required),o.Bb(1),o.nc("color",a.color),o.Bb(1),o.nc("ngModel",a.text)("required",a.required)("disabled",a.disabled),o.Bb(3),o.nc("showRequiredMarker",a.required),o.Bb(1),o.nc("color",a.color),o.Bb(1),o.nc("ngModel",a.date)("matDatepicker",n)("required",a.required)("disabled",a.disabled),o.Bb(1),o.nc("for",n)}},directives:[p.b,r.m,r.p,p.a,c.a,i.a,u.c,d.b,r.d,r.x,u.f,m.a,h.s,g.a,b.b,b.d,u.j,b.a,j.o],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}[_nghost-%COMP%]     .mtx-form-group{display:block}[_nghost-%COMP%]     .mtx-form-group .mtx-form-label{width:120px}"]}),q),files:[{file:"app.component.html",content:t("Vu83"),filecontent:t("xqW9")},{file:"app.component.ts",content:t("VZPB"),filecontent:t("Af+S")},{file:"app.component.scss",content:t("1pVs"),filecontent:t("mH1E")}]},v=t("Pg5x");function w(s,a){if(1&s&&(o.Rb(0),o.Ob(1,"example-viewer",3),o.Qb()),2&s){var n=a.$implicit;o.Bb(1),o.nc("exampleData",n)}}function M(s,a){if(1&s&&(o.Rb(0),o.Lc(1,w,2,1,"ng-container",2),o.Qb()),2&s){var n=a.ngIf;o.Bb(1),o.nc("ngForOf",n.examples)}}var k,S,T,y=((T=function s(n){a(this,s),this.route=n}).\u0275fac=function(s){return new(s||T)(o.Nb(e.a))},T.\u0275cmp=o.Hb({type:T,selectors:[["app-form-group-overview"]],decls:5,vars:3,consts:[["href","https://developer.microsoft.com/en-us/fluentui#/controls/web/textfield","target","_blank"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,a){1&s&&(o.Tb(0,"p"),o.Tb(1,"a",0),o.Nc(2,"Fluent UI"),o.Sb(),o.Sb(),o.Lc(3,M,2,1,"ng-container",1),o.gc(4,"async")),2&s&&(o.Bb(3),o.nc("ngIf",o.hc(4,1,a.route.data)))},directives:[h.t,h.s,v.a],pipes:[h.b],encapsulation:2}),T),C=((S=function s(n){a(this,s),this.route=n}).\u0275fac=function(s){return new(s||S)(o.Nb(e.a))},S.\u0275cmp=o.Hb({type:S,selectors:[["app-form-group-api"]],decls:1,vars:0,template:function(s,a){1&s&&o.Nc(0,"Coming soon\n")},encapsulation:2}),S),P=((k=function s(){a(this,s)}).\u0275mod=o.Lb({type:k}),k.\u0275inj=o.Kb({factory:function(s){return new(s||k)},imports:[[l.c,e.j.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:y,pathMatch:"full",data:{examples:[x]}},{path:"api",component:C,pathMatch:"full"},{path:"**",redirectTo:"overview"}])]]}),k)},"Af+S":function(s,a,n){"use strict";n.r(a),a.default="import { Component } from '@angular/core';\nimport { ThemePalette } from '@angular/material/core';\n\ninterface Food {\n  value: string;\n  viewValue: string;\n}\n\n@Component({\n  selector: 'form-group-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  color: ThemePalette = 'primary';\n  required = false;\n  disabled = false;\n  showSuffix = false;\n  showPrefix = false;\n\n  foods: Food[] = [\n    { value: 'steak-0', viewValue: 'Steak' },\n    { value: 'pizza-1', viewValue: 'Pizza' },\n    { value: 'tacos-2', viewValue: 'Tacos' },\n  ];\n\n  selectedFood: string;\n\n  text: string;\n\n  date: string;\n}\n"},Pg5x:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var l=e("EM62"),o=e("W1gw"),p=e("cTZo"),r=e("PBFl"),c=e("Y2X+"),i=e("bFHC"),u=e("2kYt"),d=e("KZIX"),m=["demo"];function h(s,a){if(1&s){var n=l.Ub();l.Tb(0,"mat-tab",10),l.Tb(1,"div",11),l.Tb(2,"div",12),l.Tb(3,"button",13),l.bc("click",(function(){l.Ac(n);var s=l.wc(8);return l.fc(2).copySource(s)})),l.Tb(4,"mat-icon"),l.Nc(5,"content_copy"),l.Sb(),l.Sb(),l.Sb(),l.Tb(6,"div",14),l.Ob(7,"pre",15,16),l.Sb(),l.Sb(),l.Sb()}if(2&s){var t=a.$implicit;l.nc("label",t.file),l.Bb(3),l.nc("matTooltip","Copy example source"),l.Bb(4),l.nc("innerHtml",t.content,l.Bc)}}function g(s,a){if(1&s&&(l.Tb(0,"div",8),l.Tb(1,"mat-tab-group"),l.Lc(2,h,9,3,"mat-tab",9),l.Sb(),l.Sb()),2&s){var n=l.fc();l.Bb(2),l.nc("ngForOf",n.exampleData.files)}}function b(s,a){if(1&s&&l.Ob(0,"div",17),2&s){var n=l.fc();l.nc("innerHtml",n.exampleData.description,l.Bc)}}function j(s,a){}var f=function(){var n=function(){function n(s,t,e){a(this,n),this.snackbar=s,this.copier=t,this.componentFactoryResolver=e,this.showSource=!1}var t,e,l;return t=n,(e=[{key:"ngOnInit",value:function(){var s=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(s)}},{key:"ngOnDestroy",value:function(){this.demoComponentRef&&this.demoComponentRef.destroy()}},{key:"toggleSourceView",value:function(){this.showSource=!this.showSource}},{key:"copySource",value:function(s){this.copier.copyText(s.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}])&&s(t.prototype,e),l&&s(t,l),n}();return n.\u0275fac=function(s){return new(s||n)(l.Nb(o.a),l.Nb(p.a),l.Nb(l.j))},n.\u0275cmp=l.Hb({type:n,selectors:[["example-viewer"]],viewQuery:function(s,a){var n;1&s&&l.Gc(m,!0,l.R),2&s&&l.vc(n=l.cc())&&(a.demoRef=n.first)},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(s,a){1&s&&(l.Tb(0,"div",0),l.Tb(1,"div",1),l.Tb(2,"span"),l.Nc(3),l.Sb(),l.Ob(4,"div",2),l.Tb(5,"button",3),l.bc("click",(function(){return a.toggleSourceView()})),l.Tb(6,"mat-icon"),l.Nc(7,"code"),l.Sb(),l.Sb(),l.Sb(),l.Lc(8,g,3,1,"div",4),l.Tb(9,"div",5),l.Lc(10,b,1,1,"div",6),l.Lc(11,j,0,0,"ng-template",null,7,l.Mc),l.Sb(),l.Sb()),2&s&&(l.Bb(3),l.Oc(a.exampleData.title),l.Bb(2),l.nc("matTooltip","View source"),l.Bb(3),l.nc("ngIf",a.showSource),l.Bb(2),l.nc("ngIf",a.exampleData.description))},directives:[r.b,c.a,i.a,u.t,d.b,u.s,d.a],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),n}()},VZPB:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { ThemePalette } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/core&#x27;</span>;\n\n<span class="hljs-keyword">interface</span> Food {\n  value: <span class="hljs-built_in">string</span>;\n  viewValue: <span class="hljs-built_in">string</span>;\n}\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;form-group-example&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  styleUrls: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  color: ThemePalette = <span class="hljs-string">&#x27;primary&#x27;</span>;\n  required = <span class="hljs-literal">false</span>;\n  disabled = <span class="hljs-literal">false</span>;\n  showSuffix = <span class="hljs-literal">false</span>;\n  showPrefix = <span class="hljs-literal">false</span>;\n\n  foods: Food[] = [\n    { value: <span class="hljs-string">&#x27;steak-0&#x27;</span>, viewValue: <span class="hljs-string">&#x27;Steak&#x27;</span> },\n    { value: <span class="hljs-string">&#x27;pizza-1&#x27;</span>, viewValue: <span class="hljs-string">&#x27;Pizza&#x27;</span> },\n    { value: <span class="hljs-string">&#x27;tacos-2&#x27;</span>, viewValue: <span class="hljs-string">&#x27;Tacos&#x27;</span> },\n  ];\n\n  selectedFood: <span class="hljs-built_in">string</span>;\n\n  text: <span class="hljs-built_in">string</span>;\n\n  date: <span class="hljs-built_in">string</span>;\n}\n'},Vu83:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Color:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;accent&quot;</span>&gt;</span>accent<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warn&quot;</span>&gt;</span>warn<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Required<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;disabled&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Mat Input&quot;</span> [<span class="hljs-attr">showRequiredMarker</span>]=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n           [<span class="hljs-attr">required</span>]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-hint</span>&gt;</span>Hint<span class="hljs-tag">&lt;/<span class="hljs-name">mat-hint</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-form-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Mat Select&quot;</span> [<span class="hljs-attr">showRequiredMarker</span>]=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-select</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;selectedFood&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;food&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n                [<span class="hljs-attr">required</span>]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let food of foods&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;food.value&quot;</span>&gt;</span>\n        {{food.viewValue}}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">mat-option</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mat-select</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-hint</span>&gt;</span>Hint<span class="hljs-tag">&lt;/<span class="hljs-name">mat-hint</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-form-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Mtx Select&quot;</span> [<span class="hljs-attr">showRequiredMarker</span>]=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-select</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;selectedFood&quot;</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;foods&quot;</span> <span class="hljs-attr">bindLabel</span>=<span class="hljs-string">&quot;viewValue&quot;</span> <span class="hljs-attr">bindValue</span>=<span class="hljs-string">&quot;value&quot;</span>\n                <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span> [<span class="hljs-attr">required</span>]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-select</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-hint</span>&gt;</span>Hint<span class="hljs-tag">&lt;/<span class="hljs-name">mat-hint</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-form-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Mat Textarea&quot;</span> [<span class="hljs-attr">showRequiredMarker</span>]=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Placeholder&quot;</span>\n              [<span class="hljs-attr">required</span>]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-hint</span>&gt;</span>Hint<span class="hljs-tag">&lt;/<span class="hljs-name">mat-hint</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-form-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-form-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Mat Datepicker&quot;</span> [<span class="hljs-attr">showRequiredMarker</span>]=<span class="hljs-string">&quot;required&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;date&quot;</span> [<span class="hljs-attr">matDatepicker</span>]=<span class="hljs-string">&quot;picker&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Choose a date&quot;</span>\n           [<span class="hljs-attr">required</span>]=<span class="hljs-string">&quot;required&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;disabled&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-datepicker-toggle</span> <span class="hljs-attr">matSuffix</span> [<span class="hljs-attr">for</span>]=<span class="hljs-string">&quot;picker&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-datepicker-toggle</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-datepicker</span> #<span class="hljs-attr">picker</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-datepicker</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-hint</span>&gt;</span>Hint<span class="hljs-tag">&lt;/<span class="hljs-name">mat-hint</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-form-group</span>&gt;</span>\n'},mH1E:function(s,a,n){"use strict";n.r(a),a.default=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n\n:host ::ng-deep {\n  .mtx-form-group {\n    display: block;\n\n    .mtx-form-label {\n      width: 120px;\n    }\n  }\n}\n"},xqW9:function(s,a,n){"use strict";n.r(a),a.default='<section>\n  <label>Color:</label>\n  <mat-radio-group [(ngModel)]="color">\n    <mat-radio-button value="primary">primary</mat-radio-button>\n    <mat-radio-button value="accent">accent</mat-radio-button>\n    <mat-radio-button value="warn">warn</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="required" [labelPosition]="\'before\'">Required</mat-checkbox>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="disabled" [labelPosition]="\'before\'">Disabled</mat-checkbox>\n</section>\n\n<h2>Result</h2>\n\n<mtx-form-group label="Mat Input" [showRequiredMarker]="required">\n  <mat-form-field [color]="color">\n    <input matInput [(ngModel)]="text" placeholder="Placeholder"\n           [required]="required" [disabled]="disabled">\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</mtx-form-group>\n\n<mtx-form-group label="Mat Select" [showRequiredMarker]="required">\n  <mat-form-field [color]="color">\n    <mat-select [(ngModel)]="selectedFood" name="food" placeholder="Placeholder"\n                [required]="required" [disabled]="disabled">\n      <mat-option *ngFor="let food of foods" [value]="food.value">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</mtx-form-group>\n\n<mtx-form-group label="Mtx Select" [showRequiredMarker]="required">\n  <mat-form-field [color]="color">\n    <mtx-select [(ngModel)]="selectedFood" [items]="foods" bindLabel="viewValue" bindValue="value"\n                placeholder="Placeholder" [required]="required" [disabled]="disabled">\n    </mtx-select>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</mtx-form-group>\n\n<mtx-form-group label="Mat Textarea" [showRequiredMarker]="required">\n  <mat-form-field [color]="color">\n    <textarea matInput [(ngModel)]="text" placeholder="Placeholder"\n              [required]="required" [disabled]="disabled"></textarea>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</mtx-form-group>\n\n<mtx-form-group label="Mat Datepicker" [showRequiredMarker]="required">\n  <mat-form-field [color]="color">\n    <input matInput [(ngModel)]="date" [matDatepicker]="picker" placeholder="Choose a date"\n           [required]="required" [disabled]="disabled">\n    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</mtx-form-group>\n'}}])}();