function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{IyOB:function(e,t,n){"use strict";n.r(t);var o,r=n("sEIs"),s=n("2kYt"),i=n("EM62"),c=((o=function e(){_classCallCheck(this,e)}).\u0275mod=i.Pb({type:o}),o.\u0275inj=i.Ob({factory:function(e){return new(e||o)},imports:[[s.c]]}),o);function l(e,t){if(1&e){var n=i.Yb();i.Xb(0,"button",2),i.fc("click",(function(){return i.Ac(n),i.jc(2).handleClose()})),i.Xb(1,"span",3),i.Kc(2,"\xd7"),i.Wb(),i.Wb()}}var a=function(e,t,n){return["mtx-alert",e,t,n]};function b(e,t){if(1&e&&(i.Xb(0,"div",1),i.nc(1),i.Ic(2,l,3,0,"ng-template",0),i.Wb()),2&e){var n=i.jc();i.pc("ngClass",i.uc(2,a,"mtx-alert-"+n.type,"mat-elevation-z"+n.elevation,n.dismissible?"mtx-alert-dismissible":"")),i.Db(2),i.pc("ngIf",n.dismissible)}}var u,f,d=["*"],p=((f=function(){function e(t){_classCallCheck(this,e),this._changeDetectorRef=t,this.type="default",this.isOpen=!0,this.elevation=0,this.closed=new i.o}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"handleClose",value:function(){this.isOpen=!1,this._changeDetectorRef.markForCheck(),this.closed.emit(this)}}]),e}()).\u0275fac=function(e){return new(e||f)(i.Rb(i.h))},f.\u0275cmp=i.Lb({type:f,selectors:[["mtx-alert"]],hostAttrs:[1,"mtx-alert-wrap"],inputs:{type:"type",isOpen:"isOpen",dismissible:"dismissible",color:"color",elevation:"elevation"},outputs:{closed:"closed"},exportAs:["mtxAlert"],ngContentSelectors:d,decls:1,vars:1,consts:[[3,"ngIf"],["role","alert",3,"ngClass"],["type","button","aria-label","Close",1,"mtx-alert-close",3,"click"],["aria-hidden","true"]],template:function(e,t){1&e&&(i.oc(),i.Ic(0,b,3,6,"ng-template",0)),2&e&&i.pc("ngIf",t.isOpen)},directives:[s.m,s.k],styles:[".mtx-alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.mtx-alert-close{position:absolute;top:0;bottom:0;right:0;padding:0 1.25rem;font-size:1.5rem;line-height:1;color:inherit;opacity:.5;background-color:transparent;border:0;cursor:pointer}[dir=rtl] .mtx-alert-close{right:unset;left:0}.mtx-alert-close:hover{opacity:.75}.mtx-alert-dismissible{padding-right:4rem}.mtx-alert-success{background-color:#4caf50;border-color:#4caf50;color:#fff}.mtx-alert-info{background-color:#2196f3;border-color:#2196f3;color:#fff}.mtx-alert-warning{background-color:#fb8c00;border-color:#fb8c00;color:#fff}.mtx-alert-danger{background-color:#ff5252;border-color:#ff5252;color:#fff}"],encapsulation:2,changeDetection:0}),f),m=((u=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"onClosed",value:function(e){console.log(e)}}]),e}()).\u0275fac=function(e){return new(e||u)},u.\u0275cmp=i.Lb({type:u,selectors:[["alert-demo"]],decls:42,vars:2,consts:[["type","info"],["type","success"],["type","warning"],["type","danger"],["type","info",3,"dismissible","closed"],["type","success",3,"dismissible","closed"],["type","danger","elevation","3"],["type","warning","elevation","3"],["type","default","elevation","3"]],template:function(e,t){1&e&&(i.Xb(0,"h3"),i.Kc(1,"Normal"),i.Wb(),i.Xb(2,"mtx-alert",0),i.Xb(3,"strong"),i.Kc(4,"Heads up!"),i.Wb(),i.Kc(5," This alert needs your attention, but it's not super important.\n"),i.Wb(),i.Xb(6,"mtx-alert",1),i.Xb(7,"strong"),i.Kc(8,"Well done!"),i.Wb(),i.Kc(9," You successfully read this important alert message.\n"),i.Wb(),i.Xb(10,"mtx-alert",2),i.Xb(11,"strong"),i.Kc(12,"Warning!"),i.Wb(),i.Kc(13," Better check yourself, you're not looking too good.\n"),i.Wb(),i.Xb(14,"mtx-alert",3),i.Xb(15,"strong"),i.Kc(16,"Oh snap!"),i.Wb(),i.Kc(17," Change a few things up and try submitting again.\n"),i.Wb(),i.Xb(18,"h3"),i.Kc(19,"Dismissible"),i.Wb(),i.Xb(20,"mtx-alert",4),i.fc("closed",(function(e){return t.onClosed(e)})),i.Xb(21,"strong"),i.Kc(22,"Heads up!"),i.Wb(),i.Kc(23," This alert needs your attention, but it's not super important.\n"),i.Wb(),i.Xb(24,"mtx-alert",5),i.fc("closed",(function(e){return t.onClosed(e)})),i.Xb(25,"strong"),i.Kc(26,"Well done!"),i.Wb(),i.Kc(27," You successfully read this important alert message.\n"),i.Wb(),i.Xb(28,"h3"),i.Kc(29,"Elevation"),i.Wb(),i.Xb(30,"mtx-alert",6),i.Xb(31,"strong"),i.Kc(32,"Well done!"),i.Wb(),i.Kc(33," You successfully read this important alert message.\n"),i.Wb(),i.Xb(34,"mtx-alert",7),i.Xb(35,"strong"),i.Kc(36,"Warning!"),i.Wb(),i.Kc(37," Better check yourself, you're not looking too good.\n"),i.Wb(),i.Xb(38,"mtx-alert",8),i.Xb(39,"strong"),i.Kc(40,"Heads up!"),i.Wb(),i.Kc(41," This alert needs your attention, but it's not super important.\n"),i.Wb()),2&e&&(i.Db(20),i.pc("dismissible",!0),i.Db(4),i.pc("dismissible",!0))},directives:[p],styles:[""]}),u);n.d(t,"AlertDemoModule",(function(){return h}));var g,h=((g=function e(){_classCallCheck(this,e)}).\u0275mod=i.Pb({type:g}),g.\u0275inj=i.Ob({factory:function(e){return new(e||g)},imports:[[r.h.forChild([{path:"",component:m}]),c]]}),g)}}]);