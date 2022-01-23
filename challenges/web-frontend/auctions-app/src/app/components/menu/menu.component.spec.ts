import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/auth/login/services/auth.service';
import { RoleService } from './../../core/services/role.service';
import { MenuComponent } from './menu.component';


describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj('AuthService', ['logout'], ['isLoggedIn$'])
        },
        {
          provide: RoleService,
          useValue: jasmine.createSpyObj('RoleService', [''], ['role$'])
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    authService = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout and navigate away', () => {
    authService.logout = jasmine.createSpy();
    const routerSpy = spyOn(component['router'], 'navigate');

    component.onLogout();

    expect(authService.logout).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalled();
  });
});
