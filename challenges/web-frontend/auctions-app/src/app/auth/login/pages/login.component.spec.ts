import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth/login/services/auth.service';
import { LoginForm } from './../../../shared/models/login-form';
import { LoginFormComponent } from './../components/login-form/login-form.component';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, LoginFormComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj('AuthService', ['checkToken'])
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to home page when login is succesful', fakeAsync(() => {
    const credentialsMock = {
      email: 'test@mock.de',
      password: '123'
    } as LoginForm;

    authService.checkToken = jasmine.createSpy().and.returnValue(of());

    authService.checkToken(credentialsMock)
      .subscribe(
        () => expect(router.navigate).toHaveBeenCalledWith(['/home'])
      )

    component.onSubmit(credentialsMock);
    flushMicrotasks();
  }));
});
