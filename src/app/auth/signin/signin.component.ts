import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MyAuthService} from '../../services/myauth.service';
import {NgForm} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  error: any;
  email;
  constructor(private socialAuthService: AuthService, private myauthService: MyAuthService,
              private apiService: ApiService, private ref: ChangeDetectorRef) {
    this.error =  this.myauthService.error;
    this.email =  this.myauthService.email;
  }

  // public socialSignIn(socialPlatform: string) {
  //   let socialPlatformProvider;
  //   if (socialPlatform === 'facebook') {
  //     socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  //   }else if (socialPlatform === 'google') {
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   }
  //   this.socialAuthService.signIn(socialPlatformProvider)
  //     .then(
  //     (userData) => {
  //       console.log(socialPlatform + ' sign in data: ' , userData);
  //       const name = userData['name'];
  //       const uid  = userData['id'];
  //       localStorage.setItem('uid', uid);
  //       const email = userData['email'];
  //       const image = userData['image'];
  //       this.myauthService.setAuthHook(name, uid, email, image);
  //     }
  //   );
  // }

  ngOnInit() {
      console.log('auth init');
  }

  login(form: NgForm) {
      this.myauthService.login(form.value.email, form.value.password);
      this.error =  this.myauthService.error;
      this.ref.detectChanges();
  }

  ngOnDestroy () {
      console.log('auth die');
  }
}
