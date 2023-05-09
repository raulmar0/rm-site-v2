import { Injectable, inject } from '@angular/core';

import PocketBase from 'pocketbase';
import { from, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  // pb = new PocketBase('https://rmperso-pb.fly.dev');
  pb = new PocketBase('http://rmperso-vm.southcentralus.cloudapp.azure.com');

  $projects = from(this.pb.collection('projects').getFullList({
      sort: '-created',
    })).pipe(
      tap((records) => {
        console.log(records);
      })
    );
  }
