import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/auth/login/services/auth.service';
import { LoggedinGuard } from './loggedin.guard';


describe('LoggedinGuard', () => {
  let guard: LoggedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj('AuthService', [''], ['token'])
        }
      ]
    });
    guard = TestBed.inject(LoggedinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
