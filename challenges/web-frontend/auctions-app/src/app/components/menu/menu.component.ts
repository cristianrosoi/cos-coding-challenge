import { RoleService } from './../../core/services/role.service';
import { Token } from './../../shared/models/token';
import { Role } from './../../shared/models/roles';
import { AuthService } from 'src/app/auth/login/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  role$: Observable<Role>;
  roles = Role;

  constructor(private authService: AuthService, private router: Router, private roleService: RoleService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.role$ = this.roleService.role$.pipe(tap((role: Role) => console.log('menu role', role)));
  }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
