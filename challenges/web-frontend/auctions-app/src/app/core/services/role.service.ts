import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Role } from './../../shared/models/roles';
import { Token } from './../../shared/models/token';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private role = new BehaviorSubject<Role>(Role.Unknown);
  role$ = this.role.asObservable();


  getRole(token: Token): Role {
    const role = token?.privileges;

    switch(role) {
      case "{SALESMAN_USER}":
        this.role.next(Role.Buyer);
        return Role.Buyer
      
      case "":
        this.role.next(Role.Seller);
        return Role.Seller;

      default:
        this.role.next(Role.Unknown);
        return Role.Unknown
    }
  }
}
