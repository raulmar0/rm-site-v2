import { Injectable } from '@angular/core';

import PocketBase from 'pocketbase';
import { from, map, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BioService {
  // serverUrl = 'http://rmperso-vm.southcentralus.cloudapp.azure.com/api/files/hk3si1ki49hr40j/'
  serverUrl = 'https://rmperso-pb.fly.dev/api/files/'

  pb = new PocketBase('https://rmperso-pb.fly.dev');
// pb = new PocketBase('http://rmperso-vm.southcentralus.cloudapp.azure.com');

  $bio = from(this.pb.collection('users').getFullList({
    filter: 'username = "raulmar"'
  })).pipe(
    shareReplay(1),

    tap((records) => { console.log('abouttt', records); })
  );

  $about = this.$bio.pipe(
    map(records => records.map(record => record['about'])),
    tap((records) => { console.log('about', records); })
  )
}
