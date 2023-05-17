import { Component, inject } from '@angular/core';
import { BioService } from './bio.service';

@Component({
  selector: 'rm-bio',
  standalone: true,
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {

  private bio = inject(BioService);

  ngOnInit(): void {
    this.bio.$bio.subscribe()
  }
}
