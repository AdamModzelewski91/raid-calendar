import { Injectable } from '@angular/core';
import {  Observable, map, tap, of, catchError } from 'rxjs';
import { RaidSettings } from '../components/raid-form/raid-form.component';
import { Firestore, addDoc, updateDoc, collection, collectionData, documentId, doc, collectionGroup, where, query, setDoc, getCountFromServer, AggregateField } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RaidSettingsService {
  raids$: Observable<any> = this.getRaidSettings();

  constructor(private fs: Firestore, private auth: Auth) { }

  getRaidSettings(): Observable<any> {
    return collectionData(
      query(
        collection(this.fs, 'raid-settings'),
        where(documentId(), "==", this.auth.currentUser?.uid),
      )
    ).pipe(map(d => d[0] ?? []));
  }

  postRaidSettings(raid: any) {
    setDoc(doc(this.fs, 'raid-settings', `${this.auth.currentUser?.uid}`), raid)
  }
}

