import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rm-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #rmImg class="wrapper" (click)="onImgClick()">
      <ng-content></ng-content>
    </div>

    <div *ngIf="isImgZoomed" class="backdrop">
      <div class="content">
        <button (click)="onImgClick()">Back</button>
        <img [src]="imgSrc" alt="">
      </div>
    </div>
  `,
  styles: [`
    :host, .wrapper {
      height: 100%;
      width: 100%;
    }

    .backdrop {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
    }

    .content {
      padding: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      justify-content: center;
    }

    .content img {
      width: 480px;
    }
  `]
})
export class ImageComponent {
  @ViewChild('rmImg') img!: ElementRef;
  isImgZoomed = false;
  imgSrc: string | null = null;

  ngAfterViewInit(): void {
    this.imgSrc = this.img.nativeElement.children[0].src;
    // console.log(this.img.nativeElement.children[0].src)
  }

  onImgClick() {
    this.isImgZoomed = !this.isImgZoomed;
    console.log(this)
  }
}
