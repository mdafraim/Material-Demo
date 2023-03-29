import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  
  user: firebase.User;
  isMenuCollapsed = true;
  constructor(private afAuth: AngularFireAuth ) {   
    afAuth.authState.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }
  logout(){
    this.afAuth.signOut();
  }

}
