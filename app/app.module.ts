import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


//Services
import {GroupList} from './grouplist.service';

//Components
import { Home } from './home.component';
import { GroupSearch } from './groupsearch.component';
import { Group } from './group.component';
import { AddGroup } from './addgroup.component';
import { JoinGroup } from './joingroup.component';
import { DeleteGroup } from './deletegroup.component';

//Routers
import { RouterModule, Router, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',          redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',      component: Home },
  { path: 'addgroup', component: AddGroup },
  { path: 'joingroup', component: JoinGroup },
  { path: 'delete', component: DeleteGroup }    
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, GroupSearch, Group, Home, AddGroup, JoinGroup, DeleteGroup],
  bootstrap:    [ AppComponent ],
  providers: [GroupList]
  
})

export class AppModule { }
