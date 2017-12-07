import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import {ApiService} from './api.service';
import {Router} from '@angular/router';
import {ISubscription} from 'rxjs/Subscription';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Injectable()
export class AuthService {
    error: any;
    private authHook = new Subject();
    isAuthorized: Subject<boolean> = new Subject();
    currentUser = new Subject();

    currentUserSubscribe: ISubscription;
    constructor(private apiservice: ApiService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) {
        window['authHook']  = this.authHook;
        const uid = localStorage.getItem('uid');
        this.spinnerService.show();
        if (uid) {
            this.currentUserSubscribe = this.apiservice.getCurrentUser(uid)
                .subscribe(user => {
                this.currentUser = user['0'];
                    this.isAuthorized.next(true);
                    console.log(this.isAuthorized);
                });
            router.navigate(['/']);
            this.spinnerService.hide();
        } else {
            this.isAuthorized.next(false);
            router.navigate(['/signin/']);
            this.spinnerService.hide();
        }
    }

    setAuthHook() {
        this.authHook
            .subscribe((authToken) =>
                this.apiservice.loginAuth(authToken).
                subscribe(user => {
                localStorage.setItem('uid', user['0'].uid);
                localStorage.setItem('id', user['0'].id);
                this.currentUser = user['0'];
                this.isAuthorized.next(true);
                this.router.navigate(['/day/' + (new Date()).getUTCFullYear() + '-' + ((new Date()).getUTCMonth() + 1) + '-' + (new Date()).getUTCDate()]);
                this.spinnerService.hide();
            }));
    }

    login(email, password) {
        this.spinnerService.show();
        this.apiservice.login(email, password)
            .subscribe(user => {
                console.log(user);
                if (user === 0 ) {
                    this.error = 'error';
                    return this.error;
                } else {
                    this.error = '';
                    localStorage.setItem('uid', user['0'].uid);
                    localStorage.setItem('id', user['0'].id);
                    this.currentUser = user['0'];
                    this.isAuthorized.next(true);
                    console.log(this.isAuthorized);
                    this.router.navigate(['/']);
                    this.spinnerService.hide();
                }
                } ,
                (error) => { this.error = error;
                    console.log(this.error);
                }
        );
    }

    getCurrenUser () {
        return this.currentUser;
    }




    clear () {
        this.spinnerService.show();
        localStorage.setItem('uid', '');
        localStorage.setItem('id', '');
        this.currentUser = null;
        this.isAuthorized.next(false);
        this.router.navigate(['/signin/']);
        this.spinnerService.hide();
    }
}
