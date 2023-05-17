import { Component, inject } from '@angular/core';
import { BioService } from './bio.service';
import { map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rm-bio',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {

  private bio = inject(BioService);

  $bio = this.bio.$bio.pipe(
    map(bio => bio[0]),
    map(bio => {
      return {
        bio: bio['bio'],
        location: bio['location'],
        link: bio['link'],
        experience: bio['experience'],
      }
    }),
    tap(bio => console.log(bio))
  );
}
