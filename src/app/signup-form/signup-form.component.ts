import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'mbs-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  // userInfo: {username:string, email:string, phone:string, password:string, rePassword:string}

  constructor(private formBuilder: FormBuilder) { }

  signupForm = this.formBuilder.group({
    username: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: ''
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Submitted data: ', this.signupForm.value);
  }

  onReset() {
    this.signupForm.reset();
  }

}
