import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from './../../../../shared/models/login-form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<LoginForm>();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.initForm();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.submitForm.emit(this.loginForm.value);
    } else {
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

}
