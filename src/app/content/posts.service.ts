import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, debounce, debounceTime, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private http = inject(HttpClient);

  $posts = this.http.get('https://dev.to/api/articles?username=raulmar').pipe(
    map(posts => posts as any[]), // you can leave only this and it still works
    map(posts => {
      return (posts).map(post => {
        return {
          title: post.title,
          description: post.description,
          imgSrc: post.user.profile_image_90,
          thumbnailSrc: post.social_image,
          buttons: {
            'Read More': post.url,
          },
          url: post.url,
        };
      })
    }),
    tap((posts) => { console.log(posts); }),
  );
}
