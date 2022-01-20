import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginForm } from '../../../shared/models/login-form';
import { Logout } from './../../../shared/models/login-form';

@Injectable()
export class AuthService implements Login, Logout {

  constructor(private http: HttpClient) { }

  login(credentials: LoginForm): Observable<any> {
    const url = '';
    return this.http.post(url, credentials);
  }

  logout(): void {}
}
