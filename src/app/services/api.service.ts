import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private token = 'd7f6sd5a7854r85gasa6d5fg67sdg78df5gsf5gsd8';
  private tokenParam: string = 'token=' + this.token;
  private headers = new Headers({
    'Access-Control-Expose-Headers':
        'Authorization,'
        + 'DNT,User-Agent' +
        ',Keep-Alive,Content-Type' +
        ',accept,origin,X-Requested-With' +
        ',Content-Disposition',
    'Content-Type': 'application/json;charset=utf-8',
    'Accept': '*/*',
    'Cache-Control': 'no-cache',
  });

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
    return this.http.get('http://boomapi.acesspades.com/api/v1/mytasks?' + this.tokenParam + '&taskgroup_id=1' )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getLevels() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/lvls?' + this.tokenParam  )
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  createLevel(level: number, exp: number ) {
    console.log(JSON.stringify({ level: level, exp: exp  }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/lvl?' + this.tokenParam,
        {token: this.token, level: level, exp: exp  }, this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateLevel(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.put('http://boomapi.acesspades.com/api/v1/status?' + this.tokenParam,
        {token: this.token, title: title }, this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteLevel(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/status/' + id + '?' + this.tokenParam )
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getStatuses() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/statuses?' + this.tokenParam  )
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  createStatus(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/status?' + this.tokenParam,
        {token: this.token, title: title }, this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateStatus(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.put('http://boomapi.acesspades.com/api/v1/status?' + this.tokenParam,
        {token: this.token, title: title }, this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteStatus(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/status/' + id + '?' + this.tokenParam )
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getProjects() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/projects?' + this.tokenParam  )
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteProject(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/project/' + id + '?' +  this.tokenParam  )
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  createProject(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/project?' + this.tokenParam,
        {token: this.token, title: title }, this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getUsers() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/users?' + this.tokenParam  )
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getRoles() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/roles?' + this.tokenParam  )
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  createRole(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/role?' + this.tokenParam,
        {token: this.token, title: title }, this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteRole(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/role/' + id + '?' + this.tokenParam )
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
