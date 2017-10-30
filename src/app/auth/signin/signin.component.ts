import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public user;

  constructor(private authService: AuthService) {
    this.authService.setAuthHook();
  }

  ngOnInit() {
  }

  // onSignin(form: NgForm) {
  //   const email = form.value.email;
  //   const password = form.value.password;
  //   this.apiService.login(email, password).subscribe(
  //       (user) => {
  //         this.user = user;
  //         console.log(this.user);
  //       });

  // }

  // autheticate() {
  //   return this.user != null;
  // }

}
