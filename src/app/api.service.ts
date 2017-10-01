import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Task } from './task.model';

@Injectable()
export class ApiService {
  getTasks(): Observable<Task[]> {
    let tasks = this.http.post('http://boom-manager.app/api/v1/tasks')

  }

//   getMatch(id: number) {
//     return this.http.get('/app/matches/' + id)
//       .map((res) => res.json().data)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }
//
//   getTournaments(game: number) {
//     const gameString = (game) ? '?game=' + game : '';
//     return this.http.get('/app/tournaments' + gameString)
//       .map((res) => res.json().data)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }
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
//   getTeams(game: number) {
//     const gameString = (game) ? '?game=' + game : '';
//     return this.http.get('/app/teams' + gameString)
//       .map((res) => res.json().data)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }
//
//   getTeam(id: number) {
//     return this.http.get('/app/teams/' + id)
//       .map((res) => res.json().data)
//       .catch((error: any) => Observable.throw(error || 'Server error'));
//   }
//
  constructor(private http: Http) { }

}
