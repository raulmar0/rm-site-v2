import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import PocketBase from 'pocketbase';
import { from, map, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BioService {
  private http = inject(HttpClient);

  serverUrl = 'https://rmperso-pb.fly.dev/api/files/'

  $user = this.http.get('https://rmperso-pb.fly.dev/api/collections/users/records?filter=(username = "raulmar")')
  .pipe(
    shareReplay(1),
    map(user => user as any),
    map(user => user.items[0]),
    // tap((records) => { console.log('$bio', records); })
  )

  $about = this.$user.pipe(
    map(user => user.about),
  )
}
