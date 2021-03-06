import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReversePipe} from './pipes/reverse.pipe';
import {AppRoutingModule} from './app-routing.module';
import {IndexComponent} from './views/index/index.component';
import {OneDayComponent} from './partials/one-day/one-day.component';
import {ApiService} from './services/api.service';
import {StatusComponent} from './admin/status/status.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {AdminComponent} from './admin/admin.component';
import {ProjectComponent} from './admin/project/project.component';
import {RoleComponent} from './admin/role/role.component';
import {UserComponent} from './admin/user/user.component';
import {LevelComponent} from './admin/level/level.component';
import {UserGroupComponent} from './admin/user-group/user-group.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {MyAuthService} from './services/myauth.service';
import {HttpClientModule} from '@angular/common/http';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {WisdomComponent} from './wisdom/wisdom.component';
import {LongcycleComponent} from './longcycle/longcycle.component';
import {WeekcycleComponent} from './weekcycle/weekcycle.component';
import {NextdayComponent} from './nextday/nextday.component';
import {ReviewComponent} from './review/review.component';
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule,} from 'angular5-social-login';


export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('568316376856465')
      }, {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('833375704151-t8ndgfsmejchv63on8duuksa01r392gt.apps.googleusercontent.com')
    },
    ]);
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    ProjectComponent,
    RoleComponent,
    UserComponent,
    StatusComponent,
    LevelComponent,
    UserGroupComponent,
    ReversePipe,
    IndexComponent,
    OneDayComponent,
    StatusComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent,
    WisdomComponent,
    LongcycleComponent,
    WeekcycleComponent,
    NextdayComponent,
    ReviewComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    SocialLoginModule,


  ],
  providers: [
    ApiService, SigninComponent, MyAuthService, HeaderComponent,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
