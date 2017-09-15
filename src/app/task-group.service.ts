import { Injectable } from '@angular/core';
import {TaskGroup} from './task-group.model';
import {Task} from "./task-group/task.model";

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

    this.currentTaskGroup = new TaskGroup(
      today,
      [
        new Task(1, 'убрать квартиру'),
        new Task(2, 'Забрал справку со старой работы'),
        new Task(3, 'Отправил 10 резюме')
      ]
    );
    this.taskGroups.push(this.currentTaskGroup);
  }

  onLeft() {
    //ToDo добавить переход на день влево, если его нет, то добавить в массив
  }

  onRight() {

  }
}
