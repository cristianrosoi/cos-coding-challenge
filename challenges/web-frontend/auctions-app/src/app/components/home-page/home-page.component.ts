import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/login/services/auth.service';
import { RoleService } from './../../core/services/role.service';
import { Role } from './../../shared/models/roles';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  role$: Observable<Role>;
  roles = Role;

  constructor(private authService: AuthService, private roleService: RoleService) {
    this.role$ = this.roleService.role$;
  }

  ngOnInit(): void {
  }

}
