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

    <div *ngIf="isImgZoomed" (click)="onImgClick()" class="backdrop">
      <div class="content">
        <img [src]="imgSrc" alt="">
        <button (click)="onImgClick()"><strong>x</strong></button>
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

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content {
      padding: 0;
      width: 90vw;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .content img {
      width: 100%;
      box-sizing: border-box;
      border: 5px solid var(--border-color);
    }

    button {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      position: absolute;
      bottom: 5rem;
      font-size: 2rem;
      background: var(--border-color);
      color: var(--accent-color);
      border: 3px solid var(--border-color);
    }

    button:hover {
      background: var(--accent-color);
      color: var(--border-color);
    }


    @media (min-width: 480px) {
      .content {
        width: 480px;
      }
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
