import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-post',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() imgSrc: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() thumbnailSrc: string | undefined;
  @Input() buttons: any | undefined;
  @Input() url: string | undefined;
  @Input() isBlog?: boolean | undefined;

  buttonsTemplate: any | undefined;

  ngOnInit(): void {
    this.buttonsTemplate = Object.entries(this.buttons)
  }
}
