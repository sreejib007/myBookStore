import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  baseUrl = environment.apiUrl
  constructor(private http:HttpClient) { }

  getData(url){
    let mainUrl = this.baseUrl + url
    return this.http.get(mainUrl)
  }

  postData(url, data){
    let mainUrl = this.baseUrl + url
    return this.http.post(mainUrl,data)
  }
}
