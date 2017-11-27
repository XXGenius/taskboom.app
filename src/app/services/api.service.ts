import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

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

  /********************************  GET  ****************************/

  registration(email: string, password: string, first_name: string, last_name: string , user_role_id: number ) {
    return this.http.get('http://boomapi.acesspades.com/api/v1/register' + '?' + this.tokenParam, {
      params: { email: email, password: password, first_name: first_name , last_name: last_name, user_role_id: user_role_id }})
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getCurrentUser(uid) {
    return this.http.get('http://boomapi.acesspades.com/api/v1/getcurrentuser' , {
      params: { uid: uid }})
        .map((res) => res.json())
        .catch((error: Subject<{}>) => Subject.throw(error || 'Server error'));
  }

  login(email, password) {
    return this.http.get('http://boomapi.acesspades.com/api/v1/login' + '?' + this.tokenParam, {
      params: { email: email, password: password }})
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getDay(date: string, user_id) {
    return this.http.get('http://boomapi.acesspades.com/api/v1/day/date/' + date + '?' + this.tokenParam + '&&' + 'user_id=' + user_id )
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

    getChildTasks(parent_id) {
        return this.http.get('http://boomapi.acesspades.com/api/v1/childtasks?' + this.tokenParam + '&&' + 'parent_id=' + parent_id )
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }


    getTasks(id) {
    return this.http.get('http://boomapi.acesspades.com/api/v1/tasks/' + id + '?' + this.tokenParam  )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getLevels() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/lvls?' + this.tokenParam  )
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getUserGroups() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/usergroups?' + this.tokenParam  )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getUsers() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/users?' + this.tokenParam  )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getStatuses() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/statuses?' + this.tokenParam  )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getProjects() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/projects?' + this.tokenParam  )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getRoles() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/roles?' + this.tokenParam  )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  loginAuth(token) {
    return this.http.post('http://boomapi.acesspades.com/api/v1/oauth',
        { token: token }, this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  /********************************* Create ****************************/
  createTask(title: string, date, project_id: number, user_id ) {
      return this.http.post('http://boomapi.acesspades.com/api/v1/task?' + this.tokenParam,
        {token: this.token, title: title, date: date, project_id: project_id, user_id: user_id }, this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

    createChildTask(text: string, project_id: number, parent_id , user_id) {
        console.log(JSON.stringify({ text: text, project_id: project_id, parent_id: parent_id }));
        return this.http.post('http://boomapi.acesspades.com/api/v1/childtask?' + this.tokenParam,
            {token: this.token, text: text, project_id: project_id, parent_id: parent_id, user_id: user_id}, this.headers)
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

  createUserGroup(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/usergroup?' + this.tokenParam,
      {token: this.token, title: title }, this.headers)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  createUser(username, email, password, user_role_id) {
    console.log(JSON.stringify({ username: username, email: email, password: password, user_role_id: user_role_id }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/user?' + this.tokenParam,
      {token: this.token, username: username, email: email, password: password, user_role_id: user_role_id }, this.headers)
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

  createProject(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/project?' + this.tokenParam,
      {token: this.token, title: title }, this.headers)
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

  /********************************* Update ****************************/

  updateLevel(id: number, level, exp) {
    console.log(JSON.stringify({ level: level, exp: exp  }));
    return this.http.put('http://boomapi.acesspades.com/api/v1/lvl/' + id + '?' + this.tokenParam,
        {level: level, exp: exp }, this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateExp(exp: number, id: number) {
    console.log(JSON.stringify({ exp: exp, user_id: id  }));
    return this.http.put('http://boomapi.acesspades.com/api/v1/updateexp/' + id + '?' + this.tokenParam,
        { exp: exp }, this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateUserGroup(id: number, title: string) {
    return this.http.put('http://boomapi.acesspades.com/api/v1/usergroup/' + id + '?' + this.tokenParam,
        {title: title }, this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateUser(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.put('http://boomapi.acesspades.com/api/v1/user?' + this.tokenParam,
      {token: this.token, title: title }, this.headers)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateStatus(id: number, title: string) {
    return this.http.put('http://boomapi.acesspades.com/api/v1/status/' + id + '?' + this.tokenParam,
      {title: title }, this.headers)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateProject(id: number, title: string) {
    return this.http.put('http://boomapi.acesspades.com/api/v1/project/ '+ id + '?' + this.tokenParam,
      {title: title }, this.headers)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateRole(id: number, title: string) {
    return this.http.put('http://boomapi.acesspades.com/api/v1/role/' + id + '?' + this.tokenParam,
      {title: title }, this.headers)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  checkTask(id: number, checked: boolean) {
    console.log(checked);
    return this.http.put('http://boomapi.acesspades.com/api/v1/check/' + id + '?' + this.tokenParam,
      { checked: checked },
      this.headers)
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateTask (text, title, id) {
      console.log(text);
      return this.http.put('http://boomapi.acesspades.com/api/v1/task/' + id + '?' + this.tokenParam,
          { text: text, title: title },
          this.headers)
          .map((res) => res.json())
          .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  /********************************** DELETE ****************************/

  deleteLevel(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/lvl/' + id + '?' + this.tokenParam )
        .map((res) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteUserGroup(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/usergroup/' + id + '?' + this.tokenParam )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteUser(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/user/' + id + '?' + this.tokenParam )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteStatus(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/status/' + id + '?' + this.tokenParam )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteProject(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/project/' + id + '?' +  this.tokenParam  )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteRole(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/role/' + id + '?' + this.tokenParam )
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  constructor(private http: Http) { }

}
