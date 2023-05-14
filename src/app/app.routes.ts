import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
  { path: '', component: ProjectsPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: '**', redirectTo: '' }
];

