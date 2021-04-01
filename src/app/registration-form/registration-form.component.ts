import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'mbs-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }
  register(){
    alert("registered");
  }

  ngOnInit(): void {
  }

}
