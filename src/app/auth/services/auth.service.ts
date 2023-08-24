import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, collectionData, doc, Firestore, setDoc, updateDoc, where, query, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { RegisterUser } from '../components/register/register.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged$ = new BehaviorSubject<boolean>(false);

  guildName$ = new BehaviorSubject<string>('');

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
      this.guildName$.next(guildName)
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
        this.guildName(user.uid)
      }
      if (!this.router.getCurrentNavigation()) this.router.navigateByUrl('/dashboard')
    })
    return this.logged$;
  }

  guildName(uid: string): Promise<void>{
    return getDoc(doc(this.fs, 'guilds', uid)).then(guild => {
      console.log(guild)
      // this.guildName$.next(guild[0].guildName)
    })
  }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
