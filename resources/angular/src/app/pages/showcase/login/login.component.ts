import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private router: Router,
  ) {}

  goToHome() {
    this.router.navigate(["/"])
  }
}
