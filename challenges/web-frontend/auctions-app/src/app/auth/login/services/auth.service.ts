import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Login, LoginForm } from '../../../shared/models/login-form';
import { environment } from './../../../../environments/environment';
import { Logout } from './../../../shared/models/login-form';
import { Token } from './../../../shared/models/token';

@Injectable()
export class AuthService implements Login, Logout {

  private static readonly url = environment.endpoints.authentication;
  
  private tokenObject: Token | null = null;

  constructor(private http: HttpClient) { }

  get token(): Token | null {
    return this.tokenObject;
  }

  set newToken(token: Token) {
    this.tokenObject = token;
  }

  login(credentials: LoginForm): Observable<Token> {
    const mailAddress = encodeURIComponent(credentials.email);
    const url = `${AuthService.url}/${mailAddress}`;
    const body = {
      password: credentials.password,
      meta: new Date().toISOString()
    }

    return this.verifyEmail(mailAddress).pipe(
      switchMap(() => {
        return this.http.put<Token>(url, body).pipe(
          tap((token: Token) => this.newToken = token)
        );
      })
    )
  }

  logout(): void {}

  private verifyEmail(mailAddress: string): Observable<void> {
    const url = `${AuthService.url}/${mailAddress}/registered`;
    return this.http.get<void>(url);
  }
}

