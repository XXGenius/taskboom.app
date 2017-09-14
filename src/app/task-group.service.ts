import { Injectable } from '@angular/core';
import {TaskGroup} from './task-group.model';

@Injectable()
export class TaskGroupService {

  taskGroups: TaskGroup[] = [
    new TaskGroup('BOOM!'),
  ];

  constructor() { }

}
