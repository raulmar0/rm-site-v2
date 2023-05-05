import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-post',
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
