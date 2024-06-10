import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoxComponent } from 'components/box/box.component';
import { ButtonComponent } from 'components/button/button.component';
import { LogoComponent } from 'components/logo/logo.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    LogoComponent,
    BoxComponent,
    ButtonComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(
    public router: Router,
  ) {}
}
