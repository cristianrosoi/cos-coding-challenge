import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';


describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset errors on submit', () => {
    const spy = spyOn<any>(component, 'resetFormError');

    component.onSubmit();

    expect(spy).toHaveBeenCalled();
  });

  it('should submit form data if form is valid', () => {
    component.loginForm.controls.email.setValue('mock@test.de');
    component.loginForm.controls.password.setValue('123');

    const spy = spyOn<any>(component, 'submitFormData');

    component.onSubmit();

    expect(spy).toHaveBeenCalled();
  });

  it('should validate form', () => {
    const spy = spyOn<any>(component, 'validateForm');

    component.onSubmit();

    expect(spy).toHaveBeenCalled();
  });
});
