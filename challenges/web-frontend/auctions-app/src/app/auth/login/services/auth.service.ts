import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Login, LoginForm } from '../../../shared/models/login-form';
import { environment } from './../../../../environments/environment';
import { RoleService } from './../../../core/services/role.service';
import { Logout, TokenManagement } from './../../../shared/models/login-form';
import { Role } from './../../../shared/models/roles';
import { Token } from './../../../shared/models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements Login, Logout, TokenManagement {

  private static readonly url = environment.endpoints.authentication;
  
  isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();
  
  private tokenObject: Token | null = null;

  constructor(private http: HttpClient, private roleService: RoleService) { }

  get token(): Token | null {
    return this.tokenObject;
  }

  set newToken(token: Token | null) {
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
      switchMap(() => this.getToken(url, body))
    )
  }

  checkToken(credentials: LoginForm): Observable<Token> {
    const token: Token | null = this.loadToken();
    
    if (token) {
      this.newToken = token;
      this.getRole(token);
      return of(token);
    } else {
      return this.login(credentials);
    }
  }

  logout(): void {
    this.newToken = null;
    this.isLoggedIn.next(false);
    this.removeToken();
  }

  saveToken(token: Token): void {
    if (token) {
      sessionStorage.setItem('token', JSON.stringify(token));
    }
  }

  loadToken(): Token | null {
    const serializedToken: string | null = sessionStorage.getItem('token');
    if (serializedToken) {
      return JSON.parse(serializedToken);
    }

    return null;
  }

  removeToken(): void {
    sessionStorage.clear();
  }

  private verifyEmail(mailAddress: string): Observable<void> {
    const url = `${AuthService.url}/${mailAddress}/registered`;
    return this.http.get<void>(url);
  }

  private getRole(token: Token | null): Role {
    if (token) {
      return this.roleService.getRole(token);
    }

    return Role.Unknown;
  }

  private getToken(url: string, body: { password: string; meta: string; }): Observable<Token> {
    return this.http.put<Token>(url, body).pipe(
      tap((token: Token) => {
        this.manageToken(token);
      })
    );
  }

  private manageToken(token: Token) {
    this.newToken = token;
    this.isLoggedIn.next(true);
    this.saveToken(token);
    this.getRole(token);
  }
}

