import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/login/services/auth.service';
import { Token } from './shared/models/token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadToken();
  }

  private loadToken(): void {
    const token: Token | null = this.authService.loadToken();

    if (token) {
      this.authService.newToken = token;
      this.authService.isLoggedIn.next(this.authService.token?.authenticated || false);
    }
  }
}
