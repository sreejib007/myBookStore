import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mbs-reactiveform',
  templateUrl: './reactiveForm.component.html',
  styleUrls: ['./reactiveForm.component.css']
})
export class ReactiveForm implements OnInit {
  
  myForm:FormGroup;

  // myFormObj = [
  //   {formControlName:'projectName', type: 'text', id:'pName', error:''},
  //   {formControlName:'email', type: 'email', id:'email',error:''}
  // ]
 
  ngOnInit() {
    this.myForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required]
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    })
  }

  onSaveProject() {

    console.log(this.myForm)
  }
}
