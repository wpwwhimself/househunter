import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'components/footer/footer.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent {

}
