(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{NZJa:function(t,n,i){"use strict";i.r(n);var o=i("sEIs"),a=i("d2mR"),e=i("U+c6"),c=i("OZ4H"),l=i("EM62"),r=i("PBFl"),s=i("2kYt"),b=i("29Wa"),m=i("Cd2c"),u=i("nIj0");function d(t,n){if(1&t&&(l.Xb(0,"p"),l.Kc(1," You chose: "),l.Xb(2,"i"),l.Kc(3),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Db(3),l.Lc(t.animal)}}let g=(()=>{class t{constructor(t){this.mtxDialog=t}ngOnInit(){}alert(){this.mtxDialog.alert("My name is Zongbin!",()=>{this.mtxDialog.alert("Glad to meet you!")})}confirm(){this.mtxDialog.confirm("What's your name?",()=>{this.mtxDialog.alert("Hi, Zongbin!")},()=>{this.mtxDialog.alert("I don't know.")})}open(){this.mtxDialog.open({title:"This is the title",description:"You can write some messages here.",buttons:[{type:"",text:"CLOSE",onClick:()=>{this.mtxDialog.alert("You click Close button.")}},{type:"primary",text:"VIEW",onClick:()=>{this.mtxDialog.alert("You click View button.")}},{type:"warn",text:"OK",onClick:()=>{this.mtxDialog.alert("You click Ok button.")}}]})}openOriginal(){this.mtxDialog.originalOpen(p,{width:"550px",data:{name:"nzbin",animal:"panda"}}).afterClosed().subscribe(t=>{console.log("The dialog was closed"),this.animal=t})}}return t.\u0275fac=function(n){return new(n||t)(l.Rb(e.a))},t.\u0275cmp=l.Lb({type:t,selectors:[["dialog-demo"]],decls:12,vars:1,consts:[[1,"mx-n2"],["mat-raised-button","","color","warn",1,"mx-2",3,"click"],["mat-raised-button","","color","accent",1,"mx-2",3,"click"],["mat-raised-button","","color","primary",1,"mx-2",3,"click"],["mat-raised-button","",1,"mx-2",3,"click"],[4,"ngIf"]],template:function(t,n){1&t&&(l.Xb(0,"p"),l.Kc(1," THe Ng-Matero dialog is a wrapper of Angular Material dialog.\n"),l.Wb(),l.Xb(2,"p",0),l.Xb(3,"button",1),l.fc("click",(function(){return n.alert()})),l.Kc(4,"Alert"),l.Wb(),l.Xb(5,"button",2),l.fc("click",(function(){return n.confirm()})),l.Kc(6,"Confirm"),l.Wb(),l.Xb(7,"button",3),l.fc("click",(function(){return n.open()})),l.Kc(8,"Open Dialog"),l.Wb(),l.Xb(9,"button",4),l.fc("click",(function(){return n.openOriginal()})),l.Kc(10,"Open Original Dialog"),l.Wb(),l.Wb(),l.Ic(11,d,4,1,"p",5)),2&t&&(l.Db(11),l.pc("ngIf",n.animal))},directives:[r.b,s.m],styles:[""]}),t})(),p=(()=>{class t{constructor(t,n){this.dialogRef=t,this.data=n}onNoClick(){this.dialogRef.close()}}return t.\u0275fac=function(n){return new(n||t)(l.Rb(c.g),l.Rb(c.a))},t.\u0275cmp=l.Lb({type:t,selectors:[["dialog-overview"]],decls:12,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","",3,"ngModel","ngModelChange"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(t,n){1&t&&(l.Xb(0,"h1",0),l.Kc(1),l.Wb(),l.Xb(2,"div",1),l.Xb(3,"p"),l.Kc(4,"What's your favorite animal?"),l.Wb(),l.Xb(5,"mat-form-field"),l.Xb(6,"input",2),l.fc("ngModelChange",(function(t){return n.data.animal=t})),l.Wb(),l.Wb(),l.Wb(),l.Xb(7,"div",3),l.Xb(8,"button",4),l.fc("click",(function(){return n.onNoClick()})),l.Kc(9,"No Thanks"),l.Wb(),l.Xb(10,"button",5),l.Kc(11,"Ok"),l.Wb(),l.Wb()),2&t&&(l.Db(1),l.Mc("Hi, ",n.data.name,""),l.Db(5),l.pc("ngModel",n.data.animal),l.Db(4),l.pc("mat-dialog-close",n.data.animal))},directives:[c.h,c.e,b.b,m.b,u.b,u.i,u.k,c.c,r.b,c.d],encapsulation:2}),t})();i.d(n,"DialogDemoModule",(function(){return f}));let f=(()=>{class t{}return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(n){return new(n||t)},imports:[[a.a,o.h.forChild([{path:"",component:g}]),e.b]]}),t})()}}]);