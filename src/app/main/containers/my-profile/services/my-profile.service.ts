import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collectionData, query, collection, where, documentId, Firestore, getDoc, doc, updateDoc } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {
  constructor(private fs: Firestore, private auth: Auth) { }

  getBuilder(): Observable<any> {
    return collectionData(query(
      collection(this.fs, 'character-builder'),
      where(documentId(), "==", this.auth.currentUser?.uid)
    )).pipe(map(d => d[0]))
  }

  putCharacterList(list: any) {
    updateDoc(doc(this.fs, 'users', `${this.auth.currentUser?.uid}`), {characterList: list})
  }
}
