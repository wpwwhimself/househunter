import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'components/button/button.component';
import { LogoComponent } from 'components/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent,
    ButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    public router: Router,
    private http: HttpClient,
  ) {}

  logout(): void {
    this.http
      .post("/api/auth/logout", {})
      .subscribe(
        val => { this.router.navigate(['login']) },
        err => { console.log(err) }
      )
  }
}
