import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService {

    private authHook = new Subject();


    constructor() {
        window['authHook']  = this.authHook;
    }

    setAuthHook() {
        this.authHook.subscribe(authToken => {
            console.log('setAuthHook', authToken);
        });
    }
}
