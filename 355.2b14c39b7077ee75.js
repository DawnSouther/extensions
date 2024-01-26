(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[355],{55355:(o,e,a)=>{"use strict";a.r(e),a.d(e,{ProgressApiComponent:()=>M,ProgressOverviewComponent:()=>x,routes:()=>D});var r=a(96814),C=a(52240),k=a(81208),m=a(56223),b=a(75986),h=a(64170),v=a(2032),d=a(87466),u=a(92202),y=a(57506),T=a(62442),A=a(22162),s=a(19212);const q=(n,g)=>({"mtx-progress-fill-striped":n,"mtx-progress-fill-animated":g}),P=(n,g,p)=>({"width.%":n,"background-color":g,color:p}),Z=["*"];let j=(()=>{class n{constructor(){this.type="default",this.value=0,this.striped=!1,this.animate=!1}static#s=this.\u0275fac=function(l){return new(l||n)};static#a=this.\u0275cmp=s.Xpm({type:n,selectors:[["mtx-progress"]],hostAttrs:[1,"mtx-progress"],hostVars:4,hostBindings:function(l,t){2&l&&s.Udp("height",t.height)("background-color",t.background)},inputs:{type:"type",value:"value",height:"height",color:"color",foreground:"foreground",background:"background",striped:[s.lbL.HasDecoratorInputTransform,"striped","striped",s.VuI],animate:[s.lbL.HasDecoratorInputTransform,"animate","animate",s.VuI]},exportAs:["mtxProgress"],standalone:!0,features:[s.Xq5,s.jDz],ngContentSelectors:Z,decls:2,vars:12,consts:[["role","progress-fill",3,"ngClass","ngStyle"]],template:function(l,t){1&l&&(s.F$t(),s.TgZ(0,"div",0),s.Hsn(1),s.qZA()),2&l&&(s.Gre("mtx-progress-fill ","mtx-progress-fill-"+t.type,""),s.Q6J("ngClass",s.WLB(5,q,t.striped,t.animate))("ngStyle",s.kEZ(8,P,t.value,t.foreground,t.color)))},dependencies:[r.mk,r.PC],styles:[".mtx-progress{display:flex;height:16px;margin:8px 0;overflow:hidden;font-size:var(--mtx-progress-text-size);border-radius:var(--mtx-progress-container-shape);background-color:var(--mtx-progress-track-color)}.mtx-progress-fill{display:flex;flex-direction:column;justify-content:center;text-align:center;transition:width .6s ease;background-color:var(--mtx-progress-indicator-color);color:var(--mtx-progress-text-color)}.mtx-progress-fill-info{background-color:var(--mtx-progress-info-indicator-color);color:var(--mtx-progress-info-text-color)}.mtx-progress-fill-success{background-color:var(--mtx-progress-success-indicator-color);color:var(--mtx-progress-success-text-color)}.mtx-progress-fill-warning{background-color:var(--mtx-progress-warning-indicator-color);color:var(--mtx-progress-warning-text-color)}.mtx-progress-fill-danger{background-color:var(--mtx-progress-danger-indicator-color);color:var(--mtx-progress-danger-text-color)}.mtx-progress-fill-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:16px 16px}.mtx-progress-fill-animated{animation:mtx-progress-fill-stripes 1s linear infinite}@media (prefers-reduced-motion: reduce){.mtx-progress-fill-animated{animation:none}}@keyframes mtx-progress-fill-stripes{0%{background-position:16px 0}to{background-position:0 0}}\n"],encapsulation:2,changeDetection:0})}return n})();function F(n,g){if(1&n){const p=s.EpF();s.TgZ(0,"mat-checkbox",0),s.NdJ("ngModelChange",function(t){s.CHM(p);const c=s.oxw();return s.KtG(c.animate=t)}),s._uU(1,"Animate"),s.qZA()}if(2&n){const p=s.oxw();s.Q6J("ngModel",p.animate)}}const U={title:"Configurable progress",component:(()=>{class n{constructor(){this.type="info",this.value=50,this.striped=!1,this.animate=!1,this.height=16,this.foreground="",this.background=""}static#s=this.\u0275fac=function(l){return new(l||n)};static#a=this.\u0275cmp=s.Xpm({type:n,selectors:[["progress-example"]],standalone:!0,features:[s.jDz],decls:47,vars:19,consts:[[3,"ngModel","ngModelChange"],["value","info"],["value","success"],["value","warning"],["value","danger"],["min","0","max","100","discrete",""],["matSliderThumb","",3,"ngModel","ngModelChange"],[3,"ngModel"],["min","1","max","16","discrete",""],["matInput","",3,"ngModel","mtxColorpicker","ngModelChange"],["matSuffix","",3,"for"],["cp1",""],["cp2",""],[3,"type","value","striped","animate","height","foreground","background"]],template:function(l,t){if(1&l&&(s.TgZ(0,"h2"),s._uU(1,"Progress configuration"),s.qZA(),s.TgZ(2,"section")(3,"label"),s._uU(4,"Type:"),s.qZA(),s.TgZ(5,"mat-radio-group",0),s.NdJ("ngModelChange",function(i){return t.type=i}),s.TgZ(6,"mat-radio-button",1),s._uU(7,"Info"),s.qZA(),s.TgZ(8,"mat-radio-button",2),s._uU(9,"Success"),s.qZA(),s.TgZ(10,"mat-radio-button",3),s._uU(11,"Warning"),s.qZA(),s.TgZ(12,"mat-radio-button",4),s._uU(13,"Danger"),s.qZA()()(),s.TgZ(14,"section")(15,"label"),s._uU(16,"Progress:"),s.qZA(),s.TgZ(17,"mat-slider",5)(18,"input",6),s.NdJ("ngModelChange",function(i){return t.value=i}),s.qZA()()(),s.TgZ(19,"section")(20,"mat-checkbox",0),s.NdJ("ngModelChange",function(i){return t.striped=i}),s._uU(21,"Striped"),s.qZA(),s.YNc(22,F,2,1,"mat-checkbox",7),s.qZA(),s.TgZ(23,"section")(24,"label"),s._uU(25,"Height:"),s.qZA(),s.TgZ(26,"mat-slider",8)(27,"input",6),s.NdJ("ngModelChange",function(i){return t.height=i}),s.qZA()()(),s.TgZ(28,"section")(29,"mat-form-field")(30,"mat-label"),s._uU(31,"Foreground color"),s.qZA(),s.TgZ(32,"input",9),s.NdJ("ngModelChange",function(i){return t.foreground=i}),s.qZA(),s._UZ(33,"mtx-colorpicker-toggle",10)(34,"mtx-colorpicker",null,11),s.qZA(),s.TgZ(36,"mat-form-field")(37,"mat-label"),s._uU(38,"Background color"),s.qZA(),s.TgZ(39,"input",9),s.NdJ("ngModelChange",function(i){return t.background=i}),s.qZA(),s._UZ(40,"mtx-colorpicker-toggle",10)(41,"mtx-colorpicker",null,12),s.qZA()(),s.TgZ(43,"h2"),s._uU(44,"Result"),s.qZA(),s.TgZ(45,"mtx-progress",13),s._uU(46),s.qZA()),2&l){const c=s.MAs(35),i=s.MAs(42);s.xp6(5),s.Q6J("ngModel",t.type),s.xp6(13),s.Q6J("ngModel",t.value),s.xp6(2),s.Q6J("ngModel",t.striped),s.xp6(2),s.um2(22,t.striped?22:-1),s.xp6(5),s.Q6J("ngModel",t.height),s.xp6(5),s.Q6J("ngModel",t.foreground)("mtxColorpicker",c),s.xp6(),s.Q6J("for",c),s.xp6(6),s.Q6J("ngModel",t.background)("mtxColorpicker",i),s.xp6(),s.Q6J("for",i),s.xp6(5),s.Q6J("type",t.type)("value",t.value)("striped",t.striped)("animate",t.animate)("height",t.height+"px")("foreground",t.foreground)("background",t.background),s.xp6(),s.hij(" ",t.height>=14?t.value+"%":"","\n")}},dependencies:[m.u5,m.Fj,m.JJ,m.On,d.VQ,d.U0,u.pH,u.$5,b.oG,h.KE,h.hX,v.Nt,h.R9,y.YK,T.zA,A.s,j],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{margin-right:1rem}label[_ngcontent-%COMP%]{padding:0 8px}"]})}return n})(),files:[{file:"app.component.html",content:a(21797),filecontent:a(37736)},{file:"app.component.ts",content:a(80125),filecontent:a(95138)},{file:"app.component.scss",content:a(53973),filecontent:a(43235)}]},E={title:"Custom Color",component:(()=>{class n{static#s=this.\u0275fac=function(l){return new(l||n)};static#a=this.\u0275cmp=s.Xpm({type:n,selectors:[["progress-example"]],standalone:!0,features:[s.jDz],decls:6,vars:5,consts:[["foreground","#3949AB",3,"value"],["foreground","#6D4C41",3,"value","striped"],["foreground","#880E4F","background","#FCE4EC",3,"value","striped"]],template:function(l,t){1&l&&(s.TgZ(0,"mtx-progress",0),s._uU(1,"40%"),s.qZA(),s.TgZ(2,"mtx-progress",1),s._uU(3,"70%"),s.qZA(),s.TgZ(4,"mtx-progress",2),s._uU(5,"60%\n"),s.qZA()),2&l&&(s.Q6J("value",40),s.xp6(2),s.Q6J("value",70)("striped",!0),s.xp6(2),s.Q6J("value",60)("striped",!0))},dependencies:[j]})}return n})(),files:[{file:"app.component.html",content:a(1026),filecontent:a(27422)},{file:"app.component.ts",content:a(63270),filecontent:a(84207)},{file:"app.component.scss",content:a(16342),filecontent:a(73805)}]};var f=a(52787);function S(n,g){1&n&&s._UZ(0,"example-viewer",0),2&n&&s.Q6J("exampleData",g.$implicit)}function w(n,g){1&n&&s.SjG(0,S,1,1,"example-viewer",0,s.x6l),2&n&&s.wJu(g.examples)}function I(n,g){1&n&&s._UZ(0,"doc-viewer",0),2&n&&s.Q6J("textContent",g.content.default)}let x=(()=>{class n{constructor(p){this.route=p}static#s=this.\u0275fac=function(l){return new(l||n)(s.Y36(f.gz))};static#a=this.\u0275cmp=s.Xpm({type:n,selectors:[["app-progress-overview"]],standalone:!0,features:[s.jDz],decls:2,vars:3,consts:[[3,"exampleData"]],template:function(l,t){if(1&l&&(s.YNc(0,w,2,0),s.ALo(1,"async")),2&l){let c;s.um2(0,(c=s.lcZ(1,1,t.route.data))?0:-1,c)}},dependencies:[k.B,r.Ov],encapsulation:2})}return n})(),M=(()=>{class n{constructor(p){this.route=p}static#s=this.\u0275fac=function(l){return new(l||n)(s.Y36(f.gz))};static#a=this.\u0275cmp=s.Xpm({type:n,selectors:[["app-progress-api"]],standalone:!0,features:[s.jDz],decls:2,vars:3,consts:[[3,"textContent"]],template:function(l,t){if(1&l&&(s.YNc(0,I,1,1,"doc-viewer",0),s.ALo(1,"async")),2&l){let c;s.um2(0,(c=s.lcZ(1,1,t.route.data))?0:-1,c)}},dependencies:[C.z,r.Ov],encapsulation:2})}return n})();const D=[{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:x,pathMatch:"full",data:{examples:[U,E]}},{path:"api",component:M,pathMatch:"full",data:{content:a(99655)}},{path:"**",redirectTo:"overview"}]},21797:o=>{o.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Progress configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Progress:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">discrete</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matSliderThumb</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;striped&quot;</span>&gt;</span>Striped<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n  @if (striped) {\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;animate&quot;</span>&gt;</span>Animate<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n  }\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Height:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;16&quot;</span> <span class="hljs-attr">discrete</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matSliderThumb</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;height&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Foreground color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;foreground&quot;</span> [<span class="hljs-attr">mtxColorpicker</span>]=<span class="hljs-string">&quot;cp1&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-colorpicker-toggle</span> <span class="hljs-attr">matSuffix</span> [<span class="hljs-attr">for</span>]=<span class="hljs-string">&quot;cp1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-colorpicker-toggle</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-colorpicker</span> #<span class="hljs-attr">cp1</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-colorpicker</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Background color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;background&quot;</span> [<span class="hljs-attr">mtxColorpicker</span>]=<span class="hljs-string">&quot;cp2&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-colorpicker-toggle</span> <span class="hljs-attr">matSuffix</span> [<span class="hljs-attr">for</span>]=<span class="hljs-string">&quot;cp2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-colorpicker-toggle</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-colorpicker</span> #<span class="hljs-attr">cp2</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-colorpicker</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span>\n  [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;value&quot;</span>\n  [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;striped&quot;</span> [<span class="hljs-attr">animate</span>]=<span class="hljs-string">&quot;animate&quot;</span>\n  [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;height + &#x27;px&#x27;&quot;</span>\n  [<span class="hljs-attr">foreground</span>]=<span class="hljs-string">&quot;foreground&quot;</span> [<span class="hljs-attr">background</span>]=<span class="hljs-string">&quot;background&quot;</span>&gt;</span>\n  {{height&gt;=14 ? value + &#x27;%&#x27; : &#x27;&#x27;}}\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},1026:o=>{o.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;40&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#3949AB&quot;</span>&gt;</span>40%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;70&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#6D4C41&quot;</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;60&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#880E4F&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#FCE4EC&quot;</span>&gt;</span>60%\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},53973:o=>{o.exports='<span class="hljs-selector-class">.mat-mdc-form-field</span> {\n  <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">1rem</span>;\n}\n\n<span class="hljs-selector-tag">label</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">8px</span>;\n}\n'},16342:o=>{o.exports='<span class="hljs-comment">/** No CSS for this example */</span>\n'},80125:o=>{o.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormsModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MatCheckbox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/checkbox&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MatFormField</span>, <span class="hljs-title class_">MatLabel</span>, <span class="hljs-title class_">MatSuffix</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/form-field&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MatInput</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/input&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MatRadioButton</span>, <span class="hljs-title class_">MatRadioGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/radio&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MatSlider</span>, <span class="hljs-title class_">MatSliderThumb</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/slider&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxColorpicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/colorpicker/colorpicker&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxColorpickerInput</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/colorpicker/colorpicker-input&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxColorpickerToggle</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/colorpicker/colorpicker-toggle&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxProgress</span>, <span class="hljs-title class_">MtxProgressType</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/progress&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">true</span>,\n  <span class="hljs-attr">imports</span>: [\n    <span class="hljs-title class_">FormsModule</span>,\n    <span class="hljs-title class_">MatRadioGroup</span>,\n    <span class="hljs-title class_">MatRadioButton</span>,\n    <span class="hljs-title class_">MatSlider</span>,\n    <span class="hljs-title class_">MatSliderThumb</span>,\n    <span class="hljs-title class_">MatCheckbox</span>,\n    <span class="hljs-title class_">MatFormField</span>,\n    <span class="hljs-title class_">MatLabel</span>,\n    <span class="hljs-title class_">MatInput</span>,\n    <span class="hljs-title class_">MatSuffix</span>,\n    <span class="hljs-title class_">MtxColorpicker</span>,\n    <span class="hljs-title class_">MtxColorpickerInput</span>,\n    <span class="hljs-title class_">MtxColorpickerToggle</span>,\n    <span class="hljs-title class_">MtxProgress</span>,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  <span class="hljs-attr">type</span>: <span class="hljs-title class_">MtxProgressType</span> = <span class="hljs-string">&#x27;info&#x27;</span>;\n  value = <span class="hljs-number">50</span>;\n  striped = <span class="hljs-literal">false</span>;\n  animate = <span class="hljs-literal">false</span>;\n  height = <span class="hljs-number">16</span>;\n  foreground = <span class="hljs-string">&#x27;&#x27;</span>;\n  background = <span class="hljs-string">&#x27;&#x27;</span>;\n}\n'},63270:o=>{o.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxProgress</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/progress&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n  <span class="hljs-attr">standalone</span>: <span class="hljs-literal">true</span>,\n  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">MtxProgress</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {}\n'},99655:(o,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});const r='<h1 id="progress">Progress</h1>\n<h2 id="api-reference-for-material-extensions-progress">API reference for Material Extensions Progress</h2>\n<p><code>import { MtxProgressModule } from &apos;@ng-matero/extensions/progress&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxprogress"><code>MtxProgress</code></h4>\n<p>Selector: <code>[mtx-progress]</code></p>\n<p>Exported as: <code>mtxProgress</code></p>\n<h5 id="properties">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left"><strong>Name</strong></th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>@Input()</code><br><code>type: MtxProgressType | undefined</code></td>\n<td align="left">The progress&apos;s type. Default is <strong><code>undefined</code></strong>.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>value: number</code></td>\n<td align="left">The value of the progress. Default is <strong><code>0</code></strong>.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>height: number</code></td>\n<td align="left">The height of the progress.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>color: string</code></td>\n<td align="left">The text color of the progress.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>foreground: string</code></td>\n<td align="left">The bar color of the progress.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>background: string</code></td>\n<td align="left">The track color of the progress.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>striped: boolean</code></td>\n<td align="left">Whether to apply the striped class.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>animate: boolean</code></td>\n<td align="left">Whether to apply the animated class.</td>\n</tr>\n</tbody></table>\n<h3 id="type-aliases">Type aliases</h3>\n<h4 id="mtxprogresstype"><code>MtxProgressType</code></h4>\n<pre class="hljs"><span class="hljs-keyword">type</span> <span class="hljs-title class_">MtxProgressType</span> = <span class="hljs-string">&apos;info&apos;</span> | <span class="hljs-string">&apos;success&apos;</span> | <span class="hljs-string">&apos;warning&apos;</span> | <span class="hljs-string">&apos;danger&apos;</span>;\n</pre>\n'},37736:(o,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});const r='<h2>Progress configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="info">Info</mat-radio-button>\n    <mat-radio-button value="success">Success</mat-radio-button>\n    <mat-radio-button value="warning">Warning</mat-radio-button>\n    <mat-radio-button value="danger">Danger</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>Progress:</label>\n  <mat-slider min="0" max="100" discrete>\n    <input matSliderThumb [(ngModel)]="value">\n  </mat-slider>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="striped">Striped</mat-checkbox>\n  @if (striped) {\n    <mat-checkbox [(ngModel)]="animate">Animate</mat-checkbox>\n  }\n</section>\n\n<section>\n  <label>Height:</label>\n  <mat-slider min="1" max="16" discrete>\n    <input matSliderThumb [(ngModel)]="height">\n  </mat-slider>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>Foreground color</mat-label>\n    <input matInput [(ngModel)]="foreground" [mtxColorpicker]="cp1">\n    <mtx-colorpicker-toggle matSuffix [for]="cp1"></mtx-colorpicker-toggle>\n    <mtx-colorpicker #cp1></mtx-colorpicker>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Background color</mat-label>\n    <input matInput [(ngModel)]="background" [mtxColorpicker]="cp2">\n    <mtx-colorpicker-toggle matSuffix [for]="cp2"></mtx-colorpicker-toggle>\n    <mtx-colorpicker #cp2></mtx-colorpicker>\n  </mat-form-field>\n</section>\n\n<h2>Result</h2>\n\n<mtx-progress [type]="type"\n  [value]="value"\n  [striped]="striped" [animate]="animate"\n  [height]="height + \'px\'"\n  [foreground]="foreground" [background]="background">\n  {{height>=14 ? value + \'%\' : \'\'}}\n</mtx-progress>\n'},43235:(o,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});const r=".mat-mdc-form-field {\n  margin-right: 1rem;\n}\n\nlabel {\n  padding: 0 8px;\n}\n"},95138:(o,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});const r="import { Component } from '@angular/core';\nimport { FormsModule } from '@angular/forms';\nimport { MatCheckbox } from '@angular/material/checkbox';\nimport { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';\nimport { MatInput } from '@angular/material/input';\nimport { MatRadioButton, MatRadioGroup } from '@angular/material/radio';\nimport { MatSlider, MatSliderThumb } from '@angular/material/slider';\nimport { MtxColorpicker } from '@ng-matero/extensions/colorpicker/colorpicker';\nimport { MtxColorpickerInput } from '@ng-matero/extensions/colorpicker/colorpicker-input';\nimport { MtxColorpickerToggle } from '@ng-matero/extensions/colorpicker/colorpicker-toggle';\nimport { MtxProgress, MtxProgressType } from '@ng-matero/extensions/progress';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n  standalone: true,\n  imports: [\n    FormsModule,\n    MatRadioGroup,\n    MatRadioButton,\n    MatSlider,\n    MatSliderThumb,\n    MatCheckbox,\n    MatFormField,\n    MatLabel,\n    MatInput,\n    MatSuffix,\n    MtxColorpicker,\n    MtxColorpickerInput,\n    MtxColorpickerToggle,\n    MtxProgress,\n  ],\n})\nexport class AppComponent {\n  type: MtxProgressType = 'info';\n  value = 50;\n  striped = false;\n  animate = false;\n  height = 16;\n  foreground = '';\n  background = '';\n}\n"},27422:(o,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});const r='<mtx-progress [value]="40" foreground="#3949AB">40%</mtx-progress>\n<mtx-progress [value]="70" [striped]="true" foreground="#6D4C41">70%</mtx-progress>\n<mtx-progress [value]="60" [striped]="true" foreground="#880E4F" background="#FCE4EC">60%\n</mtx-progress>\n'},73805:(o,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});const r="/** No CSS for this example */\n"},84207:(o,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});const r="import { Component } from '@angular/core';\nimport { MtxProgress } from '@ng-matero/extensions/progress';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n  standalone: true,\n  imports: [MtxProgress],\n})\nexport class AppComponent {}\n"}}]);