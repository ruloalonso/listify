import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { User } from '../shared/user.model';

@Injectable()
export class AuthService {
  token: string;
  username: string;
  user: User;

  constructor(private router: Router,
              private http: HttpClient) {}

  getUserInfo(username: string) {
      return this.http.get('https://listify-ruloalonso.c9users.io/api/user/' + username);
  }

  signinUser(username: string, password: string) {
    return this.http
      .post(
        'https://listify-ruloalonso.c9users.io/api/login',
        {'username': username, 'password': password},
        {headers : {
          'Content-Type' : 'application/json'
        }})
      .map(
          (data: any) => {
            this.token = data.user.token;
            this.username = data.user.username;
            localStorage.setItem('username', data.user.username);
            localStorage.setItem('token', data.user.token);
            this.user = data.user;
            this.router.navigate(['/lists']);
        });
  }

  signupUser(username: string, password: string) {
    return this.http
      .post(
        'https://listify-ruloalonso.c9users.io/api/register',
        {'username': username, 'password': password},
        {headers : {
          'Content-Type' : 'application/json'
        }})
      .map(
        (user: User) => {
          this.token = user.token;
          this.username = username;
          this.router.navigate(['/lists']);
        });
  }

  logout() {
    this.token = null;
    this.router.navigate(['/']);
    localStorage.clear();
  }

  isAuthenticated() {
    return this.token != null;
  }
}
