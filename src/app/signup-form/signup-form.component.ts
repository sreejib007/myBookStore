import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'mbs-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  user = {
    userName: '',
    user_Email: '',
    user_Fname: '',
    user_Lname: '',
    user_password: '',
  };

  constructor(private http: HttpDataService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.user.userName = this.signupForm.value.username;
    this.user.user_Email = this.signupForm.value.email;
    this.user.user_Fname = this.signupForm.value.firstName;
    this.user.user_Lname = this.signupForm.value.lastName;
    this.user.user_password = this.signupForm.value.password;
    this.http.postData('user', this.user).subscribe(() => {
      console.log('UserInformation submitted: ', this.user);
      this.http.getData('user').subscribe((data) => {
        console.log('GET', data);
      });
    });
  }

  onReset() {
    console.log('Reset form');
  }
}
