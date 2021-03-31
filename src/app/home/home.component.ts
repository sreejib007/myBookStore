import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import {Router} from '@angular/router'
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'mbs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  link:string
  register:string

  @Output() newItemEvent= new EventEmitter<string>();
  constructor(private router:Router, private dataServiceService:DataServiceService) {
    this.link='/booklist';
    //this.register='/registration-form'
   }
   goTo(data?){
     if(data){
       this.router.navigateByUrl(data)
     }
     else{
       alert("no data")
     }
   }
   update(){
     this.dataServiceService.myFname="Mmohamed"
     console.log("updated",this.dataServiceService.myFname,this.dataServiceService.myLname)
      // this.newItemEvent.emit("hi");
   }

  ngOnInit(): void {
    this.dataServiceService.myFname="Mohamed"
    this.dataServiceService.myLname="Foise"
    console.log("Home>>",this.dataServiceService.myFname,this.dataServiceService.myLname);
  }

}
