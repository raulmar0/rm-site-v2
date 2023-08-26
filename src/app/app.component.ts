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
import { toCapitalize } from './utils';
import { FooterComponent } from './footer/footer.component';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private projectsService = inject(ProjectsService);
  private location = inject(Location);

  currentPath: string | undefined;

  $projects = this.projectsService.$projects;
  serverUrl = this.projectsService.serverUrl;

  ngAfterContentChecked() {
    this.manageNav();
  }

  manageNav() {
    const path = toCapitalize(this.location.path().slice(1));
    this.currentPath = path === '' ? 'Projects' : path;
  }


}
