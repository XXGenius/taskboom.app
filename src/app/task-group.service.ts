import { Injectable } from '@angular/core';
import {TaskGroup} from './task-group.model';
import {Task} from './task.model';
import {forEach} from '@angular/router/src/utils/collection';

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

    this.taskGroups = [new TaskGroup(
        15,
        9,
        2017,
        [
          new Task(1, 'убрать квартиру'),
          new Task(2, 'Забрал справку со старой работы'),
          new Task(3, 'Отправил 10 резюме')
        ]
    ), new TaskGroup(
        16,
        9,
        2017,
        [
            new Task(4, 'Придумать новые таски теста'),
            new Task(5, 'Заправить дерижабль')
        ]
    ), new TaskGroup(
        17,
        9,
        2017,
        [
            new Task(6, 'Помыть машину')
        ]
    ), new TaskGroup(
        18,
        9,
        2017,
        [
            new Task(7, 'Купить яйца')
        ]
    ), new TaskGroup(
        19,
        9,
        2017,
        [
            new Task(8, 'Посидеть на ютубе'),
            new Task(9, 'Ужин с родителями'),
        ]
    ), new TaskGroup(
        20,
        9,
        2017,
        [
            new Task(10, 'Оплатить интернет'),
            new Task(11, 'Сменить термопасту'),
            new Task(12, 'проверить школьный дневник ребёнка')
        ]
    )];


    this.currentTaskGroup = this.taskGroups[0];
  }

  onLeft() {

  }

  onRight() {

  }
}
