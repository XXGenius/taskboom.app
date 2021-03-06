import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs';
import {map, catchError, mergeMap} from 'rxjs/operators';

@Injectable()
export class ApiService {
  private _options: any = new HttpHeaders(
    {
      'Access-Control-Expose-Headers':
      'Authorization,'
      + 'DNT,User-Agent' +
      ',Keep-Alive,Content-Type' +
      ',accept,origin,X-Requested-With' +
      ',Content-Disposition',
      'Content-Type': 'application/json;charset=utf-8',
      'Accept': '*/*',
      'Cache-Control': 'no-cache'
    }
  );
  private token = 'd7f6sd5a7854r85gasa6d5fg67sdg78df5gsf5gsd8';
  private tokenParam: string = 'token=' + this.token;


  /********************************  GET  ****************************/

  registration(email: string, password: string, first_name: string, last_name: string, user_role_id: number) {
    return this.http.get('https://api.golaso.io/api/v1/register' + '?' + this.tokenParam, {
      params: {email: email, password: password, first_name: first_name, last_name: last_name}
    })
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  getCurrentUser(uid) {
    return this.http.get('https://api.golaso.io/api/v1/getcurrentuser', {
      params: {uid: uid}
    })
      .map((res) => res);
  }

  getUserByEmail(email) {
    return this.http.get('https://api.golaso.io/api/v1/user' + '?' + this.tokenParam, {
      params: {email: email}
    })
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }


  getLongCycle(user_id) {
    return this.http.get('https://api.golaso.io/api/v1/long', {
      params: {user_id: user_id}
    })
      .map((res) => res);
  }


  getWeekCycle(user_id) {
    return this.http.get('https://api.golaso.io/api/v1/week', {
      params: {user_id: user_id}
    })
      .map((res) => res);
  }

  getMySteps(cycle_id) {
    return this.http.get('https://api.golaso.io/api/v1/steps' + '?' + this.tokenParam, {
      params: {cycle_id: cycle_id}
    })
      .map((res) => res);
  }

  getMyRewards(cycle_id) {
    return this.http.get('https://api.golaso.io/api/v1/rewards' + '?' + this.tokenParam, {
      params: {cycle_id: cycle_id}
    })
      .map((res) => res);
  }

  getMyTasks(cycle_id) {
    return this.http.get('https://api.golaso.io/api/v1/mytasks' + '?' + this.tokenParam, {
      params: {cycle_id: cycle_id}
    })
      .map((res) => res);
  }

  getUnrested(review_id) {
    return this.http.get('https://api.golaso.io/api/v1/unrested' + '?' + this.tokenParam, {
      params: {review_id: review_id}
    })
      .map((res) => res);
  }

  getVictory(review_id) {
    return this.http.get('https://api.golaso.io/api/v1/victory' + '?' + this.tokenParam, {
      params: {review_id: review_id}
    })
      .map((res) => res);
  }

  getLesson(review_id) {
    return this.http.get('https://api.golaso.io/api/v1/lesson' + '?' + this.tokenParam, {
      params: {review_id: review_id}
    })
      .map((res) => res);
  }

  getSpecific(review_id) {
    return this.http.get('https://api.golaso.io/api/v1/specific' + '?' + this.tokenParam, {
      params: {review_id: review_id}
    })
      .map((res) => res);
  }


  getDayTasks(day_id, week_id) {
    return this.http.get('https://api.golaso.io/api/v1/daytasks' + '?' + this.tokenParam, {
      params: {day_id: day_id, week_id: week_id}
    })
      .map((res) => res);
  }


  login(email, password) {
    return this.http.get('https://api.golaso.io/api/v1/login' + '?' + this.tokenParam, {
      params: {email: email, password: password}
    })
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  getReview(cycle_id) {
    return this.http.get('https://api.golaso.io/api/v1/review' + '?' + this.tokenParam, {
      params: {cycle_id: cycle_id}
    })
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  getDay(date, user_id) {
    return this.http.get('https://api.golaso.io/api/v1/day' + '?' + this.tokenParam, {
      params: {date: date, user_id: user_id}
    })
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }


  getDate(user_id) {
    return this.http.get('https://api.golaso.io/api/v1/date' + '?' + this.tokenParam, {
      params: {user_id: user_id}
    })
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  getTasks(id) {
    return this.http.get('https://api.golaso.io/api/v1/tasks/' + id + '?' + this.tokenParam)
      .map((res) => res);

  }


  getUserGroups() {
    return this.http.get('https://api.golaso.io/api/v1/usergroups?' + this.tokenParam)
      .map((res) => res);
  }

  getUsers() {
    return this.http.get('https://api.golaso.io/api/v1/users?' + this.tokenParam)
      .map((res) => res);
  }


  loginAuth(name, uid, email, image) {
    return this.http.post('https://api.golaso.io/api/v1/oauth',
      {name: name, uid: uid, email: email, image: image}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  /********************************* Create ****************************/

  addLongCycle(user_id) {
    console.log(this._options);
    return this.http.post('https://api.golaso.io/api/v1/createcycle?' + this.tokenParam,
      {token: this.token, user_id: user_id}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  addDay(user_id, date, week_id) {
    console.log(this._options);
    return this.http.post('https://api.golaso.io/api/v1/day?' + this.tokenParam,
      {token: this.token, date: date, user_id: user_id, week_id: week_id}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }


  addWeekCycle(user_id) {
    console.log(this._options);
    return this.http.post('https://api.golaso.io/api/v1/createweek?' + this.tokenParam,
      {token: this.token, user_id: user_id}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  createTask(title: string, date, project_id: number, user_id) {
    console.log(this._options);
    return this.http.post('https://api.golaso.io/api/v1/task?' + this.tokenParam,
      {token: this.token, title: title, date: date, project_id: project_id, user_id: user_id}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }


  createUserGroup(title: string) {
    console.log(JSON.stringify({title: title}));
    return this.http.post('https://api.golaso.io/api/v1/usergroup?' + this.tokenParam,
      {token: this.token, title: title}, this._options)
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  createUser(username, email, password, user_role_id) {
    console.log(JSON.stringify({username: username, email: email, password: password, user_role_id: user_role_id}));
    return this.http.post('https://api.golaso.io/api/v1/user?' + this.tokenParam,
      {token: this.token, username: username, email: email, password: password, user_role_id: user_role_id}, this._options)
      .map((res) => res);
  }


  onAutofill(week_id, bool) {
    console.log(JSON.stringify({text: bool}));
    return this.http.put('https://api.golaso.io/api/v1/weekautofill/' + week_id + '?' + this.tokenParam,
      {autofill: bool}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  updateStep(id: number, text) {
    console.log(JSON.stringify({text: text}));
    return this.http.put('https://api.golaso.io/api/v1/step/' + id + '?' + this.tokenParam,
      {text: text}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  updateVictory(text, id: number) {
    console.log(JSON.stringify({text: text}));
    return this.http.put('https://api.golaso.io/api/v1/victory/' + id + '?' + this.tokenParam,
      {text: text}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  updateSpecific(text, id: number) {
    console.log(JSON.stringify({text: text}));
    return this.http.put('https://api.golaso.io/api/v1/specific/' + id + '?' + this.tokenParam,
      {text: text}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  updateUnrested(text, id: number) {
    console.log(JSON.stringify({text: text}));
    return this.http.put('https://api.golaso.io/api/v1/unrested/' + id + '?' + this.tokenParam,
      {text: text}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  updateLesson(text, id: number) {
    console.log(JSON.stringify({text: text}));
    return this.http.put('https://api.golaso.io/api/v1/lesson/' + id + '?' + this.tokenParam,
      {text: text}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  updateProgress(comment_progress, id: number) {
    console.log(JSON.stringify({comment_progress: comment_progress}));
    return this.http.put('https://api.golaso.io/api/v1/progress/' + id + '?' + this.tokenParam,
      {comment_progress: comment_progress}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  updateGratitude(gratitude_day, id: number) {
    console.log(JSON.stringify({gratitude_day: gratitude_day}));
    return this.http.put('https://api.golaso.io/api/v1/gratitude/' + id + '?' + this.tokenParam,
      {gratitude_day: gratitude_day}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  updateComment(comment_task, id: number) {
    console.log(JSON.stringify({comment_task: comment_task}));
    return this.http.put('https://api.golaso.io/api/v1/comment/' + id + '?' + this.tokenParam,
      {comment_task: comment_task}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  updateReward(id: number, text) {
    console.log(JSON.stringify({text: text}));
    return this.http.put('https://api.golaso.io/api/v1/reward/' + id + '?' + this.tokenParam,
      {text: text}, this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  updateUser(title: string) {
    console.log(JSON.stringify({title: title}));
    return this.http.put('https://api.golaso.io/api/v1/user?' + this.tokenParam,
      {token: this.token, title: title}, this._options)
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  checkTask(id: number, checked: boolean) {
    console.log(checked);
    return this.http.put('https://api.golaso.io/api/v1/check/' + id + '?' + this.tokenParam,
      {checked: checked},
      this._options)
      .map((res) => res);
  }

  updateTask(text, id) {
    console.log(text);
    return this.http.put('https://api.golaso.io/api/v1/task/' + id + '?' + this.tokenParam,
      {text: text},
      this._options)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  /********************************** DELETE ****************************/

  deleteTask(id: number) {
    return this.http.delete('https://api.golaso.io/api/v1/task/' + id + '?' + this.tokenParam)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError(error => Observable.throw(error || 'Server error'))
      );
  }

  deleteUserGroup(id: number) {
    return this.http.delete('https://api.golaso.io/api/v1/usergroup/' + id + '?' + this.tokenParam)
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteUser(id: number) {
    return this.http.delete('https://api.golaso.io/api/v1/user/' + id + '?' + this.tokenParam)
      .map((res) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  constructor(private http: HttpClient) {
  }

}
