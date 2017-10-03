import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { TaskItemComponent } from './task-group/task-item/task-item.component';
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

@NgModule({
  declarations: [
    AppComponent,
    TaskGroupComponent,
    TaskItemComponent,
    HeaderComponent,
    LayoutComponent,
    TimelineComponent,
    ReversePipe,
    IndexComponent,
    OneDayComponent,
    StatusComponent
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
