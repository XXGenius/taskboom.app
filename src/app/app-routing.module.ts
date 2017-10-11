import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './views/index/index.component';
import {OneDayComponent} from './partials/one-day/one-day.component';
import {DayComponent} from './day/day.component';
import {StatusComponent} from './admin/status/status.component';
import {ProjectComponent} from './admin/project/project.component';
import {RoleComponent} from './admin/role/role.component';
import {UserComponent} from './admin/user/user.component';
import {LevelComponent} from './admin/level/level.component';
import {UserGroupComponent} from './admin/user-group/user-group.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'day', component: IndexComponent, children: [
    { path: ':date', component: DayComponent},
  ]},
  { path: 'statuses', component: StatusComponent},
  { path: 'projects', component: ProjectComponent},
  { path: 'roles', component: RoleComponent},
  { path: 'users', component: UserComponent},
  { path: 'levels', component: LevelComponent},
  { path: 'usergroups', component: UserGroupComponent}

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
