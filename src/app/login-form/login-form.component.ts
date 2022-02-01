import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  response: any;
  formData = {
    username: '',
    email: '',
    password: '',
  };
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(formData: any) {
    this.http
      .post('http://localhost:9092/auth/user/login', formData)
      .subscribe((data) => {
        this.response = data;
        console.log(this.response['jwtToken']);
        //This so far is for testing purposes only need to find a way to store the token without local storage
        localStorage.setItem('token', this.response['jwtToken']);
      });
  }
}
