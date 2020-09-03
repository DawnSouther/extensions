(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+APe":function(n,s){n.exports='<span class="hljs-selector-class">.mat-raised-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> .<span class="hljs-number">5em</span>;\n}\n'},"3X/B":function(n,s,a){"use strict";a.r(s),s.default="div {\n  padding: 1em;\n}\n"},"3iNv":function(n,s,a){"use strict";a.r(s),s.default=".mat-raised-button {\n  margin: 0 .5em;\n}\n"},"4O52":function(n,s,a){"use strict";a.r(s),s.default='<button mat-raised-button color="warn" (click)="alert()">Alert</button>\n<button mat-raised-button color="accent" (click)="confirm()">Confirm</button>\n<button mat-raised-button color="primary" (click)="open()">Open Dialog</button>\n'},B4Yo:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { MtxDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;dialog-example&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  styleUrls: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> mtxDialog: MtxDialog</span>) {}\n\n  alert() {\n    <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`My name is Zongbin!`</span>, <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`Glad to meet you!`</span>);\n    });\n  }\n\n  confirm() {\n    <span class="hljs-built_in">this</span>.mtxDialog.confirm(\n      <span class="hljs-string">`What&#x27;s your name?`</span>,\n      <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`Hi, Zongbin!`</span>);\n      },\n      <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`I don&#x27;t know.`</span>);\n      }\n    );\n  }\n\n  open() {\n    <span class="hljs-built_in">this</span>.mtxDialog.open({\n      title: <span class="hljs-string">&#x27;This is the title&#x27;</span>,\n      description: <span class="hljs-string">&#x27;You can write some messages here.&#x27;</span>,\n      buttons: [\n        {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n          text: <span class="hljs-string">&#x27;CLOSE&#x27;</span>,\n          onClick: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`You click Close button.`</span>);\n          },\n        },\n        {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">&#x27;primary&#x27;</span>,\n          text: <span class="hljs-string">&#x27;VIEW&#x27;</span>,\n          onClick: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`You click View button.`</span>);\n          },\n        },\n        {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">&#x27;warn&#x27;</span>,\n          text: <span class="hljs-string">&#x27;OK&#x27;</span>,\n          onClick: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-built_in">this</span>.mtxDialog.alert(<span class="hljs-string">`You click Ok button.`</span>);\n          },\n        },\n      ],\n    });\n  }\n}\n'},BA9y:function(n,s,a){"use strict";a.r(s),s.default="import { Component, Inject } from '@angular/core';\nimport { MtxDialog } from '@ng-matero/extensions';\nimport { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';\n\n@Component({\n  selector: 'dialog-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  animal: string;\n\n  constructor(private mtxDialog: MtxDialog) {}\n\n  openOriginal() {\n    const dialogRef = this.mtxDialog.originalOpen(DialogOverviewExampleComponent, {\n      width: '550px',\n      data: { name: 'nzbin', animal: 'panda' },\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log('The dialog was closed');\n      this.animal = result;\n    });\n  }\n}\n\n@Component({\n  selector: 'dialog-overview',\n  templateUrl: './dialog.html',\n})\nexport class DialogOverviewExampleComponent {\n  constructor(\n    public dialogRef: MatDialogRef<DialogOverviewExampleComponent>,\n    @Inject(MAT_DIALOG_DATA) public data: any\n  ) {}\n\n  onNoClick(): void {\n    this.dialogRef.close();\n  }\n}\n"},Lo5F:function(n,s,a){"use strict";a.r(s),s.default='<button mat-raised-button (click)="openOriginal()">Open Original Dialog</button>\n\n<div *ngIf="animal">\n  You chose: <strong>{{animal}}</strong>\n</div>\n'},PheJ:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { MtxDialog } from '@ng-matero/extensions';\n\n@Component({\n  selector: 'dialog-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  constructor(private mtxDialog: MtxDialog) {}\n\n  alert() {\n    this.mtxDialog.alert(`My name is Zongbin!`, () => {\n      this.mtxDialog.alert(`Glad to meet you!`);\n    });\n  }\n\n  confirm() {\n    this.mtxDialog.confirm(\n      `What's your name?`,\n      () => {\n        this.mtxDialog.alert(`Hi, Zongbin!`);\n      },\n      () => {\n        this.mtxDialog.alert(`I don't know.`);\n      }\n    );\n  }\n\n  open() {\n    this.mtxDialog.open({\n      title: 'This is the title',\n      description: 'You can write some messages here.',\n      buttons: [\n        {\n          type: '',\n          text: 'CLOSE',\n          onClick: () => {\n            this.mtxDialog.alert(`You click Close button.`);\n          },\n        },\n        {\n          type: 'primary',\n          text: 'VIEW',\n          onClick: () => {\n            this.mtxDialog.alert(`You click View button.`);\n          },\n        },\n        {\n          type: 'warn',\n          text: 'OK',\n          onClick: () => {\n            this.mtxDialog.alert(`You click Ok button.`);\n          },\n        },\n      ],\n    });\n  }\n}\n"},bJrw:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;openOriginal()&quot;</span>&gt;</span>Open Original Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;animal&quot;</span>&gt;</span>\n  You chose: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{animal}}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},"bQ/j":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, Inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { MtxDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n<span class="hljs-keyword">import</span> { MatDialogRef, MAT_DIALOG_DATA } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/dialog&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;dialog-example&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  styleUrls: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  animal: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> mtxDialog: MtxDialog</span>) {}\n\n  openOriginal() {\n    <span class="hljs-keyword">const</span> dialogRef = <span class="hljs-built_in">this</span>.mtxDialog.originalOpen(DialogOverviewExampleComponent, {\n      width: <span class="hljs-string">&#x27;550px&#x27;</span>,\n      data: { name: <span class="hljs-string">&#x27;nzbin&#x27;</span>, animal: <span class="hljs-string">&#x27;panda&#x27;</span> },\n    });\n\n    dialogRef.afterClosed().subscribe(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;The dialog was closed&#x27;</span>);\n      <span class="hljs-built_in">this</span>.animal = result;\n    });\n  }\n}\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">&#x27;dialog-overview&#x27;</span>,\n  templateUrl: <span class="hljs-string">&#x27;./dialog.html&#x27;</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DialogOverviewExampleComponent {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">\n    <span class="hljs-keyword">public</span> dialogRef: MatDialogRef&lt;DialogOverviewExampleComponent&gt;,\n    <span class="hljs-meta">@Inject</span>(MAT_DIALOG_DATA) <span class="hljs-keyword">public</span> data: <span class="hljs-built_in">any</span>\n  </span>) {}\n\n  onNoClick(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-built_in">this</span>.dialogRef.close();\n  }\n}\n'},hm0f:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">mat-dialog-title</span>&gt;</span>Hi, {{ data.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">mat-dialog-content</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>What&#x27;s your favorite animal?<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;data.animal&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">mat-dialog-actions</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;onNoClick()&quot;</span>&gt;</span>No Thanks<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-button</span> [<span class="hljs-attr">mat-dialog-close</span>]=<span class="hljs-string">&quot;data.animal&quot;</span> <span class="hljs-attr">cdkFocusInitial</span>&gt;</span>Ok<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},mVTe:function(n,s){n.exports='<span class="hljs-selector-tag">div</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">1em</span>;\n}\n'},qyMe:function(n,s,a){"use strict";a.r(s),s.default='<h1 mat-dialog-title>Hi, {{ data.name }}</h1>\n<div mat-dialog-content>\n  <p>What\'s your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]="data.animal" />\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)="onNoClick()">No Thanks</button>\n  <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>\n</div>\n'},uHWN:function(n,s,a){"use strict";a.r(s),a.d(s,"DialogOverviewComponent",(function(){return w})),a.d(s,"DialogApiComponent",(function(){return y})),a.d(s,"DialogModule",(function(){return D}));var t=a("sEIs"),l=a("M0ag"),o=a("EM62"),p=a("jXBn"),i=a("PBFl");const e={title:"Basic confirmation",component:(()=>{class n{constructor(n){this.mtxDialog=n}alert(){this.mtxDialog.alert("My name is Zongbin!",()=>{this.mtxDialog.alert("Glad to meet you!")})}confirm(){this.mtxDialog.confirm("What's your name?",()=>{this.mtxDialog.alert("Hi, Zongbin!")},()=>{this.mtxDialog.alert("I don't know.")})}open(){this.mtxDialog.open({title:"This is the title",description:"You can write some messages here.",buttons:[{type:"",text:"CLOSE",onClick:()=>{this.mtxDialog.alert("You click Close button.")}},{type:"primary",text:"VIEW",onClick:()=>{this.mtxDialog.alert("You click View button.")}},{type:"warn",text:"OK",onClick:()=>{this.mtxDialog.alert("You click Ok button.")}}]})}}return n.\u0275fac=function(s){return new(s||n)(o.Nb(p.a))},n.\u0275cmp=o.Hb({type:n,selectors:[["dialog-example"]],decls:6,vars:0,consts:[["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(n,s){1&n&&(o.Tb(0,"button",0),o.bc("click",(function(){return s.alert()})),o.Lc(1,"Alert"),o.Sb(),o.Tb(2,"button",1),o.bc("click",(function(){return s.confirm()})),o.Lc(3,"Confirm"),o.Sb(),o.Tb(4,"button",2),o.bc("click",(function(){return s.open()})),o.Lc(5,"Open Dialog"),o.Sb())},directives:[i.b],styles:[".mat-raised-button[_ngcontent-%COMP%]{margin:0 .5em}"]}),n})(),files:[{file:"app.component.html",content:a("xJxP"),filecontent:a("4O52")},{file:"app.component.ts",content:a("B4Yo"),filecontent:a("PheJ")},{file:"app.component.scss",content:a("+APe"),filecontent:a("3iNv")}]};var c=a("OZ4H"),r=a("2kYt"),m=a("29Wa"),g=a("Cd2c"),h=a("nIj0");function u(n,s){if(1&n&&(o.Tb(0,"div"),o.Lc(1," You chose: "),o.Tb(2,"strong"),o.Lc(3),o.Sb(),o.Sb()),2&n){const n=o.fc();o.Bb(3),o.Mc(n.animal)}}let d=(()=>{class n{constructor(n){this.mtxDialog=n}openOriginal(){this.mtxDialog.originalOpen(j,{width:"550px",data:{name:"nzbin",animal:"panda"}}).afterClosed().subscribe(n=>{console.log("The dialog was closed"),this.animal=n})}}return n.\u0275fac=function(s){return new(s||n)(o.Nb(p.a))},n.\u0275cmp=o.Hb({type:n,selectors:[["dialog-example"]],decls:3,vars:1,consts:[["mat-raised-button","",3,"click"],[4,"ngIf"]],template:function(n,s){1&n&&(o.Tb(0,"button",0),o.bc("click",(function(){return s.openOriginal()})),o.Lc(1,"Open Original Dialog"),o.Sb(),o.Jc(2,u,4,1,"div",1)),2&n&&(o.Bb(2),o.nc("ngIf",s.animal))},directives:[i.b,r.o],styles:["div[_ngcontent-%COMP%]{padding:1em}"]}),n})(),j=(()=>{class n{constructor(n,s){this.dialogRef=n,this.data=s}onNoClick(){this.dialogRef.close()}}return n.\u0275fac=function(s){return new(s||n)(o.Nb(c.g),o.Nb(c.a))},n.\u0275cmp=o.Hb({type:n,selectors:[["dialog-overview"]],decls:12,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","",3,"ngModel","ngModelChange"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(n,s){1&n&&(o.Tb(0,"h1",0),o.Lc(1),o.Sb(),o.Tb(2,"div",1),o.Tb(3,"p"),o.Lc(4,"What's your favorite animal?"),o.Sb(),o.Tb(5,"mat-form-field"),o.Tb(6,"input",2),o.bc("ngModelChange",(function(n){return s.data.animal=n})),o.Sb(),o.Sb(),o.Sb(),o.Tb(7,"div",3),o.Tb(8,"button",4),o.bc("click",(function(){return s.onNoClick()})),o.Lc(9,"No Thanks"),o.Sb(),o.Tb(10,"button",5),o.Lc(11,"Ok"),o.Sb(),o.Sb()),2&n&&(o.Bb(1),o.Nc("Hi, ",s.data.name,""),o.Bb(5),o.nc("ngModel",s.data.animal),o.Bb(4),o.nc("mat-dialog-close",s.data.animal))},directives:[c.h,c.e,m.c,g.b,h.c,h.i,h.k,c.c,i.b,c.d],encapsulation:2}),n})();const b={title:"Material original dialog",component:d,files:[{file:"app.component.html",content:a("bJrw"),filecontent:a("Lo5F")},{file:"app.component.ts",content:a("bQ/j"),filecontent:a("BA9y")},{file:"app.component.scss",content:a("mVTe"),filecontent:a("3X/B")},{file:"dialog.html",content:a("hm0f"),filecontent:a("qyMe")}]};var x=a("Pg5x");function f(n,s){if(1&n&&(o.Rb(0),o.Ob(1,"example-viewer",2),o.Qb()),2&n){const n=s.$implicit;o.Bb(1),o.nc("exampleData",n)}}function k(n,s){if(1&n&&(o.Rb(0),o.Jc(1,f,2,1,"ng-container",1),o.Qb()),2&n){const n=s.ngIf;o.Bb(1),o.nc("ngForOf",n.examples)}}let w=(()=>{class n{constructor(n){this.route=n}}return n.\u0275fac=function(s){return new(s||n)(o.Nb(t.a))},n.\u0275cmp=o.Hb({type:n,selectors:[["app-dialog-overview"]],decls:4,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(n,s){1&n&&(o.Tb(0,"p"),o.Lc(1," THe Extensions dialog is a wrapper of Angular Material dialog.\n"),o.Sb(),o.Jc(2,k,2,1,"ng-container",0),o.gc(3,"async")),2&n&&(o.Bb(2),o.nc("ngIf",o.hc(3,1,s.route.data)))},directives:[r.o,r.n,x.a],pipes:[r.b],encapsulation:2}),n})(),y=(()=>{class n{constructor(n){this.route=n}}return n.\u0275fac=function(s){return new(s||n)(o.Nb(t.a))},n.\u0275cmp=o.Hb({type:n,selectors:[["app-dialog-api"]],decls:1,vars:0,template:function(n,s){1&n&&o.Lc(0,"Coming soon\n")},encapsulation:2}),n})(),D=(()=>{class n{}return n.\u0275mod=o.Lb({type:n}),n.\u0275inj=o.Kb({factory:function(s){return new(s||n)},imports:[[l.b,t.i.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:w,pathMatch:"full",data:{examples:[e,b]}},{path:"api",component:y,pathMatch:"full"},{path:"**",redirectTo:"overview"}])]]}),n})()},xJxP:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;warn&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;alert()&quot;</span>&gt;</span>Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;accent&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;confirm()&quot;</span>&gt;</span>Confirm<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;primary&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open()&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n'}}]);