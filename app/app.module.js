"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
//Services
var grouplist_service_1 = require('./grouplist.service');
//Components
var home_component_1 = require('./home.component');
var groupsearch_component_1 = require('./groupsearch.component');
var group_component_1 = require('./group.component');
var addgroup_component_1 = require('./addgroup.component');
var joingroup_component_1 = require('./joingroup.component');
var deletegroup_component_1 = require('./deletegroup.component');
//Routers
var router_1 = require('@angular/router');
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.Home },
    { path: 'addgroup', component: addgroup_component_1.AddGroup },
    { path: 'joingroup', component: joingroup_component_1.JoinGroup },
    { path: 'delete', component: deletegroup_component_1.DeleteGroup }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(routes)],
            declarations: [app_component_1.AppComponent, groupsearch_component_1.GroupSearch, group_component_1.Group, home_component_1.Home, addgroup_component_1.AddGroup, joingroup_component_1.JoinGroup, deletegroup_component_1.DeleteGroup],
            bootstrap: [app_component_1.AppComponent],
            providers: [grouplist_service_1.GroupList]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map