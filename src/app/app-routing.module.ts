import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './views/index/index.component';
import {StatusComponent} from './admin/status/status.component';
import {ProjectComponent} from './admin/project/project.component';
import {RoleComponent} from './admin/role/role.component';
import {UserComponent} from './admin/user/user.component';
import {LevelComponent} from './admin/level/level.component';
import {UserGroupComponent} from './admin/user-group/user-group.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {WisdomComponent} from './wisdom/wisdom.component';
import {LongcycleComponent} from './longcycle/longcycle.component';
import {WeekcycleComponent} from './weekcycle/weekcycle.component';
import {NextdayComponent} from './nextday/nextday.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: IndexComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'wisdom', component: WisdomComponent},
  {path: 'long', component: LongcycleComponent},
  {path: 'week', component: WeekcycleComponent},
  {path: 'day', component: NextdayComponent},
  {path: 'statuses', component: StatusComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'roles', component: RoleComponent},
  {path: 'users', component: UserComponent},
  {path: 'levels', component: LevelComponent},
  {path: 'usergroups', component: UserGroupComponent},
  {path: 'signup', component: SignupComponent}


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
