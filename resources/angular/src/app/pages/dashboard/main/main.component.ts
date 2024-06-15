import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'components/button/button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ButtonComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(
    public router: Router,
    private http: HttpClient,
  ) {}

  whoAmI(): void {
    this.http
      .get("/api/auth/user")
      .subscribe(
        val => { console.log(val) },
        err => { console.log(err) }
      )
  }
}
