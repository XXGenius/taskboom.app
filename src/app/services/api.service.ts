import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private token = 'd7f6sd5a7854r85gasa6d5fg67sdg78df5gsf5gsd8';
  private tokenParam: string = 'token=' + this.token;

  getDays() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/days?' + this.tokenParam)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  // addTask(value: string) {
  //   this.http.post('http://boom-manager.app/api/v1/task', value)
  //     .map((res) => res.json().data)
  //     .catch((error: any) => Observable.throw(error || 'Server error'));
  // }

  getTasks() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/mytasks?' + this.tokenParam + '&&taskgroup_id=1' )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
//
//   getTournament(id: number) {
//     return this.http.get('/app/tournaments/' + id)
//       .map((res) => res.json().data)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }
//
//   getPlayers(game: number) {
//     const gameString = (game) ? '?game=' + game : '';
//     return this.http.get('/app/players' + gameString)
//       .map((res) => res.json().data)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }
//
//   getPlayer(id: number) {
//     return this.http.get('/app/players/' + id)
//       .map((res) => res.json().data)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }

//
  constructor(private http: Http) { }

}