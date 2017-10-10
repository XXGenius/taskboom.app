import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { TaskItemComponent } from './day/task-item/task-item.component';
import {FormsModule} from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import { TimelineComponent } from './layout/timeline/timeline.component';
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

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    TaskItemComponent,
    HeaderComponent,
    LayoutComponent,
    AdminComponent,
    ProjectComponent,
    RoleComponent,
    UserComponent,
    StatusComponent,
    LevelComponent,
    UserGroupComponent,
    TimelineComponent,
    ReversePipe,
    IndexComponent,
    OneDayComponent,
    StatusComponent,
    DropdownDirective
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
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
