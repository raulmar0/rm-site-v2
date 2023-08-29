import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rm-nav',
  standalone: true,
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navigationPlaceholder: string[] = [
    $localize`Projects`, $localize`Blog`, $localize`About`
  ];
}
