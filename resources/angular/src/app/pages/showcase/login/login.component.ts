import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BoxComponent } from 'components/box/box.component';
import { ButtonComponent } from 'components/button/button.component';
import { InputComponent } from 'components/input/input.component';
import { LogoComponent } from 'components/logo/logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LogoComponent,
    ButtonComponent,
    InputComponent,
    BoxComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    public router: Router,
    private http: HttpClient,
  ) {}

  loginForm = new FormGroup({
    login: new FormControl(""),
    password: new FormControl(""),
  })

  errors: string = ""

  onSubmit(): void {
    this.http.get("/sanctum/csrf-cookie")

    this.http
      .post("/api/auth/login", this.loginForm.value)
      .subscribe(
        val => { this.router.navigate(['dashboard']) },
        err => { this.errors = err.error.message }
      )
  }
}
