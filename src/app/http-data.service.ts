import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpDataService {
  private baserUrl =
    'https://us-central1-book-store-api-51848.cloudfunctions.net/';

  constructor(private http: HttpClient) {}

  getData(endpoint) {
    return this.http.get(`${this.baserUrl}${endpoint}`);
  }

  postData(endpoint, data) {
    return this.http.post(`${this.baserUrl}${endpoint}`, data);
  }
}
