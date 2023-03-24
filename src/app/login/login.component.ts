import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from "firebase/auth";
import * as firebase from 'firebase/app';


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
     this.afAuth.auth.signInWithRedirected(new firebase.auth.GoogleAuthProvider)
    
  }
}
