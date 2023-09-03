import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundComponent } from './errors/not-found.component';
import { LinksPageComponent } from './links-page/links-page.component';

export const routes: Routes = [
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'links', component: LinksPageComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: '**', redirectTo: '/projects' }
];

