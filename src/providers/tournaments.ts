import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Api } from './api';

/*
  Generated class for the TournamentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TournamentsProvider {

  constructor(public http: Http,
    public api: Api) {
  }

  getAll(): Observable<any> {

    return this.api.get('tournaments')
      .map(res => res.json())
      .catch(error => Observable.throw(error))
  }

  getTournament(category: any): Observable<any> {

    return this.api.get('tournaments', {category: category}) 
      .map(res => res.json())
      .catch(error => Observable.throw(error))

  }

  getTournamentById(id){
    return this.api.get('tournaments/' + id) 
    .map(res => res.json())
    .catch(error => Observable.throw(error))
  }

}
