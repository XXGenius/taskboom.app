import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {ApiService} from './api.service';
import {Router} from '@angular/router';
import {ISubscription} from 'rxjs/Subscription';

@Injectable()
export class AuthService {

    private authHook = new Subject();
    isAuthorized: Subject<boolean> = new Subject();
    currentUser = new Subject();
    exp;
    currentUserSubscribe: ISubscription;
    constructor(private apiservice: ApiService, private router: Router) {
        window['authHook']  = this.authHook;
        const uid = localStorage.getItem('uid');
        if (uid) {
            this.currentUserSubscribe = this.apiservice.getCurrentUser(uid)
                .subscribe(user => {
                this.currentUser = user['0'];
                    this.isAuthorized.next(true);
                    console.log(this.isAuthorized);
                });
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
                localStorage.setItem('uid', user['0'].uid);
                this.currentUser = user['0'];
                this.isAuthorized.next(true);
                console.log(this.isAuthorized);
                this.router.navigate(['/']);
            });
    }

    login(email, password) {
        this.apiservice.login(email, password)
            .subscribe(user => {
                localStorage.setItem('uid', user['0'].uid);
                this.currentUser = user['0'];
                this.isAuthorized.next(true);
                console.log(this.isAuthorized);
                this.router.navigate(['/']);
        });
    }

    getCurrenUser () {
        return this.currentUser;
    }



    clear () {
        localStorage.setItem('uid', '');
        this.currentUser = null;
        this.isAuthorized.next(false);
        this.router.navigate(['/signin/']);
    }
}
