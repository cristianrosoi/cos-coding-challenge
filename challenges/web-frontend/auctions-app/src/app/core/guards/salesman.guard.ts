import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Role } from './../../shared/models/roles';
import { RoleService } from './../services/role.service';

@Injectable({
  providedIn: 'root'
})
export class SalesmanGuard implements CanActivate {

  constructor(private roleService: RoleService) {}
  
  canActivate(): Observable<boolean> {
    return this.roleService.role$.pipe(
      switchMap((role: Role) => {
        if (role === Role.Buyer) {
          return of(true)
        }

        return of(false)
      })
    );
  }
  
}
