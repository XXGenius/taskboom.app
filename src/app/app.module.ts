import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'task', component: TaskComponent},
      { path: '', redirectTo: 'task', pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent,
    TaskComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
