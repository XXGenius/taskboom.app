import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
@Injectable()
export class ApiService {
  private _options: any = new HttpHeaders(
            {'Access-Control-Expose-Headers':
            'Authorization,'
            + 'DNT,User-Agent' +
            ',Keep-Alive,Content-Type' +
            ',accept,origin,X-Requested-With' +
            ',Content-Disposition',
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': '*/*',
                'Cache-Control': 'no-cache'}
        );
  private token = 'd7f6sd5a7854r85gasa6d5fg67sdg78df5gsf5gsd8';
  private tokenParam: string = 'token=' + this.token;


  /********************************  GET  ****************************/

  registration(email: string, password: string, first_name: string, last_name: string , user_role_id: number ) {
    return this.http.get('http://boomapi.acesspades.com/api/v1/register' + '?' + this.tokenParam, {
      params: { }})
        .map((res) => res);
  }

  getCurrentUser(uid) {
    return this.http.get('http://boomapi.acesspades.com/api/v1/getcurrentuser' , {
      params: { uid: uid }})
        .map((res) => res);
  }

  login(email, password) {
    return this.http.get('http://boomapi.acesspades.com/api/v1/login' + '?' + this.tokenParam, {
      params: { email: email, password: password }})
        .map((res) => res);
  }

    findTasks(str, user_id) {
        return this.http.get('http://boomapi.acesspades.com/api/v1/find' + '?' + this.tokenParam, {
            params: { str: str, user_id: user_id }})
            .map((res) => res);
    }

  getDay(date: string, user_id) {
    return this.http.get('http://boomapi.acesspades.com/api/v1/day/date/' + date + '?' + this.tokenParam + '&&' + 'user_id=' + user_id )
        .map((res) => res);
  }

    getChildTasks(parent_id) {
        return this.http.get('http://boomapi.acesspades.com/api/v1/childtasks?' + this.tokenParam + '&&' + 'parent_id=' + parent_id )
            .map((res) => res);
    }


    getTasks(id) {
    return this.http.get('http://boomapi.acesspades.com/api/v1/tasks/' + id + '?' + this.tokenParam  )
      .map((res) => res);

  }

    getCategory() {
        return this.http.get('http://boomapi.acesspades.com/api/v1/category?' + this.tokenParam  )
            .map((res) => res);
    }

  getLevels() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/lvls?' + this.tokenParam  )
        .map((res) => res);
  }

  getUserGroups() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/usergroups?' + this.tokenParam  )
      .map((res) => res);
  }

