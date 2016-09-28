export class GroupList{
    groups = [];
    groupsOfCurrentUser = [];

    constructor(){
         this.groups.push({name: 'ng2Group', cell: '03001234567', address: 'Gulshan-e-Iqbal', username: 'afzal', groupid: 1}); 
         this.groups.push({name: 'ng2Group', cell: '03001234567', address: 'Gulshan-e-Iqbal', username: 'ali', groupid: 2 }); 
         this.groups.push({name: 'ng2Group', cell: '03001234567', address: 'Gulshan-e-Iqbal', username: 'afzal', groupid: 3}); 
  
         this.updateCurrentUserGroupList();


   }

    addGroup(group){
        this.groups.push(group);
        
         this.updateCurrentUserGroupList();        
    }

    getGroups(){
        return this.groups;
    }

    getGroupsOfCurrentUser(){
        return this.groupsOfCurrentUser;
    }

    updateCurrentUserGroupList(){
        this.groupsOfCurrentUser = [];
        for(let i = 0; i<this.groups.length; i++){

        if(this.groups[i].username == 'afzal'){
            this.groupsOfCurrentUser.push(this.groups[i]);
        }
        }
        
    }
    
    deleteGroup(id){
        
        for(let i = 0; i<this.groups.length; i++){
            if(id == this.groups[i].groupid){
                this.groups.splice(i, 1);
            }
        }

         this.updateCurrentUserGroupList();

    }

}
   