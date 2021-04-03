import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'mbs-booklisting',
  templateUrl: './booklisting.component.html',
  styleUrls: ['./booklisting.component.css']
})
export class BooklistingComponent implements OnInit {

  booklist;
  constructor(private http : HttpClient, private dataServiceService :DataServiceService){
  }
  ngOnInit(): void {
    this.http.get('https://us-central1-book-store-api-51848.cloudfunctions.net/book')
    .subscribe(Response => {
      console.log(Response);
      this.booklist=Response;
    });
  }

  addToCart(book){
    this.dataServiceService.myCatrListData = book;
    //console.log(book)
  }

}
