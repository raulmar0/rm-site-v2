import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BioComponent } from '../bio/bio.component';
import { ContentComponent } from '../content/content.component';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { PostComponent } from '../content/post/post.component';
import { ProjectsService } from '../content/projects.service';

@Component({
  selector: 'app-blog-page',
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
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  private projectsService = inject(ProjectsService);
  $projects = this.projectsService.projects$;
  serverUrl = this.projectsService.serverUrl;
}
