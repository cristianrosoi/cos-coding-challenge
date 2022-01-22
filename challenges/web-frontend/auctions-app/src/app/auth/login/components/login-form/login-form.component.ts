import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from './../../../../shared/models/login-form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() error: HttpErrorResponse | null = null;
  @Output() submitForm = new EventEmitter<LoginForm>();

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.initForm();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.resetFormError();

    if (this.loginForm.valid) {
      this.isSubmitted = true;
      this.submitForm.emit(this.loginForm.value);
    } else {
      this.isSubmitted = false;
      this.loginForm.markAllAsTouched();
    }
  }

  private initForm(): FormGroup {
    const form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    return form;
  }

  private resetFormError(): void {
    this.error = null;
  }

}
