import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {ApiService} from './api.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

    private authHook = new Subject();
    isAuthorized: Subject<boolean> = new Subject();
    currentUser = new Subject();
    constructor(private apiservice: ApiService, private router: Router) {
        window['authHook']  = this.authHook;
        const user = localStorage.getItem('user');
        if (user) {
            this.isAuthorized.next(true);
            router.navigate(['/']);
        } else {
            this.isAuthorized.next(false);
            router.navigate(['/signin/']);
        }
    }

    setAuthHook() {
        this.authHook
            .switchMap(authToken => this.apiservice.loginAuth(authToken))
            .subscribe(user => {
                localStorage.setItem('user', user);
                this.currentUser = user['0'];
                this.isAuthorized.next(true);
                this.router.navigate(['/']);
            });
    }

    getCurrenUser () {
        return this.currentUser;
    }

    clear () {
        localStorage.setItem('user', '');
        this.currentUser = null;
        this.isAuthorized.next(false);
        this.router.navigate(['/signin/']);
    }
}
