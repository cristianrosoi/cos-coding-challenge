import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { LoginForm } from './../../../shared/models/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {

  error: HttpErrorResponse | null = null;

  private unsubscribe = new Subject<void>();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onSubmit(credentials: LoginForm): void {
    this.authService.checkToken(credentials)
      .pipe(
        takeUntil(this.unsubscribe),
        catchError((error: HttpErrorResponse) => {
          return this.handleError(error);
        })
      )
      .subscribe(
        () => this.router.navigate(['/home'])
      );
  }


  private handleError(error: HttpErrorResponse) {
    this.error = error;
    console.log('Error occured on login', error);
    return EMPTY;
  }
}

