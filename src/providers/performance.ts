import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Api } from './api';

/*
  Generated class for the PerformanceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerformanceProvider {

  constructor(public http: Http,
    public api: Api) {
    console.log('Hello PerformanceProvider Provider');
  }

  getAll(): Observable<any> {

    return this.api.get('performances')
      .map(res => res.json())
      .catch(error => Observable.throw(error))
  }

  getPerformanceByTournament(tournament){
    return this.api.get('performances?tournament=' + tournament+'&sort=player') 
    .map(res => res.json())
    .catch(error => Observable.throw(error))
  }
}
