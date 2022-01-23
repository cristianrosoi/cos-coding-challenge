import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleService } from './../../core/services/role.service';
import { Role } from './../../shared/models/roles';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  role$: Observable<Role>;
  roles = Role;

  constructor(private roleService: RoleService) {
    this.role$ = this.roleService.role$;
  }

}
