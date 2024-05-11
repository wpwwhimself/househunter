import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'components/button/button.component';
import { LogoComponent } from 'components/logo/logo.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    LogoComponent,
    ButtonComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(
    public router: Router,
  ) {}
}
