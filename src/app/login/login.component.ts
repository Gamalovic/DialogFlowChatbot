import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.afAuth.login();
  }

  anonymousLogin(){
    this.afAuth.anonymousLogin();
    console.log(this.afAuth.isAnonymous);
  }

}
