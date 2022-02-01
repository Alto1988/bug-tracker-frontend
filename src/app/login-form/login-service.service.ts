import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  response: any;
  constructor(private http: HttpClient) {}

  login() {
    return this.http.post(
      'http://localhost:9092/auth/user/login',
      this.response
    );
  }
}
