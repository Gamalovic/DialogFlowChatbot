import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase'; 
@Injectable()
export class AuthGuardService implements CanActivate{
  users$:Observable<firebase.User>;

  constructor(private auth:AngularFireAuth,private router:Router) {
    this.users$ = auth.authState;
   }

  canActivate(){
    //by mapping here we transform the users$ object into a boolean instead of 
    //an Observable of boolean beacuse we don't need to subscribe to the users$ 
    //object without unsubscribing
    return this.users$.map(user=>{
      if(user) return true;

      this.router.navigate(['']);
      return false;
    })
  }
}
