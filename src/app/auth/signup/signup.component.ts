import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {MyAuthService} from '../../services/myauth.service';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: string;
  email: string;

  constructor(private socialAuthService: AuthService, private apiService: ApiService, private myauthService: MyAuthService) {
    this.email = this.myauthService.email;
  }

  ngOnInit() {
  }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider)
      .then(
        (userData) => {
          console.log(socialPlatform + ' sign in data: ', userData);
          const name = userData['name'];
          const uid = userData['id'];
          const email = userData['email'];
          const image = userData['image'];
          this.myauthService.setAuthHook(name, uid, email, image);
        }
      );
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
          this.myauthService.login(email, password);
        },
        (error) => {
          this.error = error;
          console.log(this.error);
        });
  }
}

