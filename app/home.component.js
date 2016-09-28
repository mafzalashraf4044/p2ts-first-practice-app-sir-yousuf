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
var core_1 = require("@angular/core");
//Service
var grouplist_service_1 = require('./grouplist.service');
var Home = (function () {
    function Home(groupList) {
        this.groupList = groupList;
        this.groupsOfCurrentUser = [];
        this.index = 0;
        this.groupsOfCurrentUser = groupList.groupsOfCurrentUser;
        console.log(groupList.groupsOfCurrentUser);
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n    <div class=\"container\" style=\"padding: 0px;\">\n\n        <div class=\"row\">\n            <div class=\"col-md-7\">\n                <search-group></search-group>\n            </div>\n                \n            <div class=\"col-md-5 groupArea\" [ngClass]=\"{overflow: groupsOfCurrentUser.length>4}\">             \n              <h3 [ngClass]=\"{decreasePadding: groupsOfCurrentUser.length>4, increasePadding: groupsOfCurrentUser.length<=4}\">My Groups</h3>\n              <group [groups]=\"groupsOfCurrentUser\"></group>\n            </div>\n        </div>\n    </div>  \n  ",
            styles: ["\n    .groupArea{height: 77vh;\n     }\n\n     .overflow{overflow-y: scroll;}\n\n     .groupArea::-webkit-scrollbar {\n        width: 0.5em;\n     }\n    \n     .groupArea::-webkit-scrollbar-track {\n         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n     }\n    \n     .groupArea::-webkit-scrollbar-thumb {\n       background-color: darkgrey;\n       outline: 1px solid slategrey;\n     }\n\n     .groupArea > h3{color: #C8C8C8; font-weight: bold; margin-top: 0px;}\n     .decreasePadding{padding-left: 16px;}\n     .increasePadding{padding-left: 25px;}\n\n  "]
        }), 
        __metadata('design:paramtypes', [grouplist_service_1.GroupList])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=home.component.js.map