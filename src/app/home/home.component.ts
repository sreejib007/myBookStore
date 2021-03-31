import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service.service';

@Component({
  selector: 'mbs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  link:string;

  constructor(private router:Router,private dataService:DataService) { 
    this.link='/booklist';
  }

  goTo(data){
    this.dataService.myFname = "chandraSekhar";
    this.dataService.myLname="kothamasu";
    this.router.navigateByUrl(data);
  }

  ngOnInit(): void {
    this.dataService.myFname = "chandra";
    this.dataService.myLname="kottamasu";
    console.log(this.dataService.myFname,this.dataService.myLname);


  }

}