  getUsers() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/users?' + this.tokenParam  )
      .map((res) => res);
  }

  getStatuses() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/statuses?' + this.tokenParam  )
      .map((res) => res);
  }

  getProjects() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/projects?' + this.tokenParam  )
      .map((res) => res);
  }

  getRoles() {
    return this.http.get('http://boomapi.acesspades.com/api/v1/roles?' + this.tokenParam  )
      .map((res) => res);
  }

  loginAuth(token) {
    return this.http.post('http://boomapi.acesspades.com/api/v1/oauth',
        { token: token }, this._options)
        .map((res) => res);
  }

  /********************************* Create ****************************/
  createTask(title: string, date, project_id: number, user_id ) {
      console.log(this._options);
      return this.http.post('http://boomapi.acesspades.com/api/v1/task?' + this.tokenParam,
        {token: this.token, title: title, date: date, project_id: project_id, user_id: user_id }, this._options)
          .pipe(
              map((res: any) => {
                  console.log(res);
                  return res;
              }),
              catchError(error => Observable.throw(error || 'Server error'))
  ); }

    createChildTask(text: string, project_id: number, parent_id , user_id) {
        console.log(JSON.stringify({ text: text, project_id: project_id, parent_id: parent_id }));
        return this.http.post('http://boomapi.acesspades.com/api/v1/childtask?' + this.tokenParam,
            {token: this.token, text: text, project_id: project_id, parent_id: parent_id, user_id: user_id}, this._options)
            .map((res) => res);
    }

  createLevel(level: number, exp: number ) {
    console.log(JSON.stringify({ level: level, exp: exp  }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/lvl?' + this.tokenParam,
        {token: this.token, level: level, exp: exp  }, this._options)
        .map((res) => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  createUserGroup(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/usergroup?' + this.tokenParam,
      {token: this.token, title: title }, this._options)
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  createUser(username, email, password, user_role_id) {
    console.log(JSON.stringify({ username: username, email: email, password: password, user_role_id: user_role_id }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/user?' + this.tokenParam,
      {token: this.token, username: username, email: email, password: password, user_role_id: user_role_id }, this._options)
      .map((res) => res);
  }

  createStatus(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/status?' + this.tokenParam,
      {token: this.token, title: title }, this._options )
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  createProject(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/project?' + this.tokenParam,
      {token: this.token, title: title }, this._options)
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  createRole(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.post('http://boomapi.acesspades.com/api/v1/role?' + this.tokenParam,
      {token: this.token, title: title }, this._options)
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  /********************************* Update ****************************/

  updateLevel(id: number, level, exp) {
    console.log(JSON.stringify({ level: level, exp: exp  }));
    return this.http.put('http://boomapi.acesspades.com/api/v1/lvl/' + id + '?' + this.tokenParam,
        {level: level, exp: exp }, this._options)
        .map((res) => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateExp(exp: number, id: number) {
    console.log(JSON.stringify({ exp: exp, user_id: id  }));
    return this.http.put('http://boomapi.acesspades.com/api/v1/updateexp/' + id + '?' + this.tokenParam,
        { exp: exp }, this._options)
        .map((res) => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateUserGroup(id: number, title: string) {
    return this.http.put('http://boomapi.acesspades.com/api/v1/usergroup/' + id + '?' + this.tokenParam,
        {title: title }, this._options)
        .map((res) => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateUser(title: string) {
    console.log(JSON.stringify({ title: title }));
    return this.http.put('http://boomapi.acesspades.com/api/v1/user?' + this.tokenParam,
      {token: this.token, title: title }, this._options)
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateStatus(id: number, title: string) {
    return this.http.put('http://boomapi.acesspades.com/api/v1/status/' + id + '?' + this.tokenParam,
      {title: title }, this._options)
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateProject(id: number, title: string) {
    return this.http.put('http://boomapi.acesspades.com/api/v1/project/ ' + id + '?' + this.tokenParam,
      {title: title }, this._options)
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  updateRole(id: number, title: string) {
    return this.http.put('http://boomapi.acesspades.com/api/v1/role/' + id + '?' + this.tokenParam,
      {title: title }, this._options)
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  checkTask(id: number, checked: boolean) {
    console.log(checked);
    return this.http.put('http://boomapi.acesspades.com/api/v1/check/' + id + '?' + this.tokenParam,
      { checked: checked },
      this._options)
        .map((res) => res);
  }

  updateTask (text, title, id) {
      console.log(text);
      return this.http.put('http://boomapi.acesspades.com/api/v1/task/' + id + '?' + this.tokenParam,
          { text: text, title: title },
          this._options)
          .pipe(
          map((res: any) => {
              console.log(res);
              return res;
          }),
          catchError(error => Observable.throw(error || 'Server error'))
          )
  }

  /********************************** DELETE ****************************/

  deleteTask(id: number) {
      return this.http.delete('http://boomapi.acesspades.com/api/v1/task/' + id + '?' + this.tokenParam )
          .map((res) => res)

  }

  deleteLevel(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/lvl/' + id + '?' + this.tokenParam )
        .map((res) => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteUserGroup(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/usergroup/' + id + '?' + this.tokenParam )
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteUser(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/user/' + id + '?' + this.tokenParam )
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteStatus(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/status/' + id + '?' + this.tokenParam )
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteProject(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/project/' + id + '?' +  this.tokenParam  )
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteRole(id: number) {
    return this.http.delete('http://boomapi.acesspades.com/api/v1/role/' + id + '?' + this.tokenParam )
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  constructor(private http: HttpClient) { }

}
