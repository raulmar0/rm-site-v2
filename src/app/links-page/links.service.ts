import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { }

  $links = this.http.get('https://rmperso-pb.fly.dev/api/collections/links/records').pipe(
    shareReplay(1),
    map(links => links as any),
    map(links => links.items),
  )
}
