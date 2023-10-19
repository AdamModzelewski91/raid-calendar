import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, collectionData, doc, Firestore, setDoc, updateDoc, where, query, getDoc, documentId } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { RegisterUser } from '../components/register/register.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged$ = new BehaviorSubject<boolean>(false);

  currentUser$ = new BehaviorSubject<any>(null);

  constructor(
    private auth: Auth,
    private router: Router,
    private fs: Firestore,
  ) {}

  async login(email: string, password: string): Promise<any> {
    const userData = await signInWithEmailAndPassword(this.auth, email, password);

    this.logged$.next(!!userData.user.uid);
    this.router.navigateByUrl('/administration/raid-settings');
    return userData
  }

  async register(data: RegisterUser): Promise<any> {
    const { email, password, guildMaster, guildName, nick} = data;

    const user = await createUserWithEmailAndPassword(this.auth, email, password);
    const uid = user.user.uid;

    let createdGuild;

    if (guildMaster) {
      createdGuild = await this.createGuild(uid, guildName)
      this.addNewUser(uid, guildMaster, nick, createdGuild.id);
    } else {
      this.joinGuild(guildName).pipe(
        take(1),
      ).subscribe((guild) => {
        const guildID = guild[0]["documentId"];
        this.addNewUser(uid, guildMaster, nick, guildID);
        updateDoc(doc(this.fs, 'guilds', guildID), {
          members: [...guild[0]["members"], uid],
        });
      });
    }

    this.login(email, password).then(() => {
      // this.guildName$.next(guildName)
    });
    return user
  }

  async createGuild(uid: string, guildName: string) : Promise<any> {
    return addDoc(collection(this.fs, 'guilds'), {
      createdAt: new Date(),
      guildMaster: uid,
      guildName: guildName,
      members: [ uid ],
    })
  }

  joinGuild(guildName: string): Observable<any> {
    return collectionData(
      query(
        collection(this.fs, 'guilds'),
        where('guildName', '==', guildName)
      )
    )
  }

  addNewUser(uid: string, guildMaster: boolean, nick: string, guildId: string): Promise<any> {
    return setDoc(doc(this.fs, 'users', uid), {
      guildMaster,
      nick,
      guildId,
    })
  }

  isLogged() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.logged$.next(true);
      }
      if (!this.router.getCurrentNavigation()) this.router.navigateByUrl('/dashboard')
    })
    return this.logged$;
  }

  getCurrentUser() {
    collectionData(
      query(
        collection(this.fs, 'users'),
        where(documentId(), "==", this.auth.currentUser?.uid),
      )
    ).pipe(
      take(1),
      map(d => d[0]),
    ).subscribe(val => {
      this.currentUser$.next(val);
    });
  }

  logout() {
    this.auth.signOut().then(()=> {
      this.logged$.next(false);
      this.logged$.complete();
    });
    this.router.navigateByUrl('/login');
  }
}
