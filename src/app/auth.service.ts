import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import * as firebase from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
 
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
   }

  login(){
    this.afAuth.signInWithRedirect(new GoogleAuthProvider)
  }


  logout(){
    this.afAuth.signOut();
  }
}
