import { Observable } from 'rxjs';
import { Token } from './token';

export interface LoginForm {
  email: string;
  password: string;
}

export interface Login {
  login(credentials: LoginForm): Observable<Token>;
}

export interface Logout {
  logout(): void;
}

export interface TokenManagement {
  saveToken(token: Token): void;
  loadToken(): Token | null;
  removeToken(): void;
}