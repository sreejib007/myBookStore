import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private fName:string;
  private lName:string;

  constructor() { }

  get myFname(){
    return this.fName;
  }
  set myFname(val){
    if(typeof val === 'string'){
      this.fName =val;
    }
  }
  get myLname(){
    return this.lName;
  }
  set myLname(val){
    if(typeof val === 'string'){
      this.lName =val;
    }
  }
}
