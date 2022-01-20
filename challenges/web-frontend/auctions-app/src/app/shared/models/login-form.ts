import { Observable } from 'rxjs';

export interface LoginForm {
  email: string;
  password: string;
}

export interface Login {
  login(credentials: LoginForm): Observable<any>;
}

export interface Logout {
  logout(): void;
}