import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";



import { FirebaseApp } from '@angular/fire/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  
  isMenuCollapsed = true;
  constructor(private afAuth: AngularFireAuth ) {   
  }

  ngOnInit(): void {
  }
  logout(){
    this.afAuth.signOut();
  }

}
