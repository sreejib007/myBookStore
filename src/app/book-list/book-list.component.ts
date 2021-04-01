import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'mbs-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private dataServiceService: DataService) { }

  ngOnInit(): void {
    this.dataServiceService.sidebarVisibilityChange.subscribe((value) => {
      console.log('Latest Value is', value);
    });
    console.log('From BookList component',this.dataServiceService.myFname, this.dataServiceService.myLname)
  }

}
