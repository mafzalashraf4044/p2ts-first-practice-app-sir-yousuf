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
var Group = (function () {
    function Group() {
    }
    Group = __decorate([
        core_1.Component({
            selector: 'group',
            template: "\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n\n            <div *ngFor=\"let group of groups\">\n              <div class=\"groupCard\"> \n                <img src=\"https://s3-us-west-2.amazonaws.com/defaultimgs/teamofteams.png\">\n\n                <h3>{{group.name}}</h3>\n                <h5><i class=\"fa fa-map-marker\"></i> {{group.address}}</h5>\n\n                <div class=\"container-fluid\">\n                  <div class=\"row groupBottom\">\n                    <div class=\"col-md-4\">\n                      <a href=\"#\" id=\"profile\"><i class=\"fa fa-user\"></i></a>\n                    </div>\n                    \n                    <div class=\"col-md-8\">\n                      <h5>{{group.cell}}</h5>\n                    </div>\n                  </div>\n                \n                </div>              \n              </div>\n            </div>      \n        </div>\n    </div>    \n\n\n  ",
            styles: ["\n    .row{text-align: center;}\n    .row > *{display: inline-block;}\n\n    .groupCard{box-shadow: 0 0 2px 1px #bfc0c1;\n               background-color: white;\n               width: 99%;\n               color: #6CCDF9;\n               width: 200px;\n               display: inline-block;\n               margin: 0px 10px 15px 10px}\n\n    .groupCard > h5, .groupCard > h3{text-align: center;}\n\n    .groupBottom{border-top: 2px solid #bfc0c1;}\n\n    .groupBottom > .col-md-4{border-right: 2px solid #bfc0c1;}\n\n\n    img{display: block;\n        margin: 0 auto;\n        width: 130px;\n        height: 130px;}\n\n    #profile{display: inline-block;\n             border-radius: 100%;\n             background-color: #f0efef;\n             padding: 10px;\n             margin: 5px;}\n\n\n    \n  \n  "],
            inputs: ['groups'],
        }), 
        __metadata('design:paramtypes', [])
    ], Group);
    return Group;
}());
exports.Group = Group;
//# sourceMappingURL=group.component.js.map