import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, debounce, debounceTime, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private http = inject(HttpClient);

  $posts = this.http.get('https://dev.to/api/articles?username=raulmar').pipe(
    map((posts: any) => {
      return Object.values(posts).map((post: any) => {
        return {
          title: post.title,
          description: post.description,
          imgSrc: post.user.profile_image_90,
          thumbnailSrc: post.social_image,
          buttons: {
            'Read More': post.url,
          },
        };
      })
    }),
    tap((posts) => { console.log(posts); }),
  );
}
