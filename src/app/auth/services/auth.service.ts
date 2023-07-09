import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {  }

  async login(): Promise<any> {
    const userData = await signInWithEmailAndPassword(this.auth, 'test@test.com', '123456');
    console.log(userData);
    return userData
  }

  logout() {
    this.auth.signOut();
  }
}
