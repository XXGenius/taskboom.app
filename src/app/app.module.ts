import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { TaskItemComponent } from './task-group/task-item/task-item.component';
import {FormsModule} from '@angular/forms';

import {TaskGroupService} from './task-group.service';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TaskGroupComponent,
    TaskItemComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Angular2FontawesomeModule
  ],
  providers: [
    TaskGroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
