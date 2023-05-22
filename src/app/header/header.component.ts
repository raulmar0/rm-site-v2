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


  $bio = this.bio.$user.pipe(
    map(user => {
      return {
        cover_img: this.serverUrl + user.collectionId + '/' + user['id'] + '/' + user['cover_img'],
        profile_img: this.serverUrl + user['collectionId'] + '/' + user['id'] + '/' + user['profile_img'],
        username: user['username'],
        job_title: user['job_title'],
      }
    })
  );
}
