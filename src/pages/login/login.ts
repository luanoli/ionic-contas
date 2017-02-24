import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginService } from '../../providers/login-service';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public login: LoginService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public doLogin(){
    this.login.login().subscribe
  }

}
