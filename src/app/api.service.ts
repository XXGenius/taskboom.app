import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TaskGroup } from './task-group.model';

@Injectable()
export class ApiService {
  getDay() {
    const days = this.http.get('http://boom-manager.app/api/v1/days')
        .map((res) => res.json().data);
        // .catch((error) => Observable.throw(error || 'Server error'));
  }

  addTask(value: string) {
    this.http.post('http://boom-manager.app/api/v1/task', value)
      .map((res) => res.json().data);
      // .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getTasks(token: string) {
    return this.http.get('http://boom-manager.app/api/v1/tasks', token)
      .map((res) => res.json().data);
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
