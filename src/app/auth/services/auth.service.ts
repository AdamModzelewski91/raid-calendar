import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, collectionData, doc, Firestore, setDoc, updateDoc, where, query, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';
import { RegisterUser } from '../components/register/register.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged$ = new BehaviorSubject<boolean>(false);

  guildId$ = new BehaviorSubject<string>('');

  constructor(
    private auth: Auth,
    private router: Router,
    private fs: Firestore
  ) {}

  async login(email: string, password: string): Promise<any> {
    const userData = await signInWithEmailAndPassword(this.auth, email, password);

    this.logged$.next(!!userData.user.uid);
    this.router.navigateByUrl('/administration/raid-settings');
    return userData
  }

  async register(data: RegisterUser): Promise<void> {
    const { email, password, guildMaster, guildName, nick} = data;

    await createUserWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        console.log(userCredential.user.uid)
        this.login(email, password);
      })
      .catch(err => {
        console.log(err.code, err.message)
      })


/*
    const uid = createUser.user.uid;


    if (guildMaster) {
      this.guildId$.next((await this.createGuild(uid, guildName)).id);
      try {
        this.addNewUser(uid, guildMaster, nick, this.guildId$.getValue());
      } catch {
        console.log('nope');
      }
    } else {
      this.joinGuild(guildName).pipe(
        take(1),
      ).subscribe((guild) => {
        this.guildId$.next(guild[0]["documentId"]);
        this.addNewUser(uid, guildMaster, nick, this.guildId$.getValue());
        updateDoc(doc(this.fs, 'guilds', this.guildId$.getValue()), {
          members: [...guild[0]["members"], uid],
        });
      });
    }

    this.login(email, password); */
  }

  createGuild(uid: string, guildName: string) {
    return addDoc(collection(this.fs, 'guilds'), {
      createdAt: new Date(),
      guildMaster: uid,
      guildName: guildName,
      members: [ uid ],
    })
  }

  joinGuild(guildName: string) {
    return collectionData(
      query(
        collection(this.fs, 'guilds'),
        where('guildName', '==', guildName)
      )
    )
  }

  addNewUser(uid: string, guildMaster: boolean, nick: string, guildId: string) {
    setDoc(doc(this.fs, 'users', uid), {
      guildMaster,
      nick,
      guildId,
    })
  }

  async getGuild(uid: string) {
    return await getDoc(doc(this.fs, 'users', uid))
  }

  isLogged() {
    onAuthStateChanged(this.auth, (user) => {
      this.logged$.next(!!user);
      if (!this.router.getCurrentNavigation()) this.router.navigateByUrl('/dashboard')
    })
    return this.logged$;
  }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
