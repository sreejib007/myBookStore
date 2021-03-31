import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'mbs-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    console.log('From Booklist Component',this.dataService.myFname,
    this.dataService.myLname);
  }

}
