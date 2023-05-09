import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
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
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private projectsService = inject(ProjectsService);
  // serverUrl = 'http://rmperso-vm.southcentralus.cloudapp.azure.com/api/files/a5z5lowx02spot2/'
  serverUrl = 'https://rmperso-pb.fly.dev/api/files/hk3si1ki49hr40j/'
  $projects = this.projectsService.$projects;
}
