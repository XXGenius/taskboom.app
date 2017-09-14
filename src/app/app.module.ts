import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { TaskItemComponent } from './task-group/task-item/task-item.component';
import {FormsModule} from '@angular/forms';
import {TaskService} from './task-group/task.service';
import {TaskGroupService} from './task-group.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskGroupComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TaskService,
    TaskGroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
