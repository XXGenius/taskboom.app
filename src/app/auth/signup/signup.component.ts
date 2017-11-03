import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const role = 6;
    const email = form.value.email;
    const password = form.value.password;
    this.apiService.registration(email, password, role).subscribe(
        (lvl) => {
          console.log(lvl);
  });

}
}
