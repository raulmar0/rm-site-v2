import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PostComponent } from './content/post/post.component';
import { ProjectsService } from './content/projects.service';

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
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private projectsService = inject(ProjectsService);
  // private route = inject(ActivatedRoute);
  private location = inject(Location);

  // currentPath: string | undefined;
  currentPath = this.location.path().slice(1);

  // constructor(private location: Location) {

  // }

  $projects = this.projectsService.$projects;
  serverUrl = this.projectsService.serverUrl;

  // ngAfterContentChecked
  ngOnInit() {

    console.log(this.location.path())
  }

  ngAfterContentChecked() {
    this.currentPath = this.location.path().slice(1);
    console.log(this.location.path())
  }


}
