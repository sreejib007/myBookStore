import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'mbs-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  id: number
  name: string
  userData: any;
  formData: {userName: string, password:string} = {userName:'', password:''}
  constructor(private rought:ActivatedRoute, private httpreq: HttpDataService) { }

  ngOnInit(): void {
    // this.id = this.rought.snapshot.params['id'];
    // this.name = this.rought.snapshot.params['name'];
    this.rought.params.subscribe((params:Params)=>{
      console.log(params['id'])
      this.id = params['id']
      this.name = params['name'];

   })

  //  this.httpreq.getData('https://us-central1-book-store-api-51848.cloudfunctions.net/user').subscribe((res)=>{
  //     console.log('My Data from get', res);
  //  })


  }

  //apiUrl: 'https://us-central1-book-store-api-51848.cloudfunctions.net'
  creatData(){
    let data= {
      "userName": "sreejib1992",
      "user_Email": "sreejibdas1991@gmail.com",
      "user_password": "Welcome@2021",
      "user_Fname": "Sreejib",
      "user_Lname": "Das"
    };
    this.httpreq.postData('/user',data).subscribe((res)=>{
      this.getData();
    })
  }

  getData(){
    this.httpreq.getData('/user').subscribe((res)=>{
      console.log('My Data from get', res);
      this.userData = res;
   })
  }

  submit(){
    console.log('My user name and passowrd is',this.formData)
  }

}
