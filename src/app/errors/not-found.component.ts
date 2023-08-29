import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      404 not   found!
    </p>
  `,
  styles: [
  ]
})
export class NotFoundComponent {

}
