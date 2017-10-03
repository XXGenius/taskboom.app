import { Injectable } from '@angular/core';
import {TaskGroup} from './task-group.model';
import {Task} from './task.model';
import {forEach} from '@angular/router/src/utils/collection';
import {ApiService} from './api.service';

@Injectable()
export class TaskGroupService {

  taskGroups: TaskGroup[] = [];
  currentTaskGroup: TaskGroup;

  constructor() {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const today = dd + '.' + mm + '.' + yyyy;
      // this.currentTaskGroup = this.taskGroups[0];
  }

  onLeft() {

  }

  onRight() {

  }
}
