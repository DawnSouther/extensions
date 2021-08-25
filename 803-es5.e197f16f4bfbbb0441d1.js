!function(){function s(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function n(s,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function a(s,a,t){return a&&n(s.prototype,a),t&&n(s,t),s}(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[803],{14803:function(n,t,l){"use strict";l.r(t),l.d(t,{DialogApiComponent:function(){return N},DialogModule:function(){return Y},DialogOverviewComponent:function(){return U},TranslateHttpLoaderFactory:function(){return I}});var o,e=l(54655),p=l(81940),i=l(32472),c=l(91841),r=l(29790),h=l(37716),g=l(13084),u=l(51095),m={title:"Basic confirmation",component:(o=function(){function n(a){s(this,n),this.mtxDialog=a}return a(n,[{key:"alert",value:function(){var s=this;this.mtxDialog.alert("My name is Zongbin!","",function(){s.mtxDialog.alert("Glad to meet you!")})}},{key:"confirm",value:function(){var s=this;this.mtxDialog.confirm("What's your name?","",function(){s.mtxDialog.alert("Hi, Zongbin!")},function(){s.mtxDialog.alert("I don't know.")})}},{key:"open",value:function(){var s=this;this.mtxDialog.open({title:"This is the title",description:"You can write some messages here.",showCloseIcon:!0,buttons:[{text:"CLOSE",onClick:function(){s.mtxDialog.alert("You click Close button.")}},{color:"primary",text:"VIEW",onClick:function(){s.mtxDialog.alert("You click View button.")}},{color:"warn",text:"OK",focusInitial:!0,onClick:function(){s.mtxDialog.alert("You click Ok button.")}}]})}}]),n}(),o.\u0275fac=function(s){return new(s||o)(h.Y36(g.cP))},o.\u0275cmp=h.Xpm({type:o,selectors:[["dialog-example"]],decls:6,vars:0,consts:[["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(s,n){1&s&&(h.TgZ(0,"button",0),h.NdJ("click",function(){return n.alert()}),h._uU(1,"Alert"),h.qZA(),h.TgZ(2,"button",1),h.NdJ("click",function(){return n.confirm()}),h._uU(3,"Confirm"),h.qZA(),h.TgZ(4,"button",2),h.NdJ("click",function(){return n.open()}),h._uU(5,"Open Dialog"),h.qZA())},directives:[u.lW],styles:[".mat-raised-button[_ngcontent-%COMP%]{margin:0 .5em}"]}),o),files:[{file:"app.component.html",content:l(71548),filecontent:l(27302)},{file:"app.component.ts",content:l(70557),filecontent:l(65631)},{file:"app.component.scss",content:l(48916),filecontent:l(12802)}]},d=l(22238),j=l(38583),f=l(98295),x=l(49983),b=l(3679);function v(s,n){if(1&s&&(h.TgZ(0,"div"),h._uU(1," You chose: "),h.TgZ(2,"strong"),h._uU(3),h.qZA(),h.qZA()),2&s){var a=h.oxw();h.xp6(3),h.Oqu(a.animal)}}var k=function(){var n=function(){function n(a){s(this,n),this.mtxDialog=a}return a(n,[{key:"openOriginal",value:function(){var s=this;this.mtxDialog.originalOpen(D,{width:"550px",data:{name:"nzbin",animal:"panda"}}).afterClosed().subscribe(function(n){console.log("The dialog was closed"),s.animal=n})}}]),n}();return n.\u0275fac=function(s){return new(s||n)(h.Y36(g.cP))},n.\u0275cmp=h.Xpm({type:n,selectors:[["dialog-example"]],decls:3,vars:1,consts:[["mat-raised-button","",3,"click"],[4,"ngIf"]],template:function(s,n){1&s&&(h.TgZ(0,"button",0),h.NdJ("click",function(){return n.openOriginal()}),h._uU(1,"Open Original Dialog"),h.qZA(),h.YNc(2,v,4,1,"div",1)),2&s&&(h.xp6(2),h.Q6J("ngIf",n.animal))},directives:[u.lW,j.O5],styles:["div[_ngcontent-%COMP%]{padding:1em}"]}),n}(),D=function(){var n=function(){function n(a,t){s(this,n),this.dialogRef=a,this.data=t}return a(n,[{key:"onNoClick",value:function(){this.dialogRef.close()}}]),n}();return n.\u0275fac=function(s){return new(s||n)(h.Y36(d.so),h.Y36(d.WI))},n.\u0275cmp=h.Xpm({type:n,selectors:[["dialog-overview"]],decls:12,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","",3,"ngModel","ngModelChange"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(s,n){1&s&&(h.TgZ(0,"h1",0),h._uU(1),h.qZA(),h.TgZ(2,"div",1),h.TgZ(3,"p"),h._uU(4,"What's your favorite animal?"),h.qZA(),h.TgZ(5,"mat-form-field"),h.TgZ(6,"input",2),h.NdJ("ngModelChange",function(s){return n.data.animal=s}),h.qZA(),h.qZA(),h.qZA(),h.TgZ(7,"div",3),h.TgZ(8,"button",4),h.NdJ("click",function(){return n.onNoClick()}),h._uU(9,"No Thanks"),h.qZA(),h.TgZ(10,"button",5),h._uU(11,"Ok"),h.qZA(),h.qZA()),2&s&&(h.xp6(1),h.hij("Hi, ",n.data.name,""),h.xp6(5),h.Q6J("ngModel",n.data.animal),h.xp6(4),h.Q6J("mat-dialog-close",n.data.animal))},directives:[d.uh,d.xY,f.KE,x.Nt,b.Fj,b.JJ,b.On,d.H8,u.lW,d.ZT],encapsulation:2}),n}(),y={title:"Material original dialog",component:k,files:[{file:"app.component.html",content:l(80824),filecontent:l(89471)},{file:"app.component.ts",content:l(85144),filecontent:l(97068)},{file:"app.component.scss",content:l(31798),filecontent:l(71688)},{file:"dialog.html",content:l(76043),filecontent:l(9100)}]},w=l(82613);function C(s,n){if(1&s&&(h.TgZ(0,"mat-radio-button",3),h._uU(1),h.qZA()),2&s){var a=n.$implicit;h.Q6J("value",a.value),h.xp6(1),h.hij(" ",a.label," ")}}var q={title:"I18n confirmation",component:function(){var n=function(){function n(a,t){s(this,n),this.mtxDialog=a,this.translate=t,this.langs=[{label:"\u4e2d\u6587\u7b80\u4f53",value:"zh-CN"},{label:"English",value:"en-US"}],this.defaultlang="zh-CN",t.addLangs(this.langs.map(function(s){return s.value})),t.setDefaultLang(this.defaultlang)}return a(n,[{key:"open",value:function(){this.mtxDialog.open({title:this.translate.stream("title"),description:this.translate.stream("description"),buttons:[{text:this.translate.stream("close"),onClick:function(){}},{color:"primary",text:this.translate.stream("view"),onClick:function(){}},{color:"warn",focusInitial:!0,text:this.translate.stream("ok"),onClick:function(){}}]})}}]),n}();return n.\u0275fac=function(s){return new(s||n)(h.Y36(g.cP),h.Y36(r.sK))},n.\u0275cmp=h.Xpm({type:n,selectors:[["dialog-example"]],decls:4,vars:2,consts:[[3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"click"],[3,"value"]],template:function(s,n){1&s&&(h.TgZ(0,"mat-radio-group",0),h.NdJ("ngModelChange",function(s){return n.defaultlang=s})("change",function(s){return n.translate.use(s.value)}),h.YNc(1,C,2,2,"mat-radio-button",1),h.qZA(),h.TgZ(2,"button",2),h.NdJ("click",function(){return n.open()}),h._uU(3,"Open Dialog"),h.qZA()),2&s&&(h.Q6J("ngModel",n.defaultlang),h.xp6(1),h.Q6J("ngForOf",n.langs))},directives:[w.VQ,b.JJ,b.On,j.sg,u.lW,w.U0],styles:[".mat-radio-group[_ngcontent-%COMP%]{display:block}.mat-radio-button[_ngcontent-%COMP%]{margin:0 1rem 1rem 0}"]}),n}(),files:[{file:"app.component.html",content:l(10398),filecontent:l(5103)},{file:"app.component.ts",content:l(3151),filecontent:l(13422)},{file:"app.component.scss",content:l(63547),filecontent:l(11402)},{file:"assets/zh-CN.json",content:l(92178),filecontent:l(39988)},{file:"assets/en-US.json",content:l(94696),filecontent:l(65611)}]},O=l(28860),T=l(22281),_=l(29241);function M(s,n){if(1&s&&(h.ynx(0),h._UZ(1,"doc-heading",2),h._UZ(2,"example-viewer",3),h.BQk()),2&s){var a=n.$implicit;h.xp6(1),h.Q6J("text",a.title),h.xp6(1),h.Q6J("exampleData",a)}}function A(s,n){if(1&s&&(h.ynx(0),h.YNc(1,M,3,2,"ng-container",1),h.BQk()),2&s){var a=n.ngIf;h.xp6(1),h.Q6J("ngForOf",a.examples)}}function Z(s,n){if(1&s&&(h.ynx(0),h._UZ(1,"doc-viewer",1),h.BQk()),2&s){var a=n.ngIf;h.xp6(1),h.Q6J("textContent",a.content.default)}}function I(s){return new i.w(s,"assets/i18n/dialog/","_json")}var U=function(){var n=function n(a){s(this,n),this.route=a};return n.\u0275fac=function(s){return new(s||n)(h.Y36(e.gz))},n.\u0275cmp=h.Xpm({type:n,selectors:[["app-dialog-overview"]],decls:4,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"text"],[3,"exampleData"]],template:function(s,n){1&s&&(h.TgZ(0,"p"),h._uU(1," The Extensions dialog is a wrapper of Angular Material dialog.\n"),h.qZA(),h.YNc(2,A,2,1,"ng-container",0),h.ALo(3,"async")),2&s&&(h.xp6(2),h.Q6J("ngIf",h.lcZ(3,1,n.route.data)))},directives:[j.O5,j.sg,O.Q,T.B],pipes:[j.Ov],encapsulation:2}),n}(),N=function(){var n=function n(a){s(this,n),this.route=a};return n.\u0275fac=function(s){return new(s||n)(h.Y36(e.gz))},n.\u0275cmp=h.Xpm({type:n,selectors:[["app-dialog-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(s,n){1&s&&(h.YNc(0,Z,2,1,"ng-container",0),h.ALo(1,"async")),2&s&&h.Q6J("ngIf",h.lcZ(1,1,n.route.data))},directives:[j.O5,_.z],pipes:[j.Ov],encapsulation:2}),n}(),Y=function(){var n=function n(){s(this,n)};return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=h.oAB({type:n}),n.\u0275inj=h.cJS({imports:[[p.m,r.aw.forRoot({loader:{provide:r.Zw,useFactory:I,deps:[c.eN]}}),e.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:U,pathMatch:"full",data:{examples:[m,y,q]}},{path:"api",component:N,pathMatch:"full",data:{content:l(24350)}},{path:"**",redirectTo:"overview"}])]]}),n}()},71548:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;warn&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;alert()&quot;</span>&gt;</span>Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;confirm()&quot;</span>&gt;</span>Confirm<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;primary&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open()&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n'},10398:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;defaultlang&quot;</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;translate.use($event.value)&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let lang of langs&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;lang.value&quot;</span>&gt;</span>\n    {{lang.label}}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;primary&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open()&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n'},80824:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;openOriginal()&quot;</span>&gt;</span>Open Original Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;animal&quot;</span>&gt;</span>\n  You chose: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{animal}}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},76043:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">mat-dialog-title</span>&gt;</span>Hi, {{ data.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">mat-dialog-content</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>What&#x27;s your favorite animal?<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;data.animal&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">mat-dialog-actions</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;onNoClick()&quot;</span>&gt;</span>No Thanks<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> [<span class="hljs-attr">mat-dialog-close</span>]=<span class="hljs-string">&quot;data.animal&quot;</span> <span class="hljs-attr">cdkFocusInitial</span>&gt;</span>Ok<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},94696:function(s){s.exports='{\n  <span class="hljs-attr">&quot;title&quot;</span>: <span class="hljs-string">&quot;This is the title&quot;</span>,\n  <span class="hljs-attr">&quot;description&quot;</span>: <span class="hljs-string">&quot;You can write some messages here&quot;</span>,\n  <span class="hljs-attr">&quot;close&quot;</span>: <span class="hljs-string">&quot;CLOSE&quot;</span>,\n  <span class="hljs-attr">&quot;ok&quot;</span>: <span class="hljs-string">&quot;OK&quot;</span>,\n  <span class="hljs-attr">&quot;view&quot;</span>: <span class="hljs-string">&quot;VIEW&quot;</span>\n}\n'},92178:function(s){s.exports='{\n  <span class="hljs-attr">&quot;title&quot;</span>: <span class="hljs-string">&quot;\u8fd9\u662f\u6807\u9898&quot;</span>,\n  <span class="hljs-attr">&quot;description&quot;</span>: <span class="hljs-string">&quot;\u53ef\u4ee5\u5728\u8fd9\u91cc\u5199\u4e00\u4e9b\u8be6\u7ec6\u4fe1\u606f&quot;</span>,\n  <span class="hljs-attr">&quot;close&quot;</span>: <span class="hljs-string">&quot;\u5173\u95ed&quot;</span>,\n  <span class="hljs-attr">&quot;ok&quot;</span>: <span class="hljs-string">&quot;\u786e\u5b9a&quot;</span>,\n  <span class="hljs-attr">&quot;view&quot;</span>: <span class="hljs-string">&quot;\u67e5\u770b&quot;</span>\n}\n'},70557:function(s){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { MtxDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;dialog-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> mtxDialog: MtxDialog</span>)</span> {}\n\n  <span class="hljs-function"><span class="hljs-title">alert</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`My name is Zongbin!`</span>, <span class="hljs-string">&#x27;&#x27;</span>, <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`Glad to meet you!`</span>);\n    });\n  }\n\n  <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-built_in">this</span>.mtxDialog.confirm(\n      <span class="hljs-string">`What&#x27;s your name?`</span>,\n      <span class="hljs-string">&#x27;&#x27;</span>,\n      <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`Hi, Zongbin!`</span>);\n      },\n      <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`I don&#x27;t know.`</span>);\n      }\n    );\n  }\n\n  <span class="hljs-function"><span class="hljs-title">open</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-built_in">this</span>.mtxDialog.open({\n      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;This is the title&#x27;</span>,\n      <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;You can write some messages here.&#x27;</span>,\n      <span class="hljs-attr">showCloseIcon</span>: <span class="hljs-literal">true</span>,\n      <span class="hljs-attr">buttons</span>: [\n        {\n          <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;CLOSE&#x27;</span>,\n          <span class="hljs-attr">onClick</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`You click Close button.`</span>);\n          },\n        },\n        {\n          <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;primary&#x27;</span>,\n          <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;VIEW&#x27;</span>,\n          <span class="hljs-attr">onClick</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`You click View button.`</span>);\n          },\n        },\n        {\n          <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;warn&#x27;</span>,\n          <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;OK&#x27;</span>,\n          <span class="hljs-attr">focusInitial</span>: <span class="hljs-literal">true</span>,\n          <span class="hljs-attr">onClick</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`You click Ok button.`</span>);\n          },\n        },\n      ],\n    });\n  }\n}\n'},3151:function(s){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { MtxDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n<span class="hljs-keyword">import</span> { TranslateService } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ngx-translate/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;dialog-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> mtxDialog: MtxDialog, <span class="hljs-keyword">public</span> translate: TranslateService</span>)</span> {\n    translate.addLangs(<span class="hljs-built_in">this</span>.langs.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.value));\n    translate.setDefaultLang(<span class="hljs-built_in">this</span>.defaultlang);\n  }\n\n  <span class="hljs-function"><span class="hljs-title">open</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-built_in">this</span>.mtxDialog.open({\n      <span class="hljs-attr">title</span>: <span class="hljs-built_in">this</span>.translate.stream(<span class="hljs-string">&#x27;title&#x27;</span>),\n      <span class="hljs-attr">description</span>: <span class="hljs-built_in">this</span>.translate.stream(<span class="hljs-string">&#x27;description&#x27;</span>),\n      <span class="hljs-attr">buttons</span>: [\n        {\n          <span class="hljs-attr">text</span>: <span class="hljs-built_in">this</span>.translate.stream(<span class="hljs-string">&#x27;close&#x27;</span>),\n          <span class="hljs-attr">onClick</span>: <span class="hljs-function">() =&gt;</span> {},\n        },\n        {\n          <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;primary&#x27;</span>,\n          <span class="hljs-attr">text</span>: <span class="hljs-built_in">this</span>.translate.stream(<span class="hljs-string">&#x27;view&#x27;</span>),\n          <span class="hljs-attr">onClick</span>: <span class="hljs-function">() =&gt;</span> {},\n        },\n        {\n          <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;warn&#x27;</span>,\n          <span class="hljs-attr">focusInitial</span>: <span class="hljs-literal">true</span>,\n          <span class="hljs-attr">text</span>: <span class="hljs-built_in">this</span>.translate.stream(<span class="hljs-string">&#x27;ok&#x27;</span>),\n          <span class="hljs-attr">onClick</span>: <span class="hljs-function">() =&gt;</span> {},\n        },\n      ],\n    });\n  }\n\n  langs = [\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u4e2d\u6587\u7b80\u4f53&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;zh-CN&#x27;</span> },\n    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;English&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;en-US&#x27;</span> },\n  ];\n  defaultlang = <span class="hljs-string">&#x27;zh-CN&#x27;</span>;\n}\n'},85144:function(s){s.exports='<span class="hljs-keyword">import</span> { Component, Inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { MtxDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n<span class="hljs-keyword">import</span> { MatDialogRef, MAT_DIALOG_DATA } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/dialog&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;dialog-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n  animal!: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> mtxDialog: MtxDialog</span>)</span> {}\n\n  <span class="hljs-function"><span class="hljs-title">openOriginal</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> dialogRef = <span class="hljs-built_in">this</span>.mtxDialog.originalOpen(DialogOverviewExampleComponent, {\n      <span class="hljs-attr">width</span>: <span class="hljs-string">&#x27;550px&#x27;</span>,\n      <span class="hljs-attr">data</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;nzbin&#x27;</span>, <span class="hljs-attr">animal</span>: <span class="hljs-string">&#x27;panda&#x27;</span> },\n    });\n\n    dialogRef.afterClosed().subscribe(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;The dialog was closed&#x27;</span>);\n      <span class="hljs-built_in">this</span>.animal = result;\n    });\n  }\n}\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;dialog-overview&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./dialog.html&#x27;</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">DialogOverviewExampleComponent</span> </span>{\n  <span class="hljs-function"><span class="hljs-title">constructor</span>(<span class="hljs-params">\n    <span class="hljs-keyword">public</span> dialogRef: MatDialogRef&lt;DialogOverviewExampleComponent&gt;,\n    <span class="hljs-meta">@Inject</span>(MAT_DIALOG_DATA) <span class="hljs-keyword">public</span> data: <span class="hljs-built_in">any</span>\n  </span>)</span> {}\n\n  onNoClick(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-built_in">this</span>.dialogRef.close();\n  }\n}\n'},24350:function(s,n,a){"use strict";a.r(n),n.default='<h1 id="dialog">Dialog</h1>\n<h2 id="api-reference-for-material-extensions-dialog">API reference for Material Extensions Dialog</h2>\n<p><code>import { MtxDialogModule } from &apos;@ng-matero/extensions/dialog&apos;;</code></p>\n<h3 id="services">Services</h3>\n<h4 id="mtxdialog"><code>MtxDialog</code></h4>\n<h5 id="methods">Methods</h5>\n<p><code>alert</code></p>\n<table>\n<thead>\n<tr>\n<th align="left">Parameter</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>title: string | Observable&lt;string&gt;</code></td>\n<td align="left">The dialog title.</td>\n</tr>\n<tr>\n<td align="left"><code>description: string | Observable&lt;string&gt;</code></td>\n<td align="left">The dialog description. Defaulted to <strong><code>&apos;&apos;</code></strong></td>\n</tr>\n<tr>\n<td align="left"><code>onOk: () =&gt; void</code></td>\n<td align="left">The ok callback function. Defaulted to <strong><code>() =&gt; {}</code></strong></td>\n</tr>\n</tbody></table>\n<p><code>confirm</code></p>\n<table>\n<thead>\n<tr>\n<th align="left">Parameter</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>title: string | Observable&lt;string&gt;</code></td>\n<td align="left">The dialog title.</td>\n</tr>\n<tr>\n<td align="left"><code>description: string | Observable&lt;string&gt;</code></td>\n<td align="left">The dialog description. Defaulted to <strong><code>&apos;&apos;</code></strong></td>\n</tr>\n<tr>\n<td align="left"><code>onOk: () =&gt; void</code></td>\n<td align="left">The ok callback function. Defaulted to <strong><code>() =&gt; {}</code></strong></td>\n</tr>\n<tr>\n<td align="left"><code>onClose: () =&gt; void</code></td>\n<td align="left">The close callback function. Defaulted to <strong><code>() =&gt; {}</code></strong></td>\n</tr>\n</tbody></table>\n<p><code>open</code></p>\n<table>\n<thead>\n<tr>\n<th align="left">Parameter</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>config: MtxDialogData</code></td>\n<td align="left">The dialog description.</td>\n</tr>\n<tr>\n<td align="left"><code>componentOrTemplateRef: ComponentType&lt;T&gt;</code></td>\n<td align="left">The component to load into the dialog. Defaulted to <strong><code>MtxDialogComponent</code></strong></td>\n</tr>\n</tbody></table>\n<p><code>originalOpen</code></p>\n<table>\n<thead>\n<tr>\n<th align="left">Parameter</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>componentOrTemplateRef: ComponentType&lt;T&gt;</code></td>\n<td align="left">The component to load into the dialog. Defaulted to <strong><code>MtxDialogComponent</code></strong></td>\n</tr>\n<tr>\n<td align="left"><code>config?: MatDialogConfig&lt;D&gt;</code></td>\n<td align="left">The dialog description.</td>\n</tr>\n</tbody></table>\n<h3 id="interfaces">Interfaces</h3>\n<h4 id="dialog-data">Dialog Data</h4>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> MtxDialogData <span class="hljs-keyword">extends</span> MatDialogConfig {\n  title?: <span class="hljs-built_in">string</span> | Observable&lt;<span class="hljs-built_in">string</span>&gt;;\n  description?: <span class="hljs-built_in">string</span> | Observable&lt;<span class="hljs-built_in">string</span>&gt;;\n  buttons?: MtxDialogBtns[];\n  showCloseIcon?: <span class="hljs-built_in">boolean</span>;\n}</pre>\n<h4 id="dialog-button">Dialog Button</h4>\n<pre class="hljs">export interface MtxDialogBtns {\n  type?: &apos;&apos; | &apos;raised&apos; | &apos;stroked&apos; | &apos;flat&apos;;\n  color?: &apos;&apos; | &apos;primary&apos; | &apos;accent&apos; | &apos;warn&apos;;\n  class?: string;\n  focusInitial?: boolean;\n  text: string | Observable&lt;string&gt;;\n  onClick?: () =&gt; void;\n}</pre>\n'},27302:function(s,n,a){"use strict";a.r(n),n.default='<button mat-raised-button color="warn" (click)="alert()">Alert</button>\n<button mat-raised-button color="accent" (click)="confirm()">Confirm</button>\n<button mat-raised-button color="primary" (click)="open()">Open Dialog</button>\n'},65631:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { MtxDialog } from '@ng-matero/extensions';\n\n@Component({\n  selector: 'dialog-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  constructor(private mtxDialog: MtxDialog) {}\n\n  alert() {\n    this.mtxDialog.alert(`My name is Zongbin!`, '', () => {\n      this.mtxDialog.alert(`Glad to meet you!`);\n    });\n  }\n\n  confirm() {\n    this.mtxDialog.confirm(\n      `What's your name?`,\n      '',\n      () => {\n        this.mtxDialog.alert(`Hi, Zongbin!`);\n      },\n      () => {\n        this.mtxDialog.alert(`I don't know.`);\n      }\n    );\n  }\n\n  open() {\n    this.mtxDialog.open({\n      title: 'This is the title',\n      description: 'You can write some messages here.',\n      showCloseIcon: true,\n      buttons: [\n        {\n          text: 'CLOSE',\n          onClick: () => {\n            this.mtxDialog.alert(`You click Close button.`);\n          },\n        },\n        {\n          color: 'primary',\n          text: 'VIEW',\n          onClick: () => {\n            this.mtxDialog.alert(`You click View button.`);\n          },\n        },\n        {\n          color: 'warn',\n          text: 'OK',\n          focusInitial: true,\n          onClick: () => {\n            this.mtxDialog.alert(`You click Ok button.`);\n          },\n        },\n      ],\n    });\n  }\n}\n"},5103:function(s,n,a){"use strict";a.r(n),n.default='<mat-radio-group [(ngModel)]="defaultlang" (change)="translate.use($event.value)">\n  <mat-radio-button *ngFor="let lang of langs" [value]="lang.value">\n    {{lang.label}}\n  </mat-radio-button>\n</mat-radio-group>\n\n<button mat-raised-button color="primary" (click)="open()">Open Dialog</button>\n'},13422:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { MtxDialog } from '@ng-matero/extensions';\nimport { TranslateService } from '@ngx-translate/core';\n\n@Component({\n  selector: 'dialog-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  constructor(private mtxDialog: MtxDialog, public translate: TranslateService) {\n    translate.addLangs(this.langs.map(item => item.value));\n    translate.setDefaultLang(this.defaultlang);\n  }\n\n  open() {\n    this.mtxDialog.open({\n      title: this.translate.stream('title'),\n      description: this.translate.stream('description'),\n      buttons: [\n        {\n          text: this.translate.stream('close'),\n          onClick: () => {},\n        },\n        {\n          color: 'primary',\n          text: this.translate.stream('view'),\n          onClick: () => {},\n        },\n        {\n          color: 'warn',\n          focusInitial: true,\n          text: this.translate.stream('ok'),\n          onClick: () => {},\n        },\n      ],\n    });\n  }\n\n  langs = [\n    { label: '\u4e2d\u6587\u7b80\u4f53', value: 'zh-CN' },\n    { label: 'English', value: 'en-US' },\n  ];\n  defaultlang = 'zh-CN';\n}\n"},89471:function(s,n,a){"use strict";a.r(n),n.default='<button mat-raised-button (click)="openOriginal()">Open Original Dialog</button>\n\n<div *ngIf="animal">\n  You chose: <strong>{{animal}}</strong>\n</div>\n'},97068:function(s,n,a){"use strict";a.r(n),n.default="import { Component, Inject } from '@angular/core';\nimport { MtxDialog } from '@ng-matero/extensions';\nimport { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';\n\n@Component({\n  selector: 'dialog-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  animal!: string;\n\n  constructor(private mtxDialog: MtxDialog) {}\n\n  openOriginal() {\n    const dialogRef = this.mtxDialog.originalOpen(DialogOverviewExampleComponent, {\n      width: '550px',\n      data: { name: 'nzbin', animal: 'panda' },\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log('The dialog was closed');\n      this.animal = result;\n    });\n  }\n}\n\n@Component({\n  selector: 'dialog-overview',\n  templateUrl: './dialog.html',\n})\nexport class DialogOverviewExampleComponent {\n  constructor(\n    public dialogRef: MatDialogRef<DialogOverviewExampleComponent>,\n    @Inject(MAT_DIALOG_DATA) public data: any\n  ) {}\n\n  onNoClick(): void {\n    this.dialogRef.close();\n  }\n}\n"},9100:function(s,n,a){"use strict";a.r(n),n.default='<h1 mat-dialog-title>Hi, {{ data.name }}</h1>\n<div mat-dialog-content>\n  <p>What\'s your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]="data.animal" />\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)="onNoClick()">No Thanks</button>\n  <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>\n</div>\n'},65611:function(s,n,a){"use strict";a.r(n),n.default='{\n  "title": "This is the title",\n  "description": "You can write some messages here",\n  "close": "CLOSE",\n  "ok": "OK",\n  "view": "VIEW"\n}\n'},39988:function(s,n,a){"use strict";a.r(n),n.default='{\n  "title": "\u8fd9\u662f\u6807\u9898",\n  "description": "\u53ef\u4ee5\u5728\u8fd9\u91cc\u5199\u4e00\u4e9b\u8be6\u7ec6\u4fe1\u606f",\n  "close": "\u5173\u95ed",\n  "ok": "\u786e\u5b9a",\n  "view": "\u67e5\u770b"\n}\n'},48916:function(s){"use strict";s.exports='module.exports = "<span class=\\"hljs-selector-class\\">.mat-raised-button</span> {\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">0</span> .<span class=\\"hljs-number\\">5em</span>;\\n}\\n"'},63547:function(s){"use strict";s.exports='module.exports = "<span class=\\"hljs-selector-class\\">.mat-radio-group</span> {\\n  <span class=\\"hljs-attribute\\">display</span>: block;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-radio-button</span> {\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">0</span> <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">0</span>;\\n}\\n"'},31798:function(s){"use strict";s.exports='module.exports = "<span class=\\"hljs-selector-tag\\">div</span> {\\n  <span class=\\"hljs-attribute\\">padding</span>: <span class=\\"hljs-number\\">1em</span>;\\n}\\n"'},12802:function(s){"use strict";s.exports='export default ".mat-raised-button {\\n  margin: 0 .5em;\\n}\\n";'},11402:function(s){"use strict";s.exports='export default ".mat-radio-group {\\n  display: block;\\n}\\n\\n.mat-radio-button {\\n  margin: 0 1rem 1rem 0;\\n}\\n";'},71688:function(s){"use strict";s.exports='export default "div {\\n  padding: 1em;\\n}\\n";'}}])}();