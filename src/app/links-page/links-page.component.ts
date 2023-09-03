import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksService } from './links.service';

@Component({
  selector: 'app-links-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.css']
})
export class LinksPageComponent {

  private linksService = inject(LinksService);

  $links = this.linksService.$links;

  ngOnInit(): void {
    this.linksService.$links.subscribe(links => {
      console.log(links);
    })
  }
}
