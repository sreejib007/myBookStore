import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mbs-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Submitted!');
  }

  onReset() {
    console.log('Reset form');
  }

}
