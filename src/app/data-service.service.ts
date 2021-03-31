import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private fName: string;
  private lName: string;
  private isSidebarVisible : boolean = false;
  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.sidebarVisibilityChange.subscribe((value) => {
      this.isSidebarVisible = value
    });
   }

  toggleSidebarVisibility(val) {
    this.sidebarVisibilityChange.next(val);
  }

  get myFname(){
    return this.fName;
  }

  set myFname(val){
    if(typeof val === 'string'){
      this.fName = val;
    }else{
      console.log('Wrong Data type')
    }
  }

  get myLname(){
    return this.lName;
  }

  set myLname(val){
    if(typeof val === 'string'){
      this.lName = val;
    }else{
      console.log('Wrong Data type')
    }
  }
}
