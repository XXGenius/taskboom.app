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
    email;
    url;
    currentUserSubscribe: ISubscription;
    constructor(private apiservice: ApiService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) {
        window['authHook']  = this.authHook;
        const email = localStorage.getItem('email').replace( '%40', '@');
        const tr =  email.replace( '%40', '@');
        this.email = tr;
        console.log(tr);
        const uid = localStorage.getItem('uid');
        this.url = localStorage.getItem('url');
        if (this.email === 'false') {
          this.email = '';
        }
          if (this.url === 'false') {
            this.url = 'signin';
          }
        // this.apiservice.getUserByEmail(this.email)
        //   .subscribe((user) => {
        //   console.log(user.length);
        //     if (user.length = 0) {
        //       this.url = 'signup';
        //     } else  {
        //       this.url = 'signin';
        //     }
        //   });
        console.log(this.url);
        this.spinnerService.show();
        if (uid) {
            this.currentUserSubscribe = this.apiservice.getCurrentUser(uid)
                .subscribe(user => {
                this.currentUser = user['0'];
                    this.isAuthorized.next(true);
                    console.log(this.isAuthorized);
                });
            router.navigate(['day']);
            this.spinnerService.hide();
        } else {
            this.isAuthorized.next(false);
            router.navigate([this.url]);
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
                    const id = localStorage.getItem('id');
                    this.apiservice.getLongCycle(id).subscribe( (cycle) => {
                        if (!(cycle['0'])) {
                            this.router.navigate(['wisdom']);
                            this.currentUser = user['0'];
                            this.isAuthorized.next(true);
                        } else {
                            this.router.navigate(['day']);
                            this.currentUser = user['0'];
                            this.isAuthorized.next(true);
                        }
                    });
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
                    console.log(this.isAuthorized);
                    const id = localStorage.getItem('id');
                    this.apiservice.getLongCycle(id).subscribe( (cycle) => {
                        if (!(cycle['0'])) {
                            this.router.navigate(['wisdom']);
                            this.currentUser = user['0'];
                            this.isAuthorized.next(true);
                            this.spinnerService.hide();
                        } else {
                            this.router.navigate(['day']);
                            this.currentUser = user['0'];
                            this.isAuthorized.next(true);
                            this.spinnerService.hide();
                        }
                    });
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
