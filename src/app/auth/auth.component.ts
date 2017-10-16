import {Component, OnInit} from '@angular/core';

import {ISubscription} from 'rxjs/Subscription';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';



@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    auth;
    constructor(private apiService: ApiService) { }

    ngOnInit() {
        // this.tasks = this.taskGroupService.currentTaskGroup.tasks;
    }

    authenticate(form: NgForm) {
      this.apiService.login(form.value.email, form.value.password).subscribe(
          (user) => {
            console.log(user);
              this.auth = user;
          });
    }
}
