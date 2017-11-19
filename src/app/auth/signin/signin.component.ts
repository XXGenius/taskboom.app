import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import {ApiService} from '../../services/api.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  error: any;
  constructor(private authService: AuthService, private apiService: ApiService, private ref: ChangeDetectorRef) {
    this.authService.setAuthHook();
  }

  ngOnInit() {
  }

  login(form: NgForm) {
      this.authService.login(form.value.email, form.value.password);
      this.error =  this.authService.error;
      this.ref.detectChanges();
  }
}
