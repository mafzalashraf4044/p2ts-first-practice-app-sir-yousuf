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
//Serivce
var grouplist_service_1 = require('./grouplist.service');
var JoinGroup = (function () {
    function JoinGroup(groupList) {
        this.groupList = groupList;
        this.allGroups = groupList.getGroups();
    }
    JoinGroup = __decorate([
        core_1.Component({
            selector: 'join-group',
            templateUrl: './app/joingroup.component.html',
            styles: ["\n    #mainPanel{box-shadow: 0 0 2px 1px #bfc0c1;\n               background-color: white;\n               height: 77vh;\n               overflow-y: scroll;}\n    #mainPanel h1{color: #C8C8C8;}  \n\n     #mainPanel::-webkit-scrollbar {\n        width: 0.5em;\n     }\n    \n     #mainPanel::-webkit-scrollbar-track {\n         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n     }\n    \n     #mainPanel::-webkit-scrollbar-thumb {\n       background-color: darkgrey;\n       outline: 1px solid slategrey;\n     }\n\n    #searchIcon{font-size: 2em; padding: 0.4em; color: #6a6a6a;}\n\n    input#search, input#search:focus{border: none;\n                                     outline: none;\n                                     font-size: 1.8em;\n                                     box-shadow: none;}\n\n    #searchBox>*{display: inline-block;}\n\n    #searchBox{border-bottom: 1px solid lightgrey;\n               padding: 0.5em;\n               text-align: center;}\n}    \n  "]
        }), 
        __metadata('design:paramtypes', [grouplist_service_1.GroupList])
    ], JoinGroup);
    return JoinGroup;
}());
exports.JoinGroup = JoinGroup;
//# sourceMappingURL=joingroup.component.js.map