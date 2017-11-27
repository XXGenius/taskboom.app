import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: any;
  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const role = 13;
    const email = form.value.email;
    const first_name = form.value.first_name;
    const last_name = form.value.last_name;
    const password = form.value.password;
    this.apiService.registration(email, password, first_name, last_name, role)
        .subscribe(
            (user) => {
          console.log(user);
          this.authService.login(email, password);
            },
            (error) => { this.error = error
            console.log(this.error);
            });
  }
}

