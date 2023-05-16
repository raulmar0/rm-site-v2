import { Injectable, inject } from '@angular/core';

import PocketBase from 'pocketbase';
import { from, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  // serverUrl = 'http://rmperso-vm.southcentralus.cloudapp.azure.com/api/files/hk3si1ki49hr40j/'
  serverUrl = 'https://rmperso-pb.fly.dev/api/files/'

  pb = new PocketBase('https://rmperso-pb.fly.dev');
// pb = new PocketBase('http://rmperso-vm.southcentralus.cloudapp.azure.com');

  $projects = from(this.pb.collection('projects').getFullList({
    sort: '-created',
  })).pipe(
    shareReplay(1),
    tap((records) => {
      console.log(records);
    })
  );
}
