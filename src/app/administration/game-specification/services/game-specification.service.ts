import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { setDoc, doc, Firestore, query, collectionData, collection, where, documentId } from '@angular/fire/firestore';
import { map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameSpecificationService {

  constructor(private auth: Auth, private fs: Firestore) { }

  saveCharacterBuild(builder: any) {
    setDoc(doc(this.fs, 'character-builder', `${this.auth.currentUser?.uid}`), {characterBuild: builder})
  }

  getCharacterBuild() {
    return collectionData(query(
      collection(this.fs, 'character-builder'),
      where(documentId(), "==", this.auth.currentUser?.uid)
    )).pipe(map(d => d[0]))
  }
}
