import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'src/app/auth/login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {
  
  constructor(private authService: AuthService) {
    
  }
  
  canActivate(): boolean {
    if (!this.authService.token?.authenticated) {
      return true;
    }

    return false;
  }
  
}
