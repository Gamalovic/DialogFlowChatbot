import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'; 

@Injectable()
export class AuthService {
  user$:Observable<firebase.User>;
  constructor(private afAuth:AngularFireAuth, private router:Router) { }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  anonymousLogin(){
    this.afAuth.auth.signInAnonymously();
  }


  logout() { 
    this.afAuth.auth.signOut().then(navigate=> this.router.navigate(['']));
  }
}
