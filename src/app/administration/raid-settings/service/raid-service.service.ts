import { Injectable } from '@angular/core';
import {  Observable, map, tap } from 'rxjs';
import { RaidSettings } from '../components/raid-form/raid-form.component';
import { Firestore, addDoc, updateDoc, collection, collectionData, documentId, doc, collectionGroup, where, query, setDoc } from '@angular/fire/firestore';
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
        where(documentId(), "==", 'test'),
      )
    ).pipe(map(d => d[0]));
  }

  updateRaidSettings(raid: any): void {
    updateDoc(doc(this.fs, 'raid-settings', `${this.auth.currentUser?.uid}`), raid)
  }

  postRaidSettings(raid: any) {
    setDoc(doc(this.fs, 'raid-settings', `${this.auth.currentUser?.uid}`), raid)
  }
}

