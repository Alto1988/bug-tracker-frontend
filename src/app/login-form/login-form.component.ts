import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';

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
  form: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private auth: LoginServiceService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

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
    this.router.navigate(['/']);
  }

  onRegister(formData: any) {
    this.http
      .post('http://localhost:9092/auth/user/register', formData)
      .subscribe((data) => {
        this.response = data;
        console.log(this.response['jwtToken']);
        //This so far is for testing purposes only need to find a way to store the token without local storage
        localStorage.setItem('token', this.response['jwtToken']);
      });
    this.router.navigate(['/']);
  }

  login() {
    const formValues = this.form.value;
    if (formValues.email && formValues.password && formValues.username) {
      this.auth
        .login(formValues.username, formValues.email, formValues.password)
        .subscribe(() => {
          console.log('logged in');
          this.router.navigate(['/']);
        });
    }
  }
}
