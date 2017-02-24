import { Component } from '@angular/core';
import { ContasPage } from '../contas/contas';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  open() {
    this.navCtrl.push(ContasPage);
  }

}
