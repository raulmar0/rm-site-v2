import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rm-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  host: { ngSkipHydration: 'true' }
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
