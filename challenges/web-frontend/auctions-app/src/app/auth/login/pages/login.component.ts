import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginForm } from './../../../shared/models/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(credentials: LoginForm) {
    this.authService.login(credentials).subscribe();
  }

}
