import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service.service';


@Component({
  selector: 'mbs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  link:string;
  dummy:any;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private router:Router, private dataServiceService: DataService) { 
    this.link = '/booklist'
    this.dummy = [
      {id:1, name:'Sreejib'},
      {id:2, name:'Rahul'},
      {id:3, name:'Prateek'},
    ]
  }

  ngOnInit(): void {
    this.dataServiceService.myFname = 'Sreejib';
    this.dataServiceService.myLname = 'Das';
    console.log('Home component',this.dataServiceService.myFname, this.dataServiceService.myLname)
  }

  goTo(data?){
    if(data){
      this.dataServiceService.myFname = 'Rahul';
      this.dataServiceService.myLname = 'Das';
      this.router.navigateByUrl(data);
    }else{
      console.log('no data')
    }
  }

  update(){
    this.newItemEvent.emit('Sreejib');
    this.dataServiceService.toggleSidebarVisibility(false);
  }

}
