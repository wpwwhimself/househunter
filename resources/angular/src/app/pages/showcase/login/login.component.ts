import { Component } from '@angular/core';
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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    public router: Router,
  ) {}
}
