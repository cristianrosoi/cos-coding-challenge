import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { LoginForm } from './../../../shared/models/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  error: HttpErrorResponse | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(credentials: LoginForm) {
    this.authService.checkToken(credentials)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.error = error;
          console.log('Error occured on login', error);
          return EMPTY;
        })
      )
      .subscribe(
        () => this.router.navigate(['/overview'])
      );
  }

}

