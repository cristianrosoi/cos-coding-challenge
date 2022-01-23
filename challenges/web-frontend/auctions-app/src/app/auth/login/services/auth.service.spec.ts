import { Token } from './../../../shared/models/token';
import { LoginForm } from './../../../shared/models/login-form';
import { RoleService } from './../../../core/services/role.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { of } from 'rxjs';


describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: RoleService,
          useValue: jasmine.createSpyObj('RoleService', ['getRole'])
        }
      ]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should verify user's email`, fakeAsync(() => {
    const credentialsMock = {
      email: 'test@mock.de',
      password: '123'
    } as LoginForm;

    const verifyEmailSpy = spyOn<any>(service, 'verifyEmail').and.callFake(() => of(''));

    service.login(credentialsMock).subscribe();
    flushMicrotasks();

    expect(verifyEmailSpy).toHaveBeenCalledOnceWith(encodeURIComponent(credentialsMock.email));
  }));

  it('should load token', fakeAsync(() => {
    const credentialsMock = {
      email: 'test@mock.de',
      password: '123'
    } as LoginForm;

    const tokenMock = {privileges: ''} as Token;

    const loadSpy = spyOn(service, 'loadToken').and.returnValue(tokenMock);
    const roleSpy = spyOn<any>(service, 'getRole');

    service.checkToken(credentialsMock);

    expect(loadSpy).toHaveBeenCalled();
    expect(roleSpy).toHaveBeenCalledOnceWith(tokenMock);
  }));

  it('should call login if can not load token', fakeAsync(() => {
    const credentialsMock = {
      email: 'test@mock.de',
      password: '123'
    } as LoginForm;

    const loadSpy = spyOn(service, 'loadToken').and.returnValue(null);
    const roleSpy = spyOn<any>(service, 'getRole');
    const loginSpy = spyOn(service, 'login');

    service.checkToken(credentialsMock);

    expect(loadSpy).toHaveBeenCalled();
    expect(roleSpy).not.toHaveBeenCalled();
    expect(loginSpy).toHaveBeenCalledOnceWith(credentialsMock);
  }));

  it('should remove token', () => {
    const removeSpy = spyOn(service, 'removeToken');
    const isLoggedInSpy = spyOn(service.isLoggedIn, 'next');
    
    service.logout();

    expect(removeSpy).toHaveBeenCalled();
    expect(isLoggedInSpy).toHaveBeenCalledOnceWith(false);
    expect(service.token).toBeNull();
  });

  it('should persist the token in session storage', () => {
    const spy = spyOn(sessionStorage, 'setItem');
    const tokenMock = {} as Token;

    service.saveToken(tokenMock);

    expect(spy).toHaveBeenCalledOnceWith('token', JSON.stringify(tokenMock));
  })
});
