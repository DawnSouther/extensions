(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[645],{64645:function(s,n,a){"use strict";a.r(n),a.d(n,{ProgressApiComponent:function(){return J},ProgressModule:function(){return P},ProgressOverviewComponent:function(){return w}});var t=a(63423),l=a(74968),e=a(37716),p=a(82613),o=a(3679),r=a(54436),c=a(7539),i=a(38583),g=a(98295),u=a(90156);const h=function(s,n){return{"mtx-progress-fill-striped":s,"mtx-progress-fill-animated":n}},m=function(s,n){return{"width.%":s,"background-color":n}},d=["*"];let j=(()=>{class s{constructor(){this.type="info",this.value=0}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["mtx-progress"]],hostAttrs:[1,"mtx-progress"],hostVars:4,hostBindings:function(s,n){2&s&&e.Udp("height",n.height)("background-color",n.background)},inputs:{type:"type",value:"value",height:"height",color:"color",foreground:"foreground",background:"background",striped:"striped",animate:"animate"},exportAs:["mtxProgress"],ngContentSelectors:d,decls:2,vars:10,consts:[["role","progress-fill",3,"ngClass","ngStyle"]],template:function(s,n){1&s&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA()),2&s&&(e.Tol("mtx-progress-fill mtx-progress-fill-"+n.type),e.Q6J("ngClass",e.WLB(4,h,n.striped,n.animate))("ngStyle",e.WLB(7,m,n.value,n.foreground)))},directives:[i.mk,i.PC],styles:[".mtx-progress{display:flex;height:1rem;margin:8px 0;overflow:hidden;font-size:.75rem;border-radius:.25rem}.mtx-progress-fill{display:flex;flex-direction:column;justify-content:center;text-align:center;transition:width .6s ease}.mtx-progress-fill-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.mtx-progress-fill-animated{-webkit-animation:mtx-progress-fill-stripes 1s linear infinite;animation:mtx-progress-fill-stripes 1s linear infinite}@media (prefers-reduced-motion: reduce){.mtx-progress-fill-animated{-webkit-animation:none;animation:none}}@-webkit-keyframes mtx-progress-fill-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes mtx-progress-fill-stripes{0%{background-position:1rem 0}to{background-position:0 0}}\n"],encapsulation:2,changeDetection:0}),s})();var f=a(51095),x=a(76627);function b(s,n){if(1&s){const s=e.EpF();e.TgZ(0,"mat-checkbox",6),e.NdJ("ngModelChange",function(n){return e.CHM(s),e.oxw().animate=n}),e._uU(1,"Animate "),e.qZA()}if(2&s){const s=e.oxw();e.Q6J("ngModel",s.animate)("labelPosition","before")}}function q(s,n){if(1&s){const s=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){return e.CHM(s),e.oxw().foreground=""}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA(),e.qZA()}}function k(s,n){if(1&s){const s=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){return e.CHM(s),e.oxw().background=""}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA(),e.qZA()}}const v={title:"Configurable progress",component:(()=>{class s{constructor(){this.type="info",this.value=50,this.striped=!1,this.animate=!1,this.height=16,this.foreground="",this.background=""}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["progress-example"]],decls:41,vars:18,consts:[[3,"ngModel","ngModelChange"],["value","info"],["value","success"],["value","warning"],["value","danger"],["min","0","max","100","thumbLabel","",3,"ngModel","ngModelChange"],[3,"ngModel","labelPosition","ngModelChange"],[3,"ngModel","labelPosition","ngModelChange",4,"ngIf"],["min","1","max","16","thumbLabel","",3,"ngModel","ngModelChange"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[3,"type","value","striped","animate","height","foreground","background"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(s,n){1&s&&(e.TgZ(0,"h2"),e._uU(1,"Progress configuration"),e.qZA(),e.TgZ(2,"section"),e.TgZ(3,"label"),e._uU(4,"Type:"),e.qZA(),e.TgZ(5,"mat-radio-group",0),e.NdJ("ngModelChange",function(s){return n.type=s}),e.TgZ(6,"mat-radio-button",1),e._uU(7,"Info"),e.qZA(),e.TgZ(8,"mat-radio-button",2),e._uU(9,"Success"),e.qZA(),e.TgZ(10,"mat-radio-button",3),e._uU(11,"Warning"),e.qZA(),e.TgZ(12,"mat-radio-button",4),e._uU(13,"Danger"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"section"),e.TgZ(15,"label"),e._uU(16,"Progress:"),e.qZA(),e.TgZ(17,"mat-slider",5),e.NdJ("ngModelChange",function(s){return n.value=s}),e.qZA(),e.qZA(),e.TgZ(18,"section"),e.TgZ(19,"mat-checkbox",6),e.NdJ("ngModelChange",function(s){return n.striped=s}),e._uU(20,"Striped"),e.qZA(),e.YNc(21,b,2,2,"mat-checkbox",7),e.qZA(),e.TgZ(22,"section"),e.TgZ(23,"label"),e._uU(24,"Height:"),e.qZA(),e.TgZ(25,"mat-slider",8),e.NdJ("ngModelChange",function(s){return n.height=s}),e.qZA(),e.qZA(),e.TgZ(26,"section"),e.TgZ(27,"mat-form-field"),e.TgZ(28,"mat-label"),e._uU(29,"Foreground color"),e.qZA(),e.TgZ(30,"mtx-color-picker",0),e.NdJ("ngModelChange",function(s){return n.foreground=s}),e.qZA(),e.YNc(31,q,3,0,"button",9),e.qZA(),e.TgZ(32,"mat-form-field"),e.TgZ(33,"mat-label"),e._uU(34,"Background color"),e.qZA(),e.TgZ(35,"mtx-color-picker",0),e.NdJ("ngModelChange",function(s){return n.background=s}),e.qZA(),e.YNc(36,k,3,0,"button",9),e.qZA(),e.qZA(),e.TgZ(37,"h2"),e._uU(38,"Result"),e.qZA(),e.TgZ(39,"mtx-progress",10),e._uU(40),e.qZA()),2&s&&(e.xp6(5),e.Q6J("ngModel",n.type),e.xp6(12),e.Q6J("ngModel",n.value),e.xp6(2),e.Q6J("ngModel",n.striped)("labelPosition","before"),e.xp6(2),e.Q6J("ngIf",n.striped),e.xp6(4),e.Q6J("ngModel",n.height),e.xp6(5),e.Q6J("ngModel",n.foreground),e.xp6(1),e.Q6J("ngIf",n.foreground),e.xp6(4),e.Q6J("ngModel",n.background),e.xp6(1),e.Q6J("ngIf",n.background),e.xp6(3),e.Q6J("type",n.type)("value",n.value)("striped",n.striped)("animate",n.animate)("height",n.height+"px")("foreground",n.foreground)("background",n.background),e.xp6(1),e.hij(" ",n.height>=14?n.value+"%":"","\n"))},directives:[p.VQ,o.JJ,o.On,p.U0,r.pH,c.oG,i.O5,g.KE,g.hX,u.J,j,f.lW,g.R9,x.Hw],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-form-field[_ngcontent-%COMP%]{margin-right:1rem}"]}),s})(),files:[{file:"app.component.html",content:a(21797),filecontent:a(37736)},{file:"app.component.ts",content:a(80125),filecontent:a(95138)},{file:"app.component.scss",content:a(27341),filecontent:a(76692)}]},Z={title:"Custom Color",component:(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["progress-example"]],decls:6,vars:5,consts:[["foreground","#3949AB",3,"value"],["foreground","#6D4C41",3,"value","striped"],["foreground","#880E4F","background","#FCE4EC",3,"value","striped"]],template:function(s,n){1&s&&(e.TgZ(0,"mtx-progress",0),e._uU(1,"40%"),e.qZA(),e.TgZ(2,"mtx-progress",1),e._uU(3,"70%"),e.qZA(),e.TgZ(4,"mtx-progress",2),e._uU(5,"60%\n"),e.qZA()),2&s&&(e.Q6J("value",40),e.xp6(2),e.Q6J("value",70)("striped",!0),e.xp6(2),e.Q6J("value",60)("striped",!0))},directives:[j],styles:[""]}),s})(),files:[{file:"app.component.html",content:a(1026),filecontent:a(27422)},{file:"app.component.ts",content:a(63270),filecontent:a(84207)},{file:"app.component.scss",content:a(57226),filecontent:a(94446)}]};var y=a(22281),C=a(29241);function M(s,n){if(1&s&&(e.ynx(0),e._UZ(1,"example-viewer",2),e.BQk()),2&s){const s=n.$implicit;e.xp6(1),e.Q6J("exampleData",s)}}function A(s,n){if(1&s&&(e.ynx(0),e.YNc(1,M,2,1,"ng-container",1),e.BQk()),2&s){const s=n.ngIf;e.xp6(1),e.Q6J("ngForOf",s.examples)}}function T(s,n){if(1&s&&(e.ynx(0),e._UZ(1,"doc-viewer",1),e.BQk()),2&s){const s=n.ngIf;e.xp6(1),e.Q6J("textContent",s.content.default)}}let w=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(t.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-progress-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,n){1&s&&(e.YNc(0,A,2,1,"ng-container",0),e.ALo(1,"async")),2&s&&e.Q6J("ngIf",e.lcZ(1,1,n.route.data))},directives:[i.O5,i.sg,y.B],pipes:[i.Ov],encapsulation:2}),s})(),J=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(t.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-progress-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(s,n){1&s&&(e.YNc(0,T,2,1,"ng-container",0),e.ALo(1,"async")),2&s&&e.Q6J("ngIf",e.lcZ(1,1,n.route.data))},directives:[i.O5,C.z],pipes:[i.Ov],encapsulation:2}),s})(),P=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[l.m8,t.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:w,pathMatch:"full",data:{examples:[v,Z]}},{path:"api",component:J,pathMatch:"full",data:{content:a(32615)}},{path:"**",redirectTo:"overview"}])]]}),s})()},21797:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Progress configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Progress:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;value&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;striped&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Striped<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;striped&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;animate&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Animate\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Height:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;16&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;height&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Foreground color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-color-picker</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;foreground&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-color-picker</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;foreground&quot;</span> <span class="hljs-attr">matSuffix</span> <span class="hljs-attr">mat-icon-button</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Clear&quot;</span>\n            (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;foreground=&#x27;&#x27;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>close<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Background color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-color-picker</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;background&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-color-picker</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;background&quot;</span> <span class="hljs-attr">matSuffix</span> <span class="hljs-attr">mat-icon-button</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Clear&quot;</span>\n            (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;background=&#x27;&#x27;&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">mat-icon</span>&gt;</span>close<span class="hljs-tag">&lt;/<span class="hljs-name">mat-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span>\n              [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;value&quot;</span>\n              [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;striped&quot;</span> [<span class="hljs-attr">animate</span>]=<span class="hljs-string">&quot;animate&quot;</span>\n              [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;height + &#x27;px&#x27;&quot;</span>\n              [<span class="hljs-attr">foreground</span>]=<span class="hljs-string">&quot;foreground&quot;</span> [<span class="hljs-attr">background</span>]=<span class="hljs-string">&quot;background&quot;</span>&gt;</span>\n  {{height&gt;=14 ? value + &#x27;%&#x27; : &#x27;&#x27;}}\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},1026:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;40&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#3949AB&quot;</span>&gt;</span>40%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;70&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#6D4C41&quot;</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;60&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#880E4F&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#FCE4EC&quot;</span>&gt;</span>60%\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},80125:function(s){s.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxProgressType</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  <span class="hljs-attr">type</span>: <span class="hljs-title class_">MtxProgressType</span> = <span class="hljs-string">&#x27;info&#x27;</span>;\n  value = <span class="hljs-number">50</span>;\n  striped = <span class="hljs-literal">false</span>;\n  animate = <span class="hljs-literal">false</span>;\n  height = <span class="hljs-number">16</span>;\n  foreground = <span class="hljs-string">&#x27;&#x27;</span>;\n  background = <span class="hljs-string">&#x27;&#x27;</span>;\n}\n'},63270:function(s){s.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {}\n'},32615:function(s,n,a){"use strict";a.r(n),n.default='<h1 id="progress">Progress</h1>\n<h2 id="api-reference-for-material-extensions-progress">API reference for Material Extensions Progress</h2>\n<p><code>import { MtxProgressModule } from &apos;@ng-matero/extensions/progress&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxprogress"><code>MtxProgress</code></h4>\n<p>Selector: <code>[mtx-progress]</code></p>\n<p>Exported as: <code>mtxProgress</code></p>\n<h5 id="properties">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left"><strong>Name</strong></th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">@Input() <code>type: &apos;default&apos; | &apos;info&apos; | &apos;success&apos; | &apos;warning&apos; | &apos;danger&apos;</code></td>\n<td align="left">The progress types. Defaulted to <strong><code>&apos;info&apos;</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>value: number</code></td>\n<td align="left">The progress value. Defaulted to <strong><code>0</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>height: number</code></td>\n<td align="left">The progress height.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>color: string</code></td>\n<td align="left">The progress text color.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>foreground: string</code></td>\n<td align="left">The progress bar color.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>background: string</code></td>\n<td align="left">The progress track color.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>striped: boolean</code></td>\n<td align="left">Whether applies striped class.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>animate: boolean</code></td>\n<td align="left">Whether applies animated class.</td>\n</tr>\n</tbody></table>\n'},37736:function(s,n,a){"use strict";a.r(n),n.default='<h2>Progress configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="info">Info</mat-radio-button>\n    <mat-radio-button value="success">Success</mat-radio-button>\n    <mat-radio-button value="warning">Warning</mat-radio-button>\n    <mat-radio-button value="danger">Danger</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>Progress:</label>\n  <mat-slider min="0" max="100" thumbLabel [(ngModel)]="value"></mat-slider>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="striped" [labelPosition]="\'before\'">Striped</mat-checkbox>\n  <mat-checkbox *ngIf="striped" [(ngModel)]="animate" [labelPosition]="\'before\'">Animate\n  </mat-checkbox>\n</section>\n\n<section>\n  <label>Height:</label>\n  <mat-slider min="1" max="16" thumbLabel [(ngModel)]="height"></mat-slider>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>Foreground color</mat-label>\n    <mtx-color-picker [(ngModel)]="foreground">\n    </mtx-color-picker>\n    <button mat-button *ngIf="foreground" matSuffix mat-icon-button aria-label="Clear"\n            (click)="foreground=\'\'">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Background color</mat-label>\n    <mtx-color-picker [(ngModel)]="background">\n    </mtx-color-picker>\n    <button mat-button *ngIf="background" matSuffix mat-icon-button aria-label="Clear"\n            (click)="background=\'\'">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</section>\n\n<h2>Result</h2>\n\n<mtx-progress [type]="type"\n              [value]="value"\n              [striped]="striped" [animate]="animate"\n              [height]="height + \'px\'"\n              [foreground]="foreground" [background]="background">\n  {{height>=14 ? value + \'%\' : \'\'}}\n</mtx-progress>\n'},95138:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { MtxProgressType } from '@ng-matero/extensions';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  type: MtxProgressType = 'info';\n  value = 50;\n  striped = false;\n  animate = false;\n  height = 16;\n  foreground = '';\n  background = '';\n}\n"},27422:function(s,n,a){"use strict";a.r(n),n.default='<mtx-progress [value]="40" foreground="#3949AB">40%</mtx-progress>\n<mtx-progress [value]="70" [striped]="true" foreground="#6D4C41">70%</mtx-progress>\n<mtx-progress [value]="60" [striped]="true" foreground="#880E4F" background="#FCE4EC">60%\n</mtx-progress>\n'},84207:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {}\n"},27341:function(s){"use strict";s.exports='module.exports = "<span class=\\"hljs-selector-class\\">.mat-radio-button</span> {\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">1em</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-checkbox</span> {\\n  <span class=\\"hljs-attribute\\">display</span>: inline-block;\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">0</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-form-field</span> {\\n  <span class=\\"hljs-attribute\\">margin-right</span>: <span class=\\"hljs-number\\">1rem</span>;\\n}\\n"'},57226:function(s){"use strict";s.exports='module.exports = "<span class=\\"hljs-comment\\">/** No CSS for this example */</span>\\n"'},76692:function(s){"use strict";s.exports='export default ".mat-radio-button {\\n  margin: 1em;\\n}\\n\\n.mat-checkbox {\\n  display: inline-block;\\n  margin: 1rem 1rem 1rem 0;\\n}\\n\\n.mat-form-field {\\n  margin-right: 1rem;\\n}\\n";'},94446:function(s){"use strict";s.exports='export default "/** No CSS for this example */\\n";'}}]);