import { Injectable } from '@angular/core';
import { collection, collectionData, where, query, Firestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  constructor(private fs: Firestore) { }

  getMembersList(): Observable<any>{
    return collectionData(query(
     collection(this.fs, 'users'),
     where('guildId', '==', 'yWHSxkecWaM8BvOlQAls'),
    ))
  }
}
