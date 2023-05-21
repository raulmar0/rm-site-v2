import { Component, inject } from '@angular/core';
import { BioService } from '../bio/bio.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rm-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private bio = inject(BioService);
  serverUrl = 'https://rmperso-pb.fly.dev/api/files/'


  $bio = this.bio.$bio.pipe(
    map(bio => bio[0]),
    map(bio => {
      return {
        cover_img: this.serverUrl + bio['collectionId'] + '/' + bio['id'] + '/' + bio['cover_img'],
        profile_img: this.serverUrl + bio['collectionId'] + '/' + bio['id'] + '/' + bio['profile_img'],
        username: bio['username'],
        job_title: bio['job_title'],
      }
    })
  );
}
