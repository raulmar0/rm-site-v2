import { Injectable, inject } from '@angular/core';

import PocketBase from 'pocketbase';
import { from, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  pb = new PocketBase('https://rmperso-pb.fly.dev');

  $projects = from(this.pb.collection('projects').getFullList({
      sort: '-created',
    })).pipe(
      tap((records) => {
        console.log(records);
      })
    );
  }
