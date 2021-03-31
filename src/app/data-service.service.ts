import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private fname:string;
  private lname:string;
  private isSidebarBVisible : boolean = false;
  sidebarVisibilliltyChange: Subject<boolean> = new Subject<boolean>();

  constructor() { }
  get myFname(){
    return this.fname;
  }
  set myFname(val){
    if (typeof val ==='string' ){
      this.fname= val;
    }else{
      alert("wrong data")
    }
  }

  get myLname(){
    return this.lname;
  }
  set myLname(val){
    if (typeof val ==='string' ){
      this.lname= val;
    }else{
      alert("wrong data")
    }
  }
}
