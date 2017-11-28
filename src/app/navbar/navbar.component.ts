import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  user$:Observable<firebase.User>;
  constructor(private afAuth:AuthService, private  auth:AngularFireAuth) {
    this.user$ = auth.authState;
   }

  logout() { 
    this.afAuth.logout();
  }

}
