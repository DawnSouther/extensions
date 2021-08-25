"use strict";(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[135],{95135:function(e,t,n){n.r(t),n.d(t,{ComponentsModule:function(){return f}});var i=n(54655),o=n(81940),s=n(79765),r=n(37716),a=n(41710),c=n(65939),p=n(45435),l=n(13653),d=n(75319);let h=(()=>{class e{constructor(e){this.router=e,this.subscriptions=new d.w,this.navigationFocusRequests=[],this.skipLinkFocusRequests=[],this.navigationEndEvents=this.router.events.pipe((0,p.h)(e=>e instanceof i.m2)),this.softNavigations=this.navigationEndEvents.pipe((0,l.T)(1)),this.subscriptions.add(this.softNavigations.subscribe(()=>{this.router.url.split("#")[1]||setTimeout(()=>{this.navigationFocusRequests.length&&this.navigationFocusRequests[this.navigationFocusRequests.length-1].focus({preventScroll:!0})},100)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}requestFocusOnNavigation(e){this.navigationFocusRequests.push(e)}relinquishFocusOnNavigation(e){this.navigationFocusRequests.splice(this.navigationFocusRequests.indexOf(e),1)}requestSkipLinkFocus(e){this.skipLinkFocusRequests.push(e),this.setSkipLinkHref(e)}relinquishSkipLinkFocus(e){this.skipLinkFocusRequests.splice(this.skipLinkFocusRequests.indexOf(e),1),this.setSkipLinkHref(this.skipLinkFocusRequests[this.skipLinkFocusRequests.length-1])}setSkipLinkHref(e){const t=this.router.url.split("#")[0];this.skipLinkHref=e?`${t}#${e.id}`:null}getSkipLinkHref(){return this.skipLinkHref}isNavigationWithinComponentView(e,t){const n=/(components|cdk)\/([^\/]+)/,i=e.match(n),o=t.match(n);return e&&t&&i&&o&&i[0]===o[0]&&i[1]===o[1]}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(i.F0))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=0,v=(()=>{class e{constructor(e,t){this.el=e,this.navigationFocusService=t,this.tabindex="-1",this.outline="none",e.nativeElement.id||(e.nativeElement.id="skip-link-target-"+u++),this.navigationFocusService.requestFocusOnNavigation(e.nativeElement),this.navigationFocusService.requestSkipLinkFocus(e.nativeElement)}ngOnDestroy(){this.navigationFocusService.relinquishFocusOnNavigation(this.el.nativeElement),this.navigationFocusService.relinquishSkipLinkFocus(this.el.nativeElement)}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.SBq),r.Y36(h))},e.\u0275dir=r.lG2({type:e,selectors:[["","focusOnNavigation",""]],hostVars:3,hostBindings:function(e,t){2&e&&(r.Ikx("tabindex",t.tabindex),r.Udp("outline",t.outline))}}),e})();var m=n(38583);function g(e,t){if(1&e&&(r.TgZ(0,"a",4,5),r._uU(2),r.qZA()),2&e){const e=t.$implicit,n=r.MAs(1),i=r.oxw();r.Q6J("routerLink",i.componentId+"/"+e.toLowerCase())("active",n.isActive),r.xp6(2),r.Oqu(e)}}const k=[{path:"",component:(()=>{class e{constructor(e,t,n){this.router=t,this._componentPageTitle=n,this.sections=new Set(["overview","api"]),this._destroyed=new s.xQ,this.componentId="",e.parent&&[e.params].push(e.parent.params),this.router.events.subscribe(e=>{e instanceof i.m2&&(this.componentId=e.url.split("/")[2],this._componentPageTitle.title=this.componentId)})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(i.gz),r.Y36(i.F0),r.Y36(a._))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-component-viewer"]],decls:5,vars:1,consts:[[1,"docs-component-viewer"],["mat-tab-nav-bar","","aria-label","Documentation Sections","id","component-viewer","focusOnNavigation","",1,"docs-component-viewer-tabbed-content"],["mat-tab-link","","class","docs-component-viewer-section-tab","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],[1,"docs-component-viewer-content"],["mat-tab-link","","routerLinkActive","",1,"docs-component-viewer-section-tab",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"nav",1),r.YNc(2,g,3,3,"a",2),r.qZA(),r.TgZ(3,"div",3),r._UZ(4,"router-outlet"),r.qZA(),r.qZA()),2&e&&(r.xp6(2),r.Q6J("ngForOf",t.sections))},directives:[c.BU,v,m.sg,i.lC,i.yS,c.Nj,i.Od],styles:["app-component-viewer{font-weight:400;padding:20px 50px}@media (max-width: 599px){app-component-viewer{padding-left:15px;padding-right:15px}}.docs-component-viewer-section-tab{text-transform:uppercase}.docs-component-viewer-tabbed-content{margin-bottom:25px}.docs-component-viewer-content{position:relative;min-height:500px}.docs-component-viewer-content component-overview,.docs-component-viewer-content component-api{display:flex;align-items:flex-start}@media (max-width: 959px){.docs-component-viewer-content component-overview,.docs-component-viewer-content component-api{flex-direction:column}}.docs-component-viewer-content table-of-contents{top:35px;position:sticky}@media (max-width: 959px){.docs-component-viewer-content table-of-contents{order:-1;position:inherit;width:auto;padding-left:0}}.docs-component-view-text-content{flex-grow:1;width:100%}.docs-component-api,.docs-component-overview{width:80%;display:inline-flex}@media (max-width: 959px){.docs-component-api,.docs-component-overview{width:100%;margin-right:0}}\n"],encapsulation:2}),e})(),children:[{path:"alert",loadChildren:()=>Promise.all([n.e(592),n.e(891)]).then(n.bind(n,76891)).then(e=>e.AlertModule)},{path:"button",loadChildren:()=>n.e(37).then(n.bind(n,83037)).then(e=>e.ButtonModule)},{path:"checkbox-group",loadChildren:()=>Promise.all([n.e(137),n.e(438)]).then(n.bind(n,18438)).then(e=>e.CheckboxGroupModule)},{path:"color-picker",loadChildren:()=>Promise.all([n.e(66),n.e(142)]).then(n.bind(n,25142)).then(e=>e.ColorPickerModule)},{path:"data-grid",loadChildren:()=>Promise.all([n.e(137),n.e(854)]).then(n.bind(n,89854)).then(e=>e.DataGridModule)},{path:"dialog",loadChildren:()=>Promise.all([n.e(137),n.e(803)]).then(n.bind(n,14803)).then(e=>e.DialogModule)},{path:"loader",loadChildren:()=>n.e(977).then(n.bind(n,63977)).then(e=>e.LoaderModule)},{path:"popover",loadChildren:()=>n.e(582).then(n.bind(n,15582)).then(e=>e.PopoverModule)},{path:"progress",loadChildren:()=>Promise.all([n.e(66),n.e(645)]).then(n.bind(n,64645)).then(e=>e.ProgressModule)},{path:"select",loadChildren:()=>Promise.all([n.e(562),n.e(592),n.e(730)]).then(n.bind(n,75730)).then(e=>e.SelectModule)},{path:"split-pane",loadChildren:()=>n.e(835).then(n.bind(n,45835)).then(e=>e.SplitPaneModule)},{path:"tooltip",loadChildren:()=>n.e(655).then(n.bind(n,86655)).then(e=>e.TooltipModule)},{path:"form-group",loadChildren:()=>Promise.all([n.e(562),n.e(870)]).then(n.bind(n,62870)).then(e=>e.FormGroupModule)},{path:"text3d",loadChildren:()=>n.e(878).then(n.bind(n,30878)).then(e=>e.Text3dModule)}]}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[o.m,i.Bz.forChild(k)]]}),e})()}}]);