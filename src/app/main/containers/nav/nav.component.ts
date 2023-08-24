import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collection, collectionData, documentId, Firestore, where, query } from '@angular/fire/firestore';
import { map, take } from 'rxjs';
import { activeLinksMaster, activeLinksMember } from './active-links.config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  activeLinks = activeLinksMember;

  constructor(private auth: Auth, private fs: Firestore) {
    this.getUser();
  }

  getUser() {
    collectionData(
      query(
        collection(this.fs, 'users'),
        where(documentId(), "==", this.auth.currentUser?.uid),
      )
    ).pipe(
      take(1), 
      map(d => d[0]),
    ).subscribe(val => {
      console.log(val)
      if (val['guildMaster'])
        this.activeLinks = activeLinksMaster;
    });
  }

}
