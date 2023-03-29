import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import * as firebase from 'firebase/app';
import 'firebase/compat/auth';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private afAuth: AngularFireAuth) { 
    
  }

  ngOnInit(): void {
  }
  

  login(){
    
     /*this.afAuth.auth.signInWithRedirected(new firebase.auth.GoogleAuthProvider)*/
     this.afAuth.signInWithRedirect(new GoogleAuthProvider)
    
  }
  /*GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }*/
  // Auth logic to run auth providers
  /*AuthLogin(provider:any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }*/
 
}
