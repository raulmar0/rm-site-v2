import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import PocketBase from 'pocketbase';
import { from, map, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private http = inject(HttpClient);

  serverUrl = 'https://rmperso-pb.fly.dev/api/files/'

  $projects = this.http.get('https://rmperso-pb.fly.dev/api/collections/projects/records?sort=+created')
  .pipe(
    shareReplay(1),
    map(res => res as any),
    map(res => res.items),
    tap(projects => console.log('$projects', projects))
  )

}
