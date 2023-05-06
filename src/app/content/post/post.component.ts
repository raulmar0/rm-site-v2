import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  @Input() buttons: string[] | undefined;

  ngOnInit(): void {
    console.log(this.buttons);
    this.buttons?.forEach((button) => {
      console.log(button);
    });
  }
}
