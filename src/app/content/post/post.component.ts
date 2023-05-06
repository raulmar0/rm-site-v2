import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ProjectsService } from '../projects.service';
import PocketBase from 'pocketbase';
import { map } from 'rxjs';


@Component({
  selector: 'rm-post',
  standalone: true,
  imports: [NgFor],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() imgSrc: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() thumbnailSrc: string | undefined;
  @Input() buttons: any | undefined;

  private projectsService = inject(ProjectsService);
  buttonsTemplate: any | undefined;
  ngOnInit(): void {
    this.buttonsTemplate = Object.entries(this.buttons)
  }
}
