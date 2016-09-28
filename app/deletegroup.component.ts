import {Component} from "@angular/core";

//Serivce
import {GroupList} from './grouplist.service';

@Component({
  selector: 'dlt',
  template: `
    <div class="container" id="mainPanel">
        <h1>Delete Groups</h1>
        <hr>
        <div class="row">
            
            <div *ngFor="let group of groups">
              <div class="groupCard"> 
                <img src="https://s3-us-west-2.amazonaws.com/defaultimgs/teamofteams.png">

                <h3>{{group.name}}</h3>
                <h5><i class="fa fa-map-marker"></i> {{group.address}}</h5>

                <div class="container-fluid">
                  <div class="row groupBottom">
                    <div class="col-md-12">
                      <a (click)="deleteGroup(group.groupid)"><i class="fa fa-remove"></i> Delete</a>
                    </div>                    
                  </div>
                
                </div>              
              </div>
            </div>      
        </div>
    </div>    
  
  `,
  styles: [`
    
    #mainPanel{box-shadow: 0 0 2px 1px #bfc0c1;
               background-color: white;
               height: 77vh;
               overflow-y: scroll;}
    #mainPanel h1{color: #C8C8C8;}  

     #mainPanel::-webkit-scrollbar {
        width: 0.5em;
     }
    
     #mainPanel::-webkit-scrollbar-track {
         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
     }
    
     #mainPanel::-webkit-scrollbar-thumb {
       background-color: darkgrey;
       outline: 1px solid slategrey;
     }
     
    .row{text-align: center;}
    .row > *{display: inline-block;}

    .groupCard{box-shadow: 0 0 2px 1px #bfc0c1;
               background-color: white;
               width: 99%;
               color: #6CCDF9;
               width: 200px;
               display: inline-block;
               margin: 0px 10px 15px 10px}

    .groupCard > h5, .groupCard > h3{text-align: center;}

    .groupBottom{border-top: 2px solid #bfc0c1;}

    .groupBottom > .col-md-4{border-right: 2px solid #bfc0c1;}

    .groupBottom a{text-decoration: none; font-weight: bold; cursor: hand;}

    img{display: block;
        margin: 0 auto;
        width: 130px;
        height: 130px;}

    

  
  `]
})

export class DeleteGroup{
  groups: any[];

  constructor(private groupList: GroupList){
    this.groups = groupList.getGroups();
  }

  deleteGroup(id){
   this.groupList.deleteGroup(id);
  }

}