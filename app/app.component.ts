import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']   
})

export class AppComponent {

  groupIconsHidden: boolean = true;
  


  constructor(){

  }

  toggle(){

    if(this.groupIconsHidden){
      $("#nav-list a:not(.last-child)").fadeIn(1000);  
      this.groupIconsHidden =false;
    }else{
      $("#nav-list a:not(.last-child)").fadeOut(1000);
      this.groupIconsHidden = true;        
    }

  }
   
}