import { BrowserModule } from '@angular/platform-browser';
import {ChangeDetectorRef, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { TaskItemComponent } from './day/task-item/task-item.component';
import {FormsModule} from '@angular/forms';

import { HeaderComponent } from './header/header.component';

import {Angular2FontawesomeModule} from 'angular2-fontawesome';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import { ReversePipe } from './pipes/reverse.pipe';
import {AppRoutingModule} from './app-routing.module';
import { IndexComponent } from './views/index/index.component';
import { OneDayComponent } from './partials/one-day/one-day.component';
import {ApiService} from './services/api.service';
import {StatusComponent} from './admin/status/status.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {AdminComponent} from './admin/admin.component';
import {ProjectComponent} from './admin/project/project.component';
import {RoleComponent} from './admin/role/role.component';
import {UserComponent} from './admin/user/user.component';
import {LevelComponent} from './admin/level/level.component';
import {UserGroupComponent} from './admin/user-group/user-group.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './services/auth.service';
import { TaskTapeComponent } from './task-tape/task-tape.component';



@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    TaskItemComponent,
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
    TaskItemComponent,
    SignupComponent,
    SigninComponent,
    TaskTapeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Angular2FontawesomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService, SigninComponent, AuthService, HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
