import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'mbs-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  myCartItem;
  constructor(private dataServiceService :DataServiceService) { }

  ngOnInit(): void {
    this.myCartItem = this.dataServiceService.myCatrListData
  }

}
