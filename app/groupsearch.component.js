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
var GroupSearch = (function () {
    function GroupSearch() {
        this.groupsInfo = [
            { name: 'ng2Group', team: 'Afzal', date: '20-Sep-2016' },
            { name: 'React', team: 'Umair', date: '20-Sep-2016' },
            { name: 'JavaScriptChamps', team: 'Ahmed', date: '25-June-2016' },
            { name: 'Web Designers', team: 'Mudassir', date: '12-Jan-2016' },
            { name: 'Java Programmers', team: 'Afzal', date: '10-Feb-2016' },
            { name: 'ng1Group', team: 'Salik', date: '29-Dec-2015' },
        ];
    }
    GroupSearch = __decorate([
        core_1.Component({
            selector: 'search-group',
            template: "\n    <div id=\"searchPanel\">\n      <div id=\"searchBox\">\n        <div id=\"searchIcon\"><i class=\"fa fa-search\"></i></div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" name=\"search\" id=\"search\" placeholder=\"Search\">\n        </div>        \n        <div class=\"dropdown pull-right\">\n          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Every One\n          <span class=\"caret\"></span></button>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Every One</a></li>\n            <li><a href=\"#\">Online</a></li>\n            <li><a href=\"#\">Offline</a></li>\n          </ul>\n        </div>\n\n      </div>\n      <div id=\"resultBox\">\n        <table class=\"table table-striped\">\n            <tr>\n                <th>Name</th>\n                <th>Team</th>\n                <th>Last Modified</th>\n            </tr>\n\n            <tr *ngFor=\"let group of groupsInfo\">\n                <td>{{group.name}}</td>\n                <td>{{group.team}}</td>\n                <td>{{group.date}}</td>\n            </tr>\n        </table>      \n      </div>\n    </div>      \n\n  ",
            styles: ["\n    #searchPanel{box-shadow: 0 0 2px 1px #bfc0c1;\n                 background-color: white;\n                 height: 77vh;}\n\n     #searchPane::-webkit-scrollbar {\n        width: 0.5em;\n     }\n    \n     #searchPane::-webkit-scrollbar-track {\n         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n     }\n    \n     #searchPane::-webkit-scrollbar-thumb {\n       background-color: darkgrey;\n       outline: 1px solid slategrey;\n     }\n\n\n    #searchBox>*{display: inline-block;}\n    #searchBox{border-bottom: 1px solid lightgrey;\n               padding: 0.5em;}\n\n    #searchIcon{font-size: 2em; padding: 0.4em; color: #6a6a6a;}\n\n    input#search, input#search:focus{border: none;\n                                     outline: none;\n                                     font-size: 1.2em;\n                                     box-shadow: none;}\n    \n    button.btn.btn-primary.dropdown-toggle{border-radius: 0px;\n                                           color: #BDBDBD;\n                                           font-size: 1.2em;\n                                           background-color: transparent;\n                                           border: none;\n                                           margin: 15px auto;\n                                           border-bottom: 1px solid #BDBDBD;\n    }\n\n    .dropdown-menu{position: absolute;\n                   top: 10px;}\n\n    #searchResult{padding: 2em;}\n\n    table{font-size: 0.95em;}\n\n    table th, table td{color: #6CCDF9;\n                       text-align: center;}\n\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], GroupSearch);
    return GroupSearch;
}());
exports.GroupSearch = GroupSearch;
//# sourceMappingURL=groupsearch.component.js.map