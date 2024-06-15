import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BoxComponent } from 'components/box/box.component';
import { ButtonComponent } from 'components/button/button.component';
import { InputComponent } from 'components/input/input.component';
import { LogoComponent } from 'components/logo/logo.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    LogoComponent,
    ButtonComponent,
    InputComponent,
    BoxComponent,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    public router: Router,
    private http: HttpClient,
  ) {}

  registerForm = new FormGroup({
    login: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    password_confirmation: new FormControl(""),
  })

  errors: string = ""
  success = false;

  onSubmit(): void {
    this.http
      .post('/api/auth/register', this.registerForm.value)
      .subscribe(
        val => { this.success = true },
        err => { this.errors = err.error.message }
      )
  }
}
