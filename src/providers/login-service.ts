import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

  constructor(public http: Http) {
    console.log('Hello LoginService Provider');
  }

  public login(): Observable<any>{
    return this.http.get('http://viacep.com.br/ws').map(res => res.json());
  }

}
