import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ContasPage } from '../pages/contas/contas';
import { LoginPage } from '../pages/login/login';

import { LoginService } from '../providers/login-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContasPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContasPage,
    LoginPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService
  ]
})
export class AppModule {}
