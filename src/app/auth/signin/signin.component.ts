import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import {ApiService} from '../../services/api.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private apiService: ApiService) {
    this.authService.setAuthHook();
  }

  ngOnInit() {
  }

  login(form: NgForm) {
      this.authService.login(form.value.email, form.value.password);
  }
}
