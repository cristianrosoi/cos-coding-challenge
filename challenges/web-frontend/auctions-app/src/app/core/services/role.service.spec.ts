import { TestBed } from '@angular/core/testing';
import { Role } from './../../shared/models/roles';
import { Token } from './../../shared/models/token';
import { RoleService } from './role.service';


describe('RoleService', () => {
  let service: RoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get role Buyer', () => {
    const tokenMock = { privileges: '{SALESMAN_USER}' } as Token;

    const result = service.getRole(tokenMock);

    expect(result).toEqual(Role.Buyer);
  });

  it('should get role Seller', () => {
    const tokenMock = { privileges: '' } as Token;

    const result = service.getRole(tokenMock);

    expect(result).toEqual(Role.Seller);
  });

  it('should get role Unknown', () => {
    const tokenMock = {} as Token;

    const result = service.getRole(tokenMock);

    expect(result).toEqual(Role.Unknown);
  });
});
