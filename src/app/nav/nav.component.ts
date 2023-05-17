import { NgFor } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'rm-nav',
  standalone: true,
  imports: [
    NgFor,
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() navLocation: string | undefined;
  navigationOptions: string[] = [
    'Projects', 'Blog', 'About'
  ];
}
