import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, inject } from '@angular/core';
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
  @ViewChild('content') content!: ElementRef;
  @ViewChild('container') container!: ElementRef;

  showBackToTop = false;

  $user = this.bioService.$user;
  $projects = this.projectsService.$projects;
  $posts = this.postsService.$posts;

  $ready = forkJoin([this.$user, this.$projects, this.$posts]);

  onContentScroll(event: any) {
    console.log(event.target.scrollTop);
    this.showBackToTop = event.target.scrollTop > 200 ? true : false;
  }

  onBackToTopClick() {
    this.container.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
    this.content.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
