import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  
  isMenuCollapsed = true;
  constructor( public AuthService: AuthService ) {   
    
  }

  ngOnInit(): void {
  }
  logout(){
    this.AuthService.logout();
  }

}
