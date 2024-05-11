import { Component } from '@angular/core';
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
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    public router: Router,
  ) {}
}
