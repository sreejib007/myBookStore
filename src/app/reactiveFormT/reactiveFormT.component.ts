import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'mbs-rform',
  templateUrl: './reactiveFormT.component.html',
  styleUrls: ['./reactiveFormT.component.css']
})
export class ReactiveFormT implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData': {
        'username': 'Sreejib',
        'email': 'sreejib@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    // this.signupForm.patchValue({
    //   'userData': {
    //     'username': 'Rahul',
    //   }
    // });
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Sreejib',
    //   },
    // });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
    //this.signupForm.get('hobbies').push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
}
