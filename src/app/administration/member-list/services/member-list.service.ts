import { Injectable } from '@angular/core';
import { collection, collectionData, where, query, Firestore, documentId } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  constructor(private fs: Firestore, private auth: AuthService) { }

  getUser() {
    this.auth.currentUser$.subscribe(user => {
      console.log(user)
    })
  }

  getMembersList(): Observable<any>{
    return collectionData(query(
     collection(this.fs, 'guilds'),
     where(documentId(), '==', 'yWHSxkecWaM8BvOlQAls'),
    ))
  }
}
