import { Injectable } from '@angular/core';
import {  Observable, map, tap, of } from 'rxjs';
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
    this.checkIfExists().then(res => {
      if(!res.valueOf()) {
        this.postRaidSettings({});
      }
    });

    return collectionData(
      query(
        collection(this.fs, 'raid-settings'),
        where(documentId(), "==", this.auth.currentUser?.uid),

      )
    ).pipe(map(d => d[0]));
  }

  async checkIfExists(): Promise<boolean> {
    const snap = await getCountFromServer(query(
        collection(this.fs, 'raid-settings'), where(documentId(), '==', this.auth.currentUser?.uid)
      ))
    return !!snap.data().count;
  }

  postRaidSettings(raid: any) {
    setDoc(doc(this.fs, 'raid-settings', `${this.auth.currentUser?.uid}`), raid)
  }
}

