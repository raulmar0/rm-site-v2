import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
