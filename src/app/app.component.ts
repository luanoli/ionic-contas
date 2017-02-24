import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ContasPage } from '../pages/contas/contas';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  private rootPage = HomePage;
  public pages: Array<any>;

  constructor(platform: Platform, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      this.initPages();
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  private initPages(): void{
    this.pages = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Login', component: LoginPage, icon: 'contact'},
      {title: 'Contas', component: ContasPage, icon: 'calculator'},
      // {title: 'Lançamentos', component: LancamentosPage, icon: 'swap'},
      // {title: 'ModalTeste', component: ModalPage, icon: 'ios-basket'}
    ]
  }

  public openPage(page: any):void{
    this.rootPage = page.component;
    this.menuCtrl.close();
  }
}
