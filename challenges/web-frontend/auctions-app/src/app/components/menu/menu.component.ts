import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/login/services/auth.service';
import { RoleService } from './../../core/services/role.service';
import { Role } from './../../shared/models/roles';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  isLoggedIn$: Observable<boolean>;
  role$: Observable<Role>;
  roles = Role;

  constructor(private authService: AuthService, private router: Router, private roleService: RoleService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.role$ = this.roleService.role$;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
