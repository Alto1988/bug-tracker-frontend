import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  response: any;

  constructor(private http: HttpClient) {}

  login(username: string, email: string, password: string) {
    return this.http.post<User>('http://localhost:9092/auth/user/login', {
      username,
      email,
      password,
    });
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}

type User = {
  username: string;
  email: string;
  password: string;
};
