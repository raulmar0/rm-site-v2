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

  $bio = this.bio.$user.pipe(
    map(user => user as any),
    map(user => {
      return {
        bio: user['bio'],
        location: user['location'],
        link: user['link'],
        experience: user['experience'],
      }
    }),
  );
}
