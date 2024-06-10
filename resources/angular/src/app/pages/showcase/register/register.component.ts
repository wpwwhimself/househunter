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
    repeat_password: new FormControl(""),
  })

  errors: string = ""

  onSubmit(): void {
    // check repeat password
    if (this.registerForm.value.password !== this.registerForm.value.repeat_password) {
      this.errors = "Hasła nie pasują"
      return
    }

    this.http.post('/api/auth/register', this.registerForm.value)
      .pipe()
  }
}
