import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PostComponent } from './content/post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BioComponent,
    ContentComponent,
    HeaderComponent,
    NavComponent,
    TopBarComponent,
    PostComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sampleImgSrc = 'https://img.freepik.com/premium-vector/dance-couple-stick-figure-icon-black-ballroom-pictogram-waltz-tango-dancing-man-woman_253081-1330.jpg';
  sampleTitle = '567 dance!';
  sampleDescription = 'Is the ultimate app for practicing latin rhythms.';
  sampleThumbnailSrc = 'https://raulmar.com/assets/projects/567-dance-thumbnail.webp';
  sampleButtons = ['Demo', 'Source Code'];
}
