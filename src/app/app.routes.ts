import { Routes } from '@angular/router';
import {TaskItemComponent} from './task-group/task-item/task-item.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    { path: '', component: TaskItemComponent },
    { path: 'task/create', component: TaskItemComponent},
    { path: 'task/delete/:id', component: TaskItemComponent}
];
