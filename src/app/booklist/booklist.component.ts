import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'mbs-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private dataServiceService:DataServiceService) { }
  goToDetails(){
    alert("Details");
  }
  ngOnInit(): void {
    console.log("BookList>>",this.dataServiceService.myFname,this.dataServiceService.myLname)
  }

}
