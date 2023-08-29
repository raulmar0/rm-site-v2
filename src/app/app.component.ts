import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PostComponent } from './content/post/post.component';
import { ProjectsService } from './content/projects.service';
import { FooterComponent } from './footer/footer.component';
import { ViewEncapsulation } from '@angular/core';
import { BioService } from './bio/bio.service';
import { PostsService } from './content/posts.service';
import { forkJoin } from 'rxjs';

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
    FooterComponent,
    PostComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  private projectsService = inject(ProjectsService);
  private bioService = inject(BioService);
  private postsService = inject(PostsService);

  $user = this.bioService.$user;
  $projects = this.projectsService.$projects;
  $posts = this.postsService.$posts;
  serverUrl = this.projectsService.serverUrl;

  // $ready = forkJoin([this.$user, this.$projects, this.$posts]);

}
