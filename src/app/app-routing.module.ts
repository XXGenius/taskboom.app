import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './views/index/index.component';
import {OneDayComponent} from './partials/one-day/one-day.component';
import {TaskGroupComponent} from './task-group/task-group.component';
import {StatusComponent} from './admin/status/status.component';

const today: string = ((new Date()).getUTCDate() + '-' + ((new Date()).getUTCMonth() + 1) + '-' + (new Date()).getUTCFullYear()).toString();

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'day/1' },
  { path: 'day', component: IndexComponent, children: [
    { path: ':id', component: TaskGroupComponent},
  ]},
  { path: 'statuses', component: StatusComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
