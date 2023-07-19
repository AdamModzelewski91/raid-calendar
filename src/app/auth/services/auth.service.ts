import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, collectionData, doc, Firestore, setDoc, updateDoc, where, query, documentId } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, map, mergeMap, take } from 'rxjs';
import { RegisterUser } from '../components/register/register.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged$ = new BehaviorSubject<boolean>(false);

  constructor(
    private auth: Auth,
    private router: Router,
    private db: Firestore
  ) {}

  async login(email: string, password: string): Promise<any> {
    const userData = await signInWithEmailAndPassword(this.auth, email, password);

    this.logged$.next(!!userData.user.uid);
    this.router.navigateByUrl('/administration/raid-settings');
    return userData
  }

  async register(data: RegisterUser): Promise<void> {
    const { email, password, guildMaster, guildName, nick} = data;

    const createUser = await createUserWithEmailAndPassword(this.auth, email, password)

    if (guildMaster) {
      this.createGuild(createUser.user.uid, guildName)
    } else {
      this.joinGuild(createUser.user.uid, guildName);
    }
    this.addNewUser(createUser.user.uid, guildMaster, nick)
    this.login(email, password)
    // this.router.navigateByUrl('/login');
  }


  createGuild(uid: string, guildName: string) {
    addDoc(collection(this.db, 'guilds'), {
      createdAt: new Date(),
      guildMaster: uid,
      guildName: guildName,
      members: [ uid ],
    })
  }

  joinGuild(uid: string, guildName: string) {
    collectionData(
      query(
        collection(this.db, 'guilds'),
        where('guildName', '==', guildName)
      )
    ).pipe(
      take(1),
    ).subscribe((guild) => {
      console.log(guild)
      updateDoc(doc(this.db, 'guilds', guild[0]["documentId"]), {
        members: [...guild[0]["members"], uid],
      })

    })
  }

  addNewUser(uid: string, guildMaster: boolean, nick: string) {
    setDoc(doc(this.db, 'users', uid), {
      guildMaster,
      nick,
    })
  }

  isLogged() {
    onAuthStateChanged(this.auth, (user) => {
      this.logged$.next(!!user);
    })
    return this.logged$;
  }

  logout() {
    this.auth.signOut();
  }
}
