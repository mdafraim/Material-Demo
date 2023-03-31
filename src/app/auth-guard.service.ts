import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
//import 'rxjs/Rx';
//import 'rxjs/add/operator/map';
import * as firebase from 'firebase/auth';




@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private AuthService: AuthService, private router: Router) { }

  canActivate(){
    return this.AuthService.user$.pipe(map(user => {
      if (user) return true;

     this.router.navigate(['/login']);
     return false
    
    }))
    

  }
}
