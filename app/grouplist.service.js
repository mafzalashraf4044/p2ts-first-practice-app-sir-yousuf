"use strict";
var GroupList = (function () {
    function GroupList() {
        this.groups = [];
        this.groupsOfCurrentUser = [];
        this.groups.push({ name: 'ng2Group', cell: '03001234567', address: 'Gulshan-e-Iqbal', username: 'afzal', groupid: 1 });
        this.groups.push({ name: 'ng2Group', cell: '03001234567', address: 'Gulshan-e-Iqbal', username: 'ali', groupid: 2 });
        this.groups.push({ name: 'ng2Group', cell: '03001234567', address: 'Gulshan-e-Iqbal', username: 'afzal', groupid: 3 });
        this.updateCurrentUserGroupList();
    }
    GroupList.prototype.addGroup = function (group) {
        this.groups.push(group);
        this.updateCurrentUserGroupList();
    };
    GroupList.prototype.getGroups = function () {
        return this.groups;
    };
    GroupList.prototype.getGroupsOfCurrentUser = function () {
        return this.groupsOfCurrentUser;
    };
    GroupList.prototype.updateCurrentUserGroupList = function () {
        this.groupsOfCurrentUser = [];
        for (var i = 0; i < this.groups.length; i++) {
            if (this.groups[i].username == 'afzal') {
                this.groupsOfCurrentUser.push(this.groups[i]);
            }
        }
    };
    GroupList.prototype.deleteGroup = function (id) {
        for (var i = 0; i < this.groups.length; i++) {
            if (id == this.groups[i].groupid) {
                this.groups.splice(i, 1);
            }
        }
        this.updateCurrentUserGroupList();
    };
    return GroupList;
}());
exports.GroupList = GroupList;
//# sourceMappingURL=grouplist.service.js.map