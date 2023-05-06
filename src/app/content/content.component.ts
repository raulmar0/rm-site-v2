import { Component, inject } from '@angular/core';
import { ProjectsService } from './projects.service';
import { map } from 'rxjs';

@Component({
  selector: 'rm-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  private projectsService = inject(ProjectsService);
  $projects = this.projectsService.$projects;

  ngOnInit(): void {
  }

}
