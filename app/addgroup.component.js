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
var AddGroup = (function () {
    function AddGroup(groupList) {
        this.groupList = groupList;
        this.groupAdded = false;
        this.user = "afzal";
        this.groupId = 4;
        this.groupId++;
    }
    AddGroup.prototype.onSubmit = function (value) {
        this.groupList.addGroup(value);
        this.groupAdded = true;
    };
    AddGroup = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './app/addgroup.component.html',
            styles: ["\n    #mainPanel{box-shadow: 0 0 2px 1px #bfc0c1;\n               background-color: white;\n               height: 77vh;\n               overflow-y: scroll;\n               padding-bottom: 20px;}\n\n     #mainPanel h1{color: #C8C8C8;}  \n\n     #mainPanel::-webkit-scrollbar {\n        width: 0.5em;\n     }\n    \n     #mainPanel::-webkit-scrollbar-track {\n         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n     }\n    \n     #mainPanel::-webkit-scrollbar-thumb {\n       background-color: darkgrey;\n       outline: 1px solid slategrey;\n     }\n\n    div.form-group{width: 100%;}\n  \n    .form-group > div{display: inline-block; width: 100%;}\n\n    .input{border: none;\n           outline: none;\n           box-shadow: none;\n           border-radius: 0px;\n           border-bottom: 1px solid #bfc0c1;\n           margin-bottom: 30px;\n           padding-top: 15px;}\n\n    .input-block{display: block;\n                 width: 100%;}\n                  \n    .input:focus{border-bottom: 2px solid blue;}\n\n    div.alert.alert-danger{padding: 6px;}\n    div.alert.alert-success{padding: 6px;\n                            margin-top: 15px;}\n\n    -webkit-autofill{background-color: white;}\n    \n  "]
        }), 
        __metadata('design:paramtypes', [grouplist_service_1.GroupList])
    ], AddGroup);
    return AddGroup;
}());
exports.AddGroup = AddGroup;
//# sourceMappingURL=addgroup.component.js.map