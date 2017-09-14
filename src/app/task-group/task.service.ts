import { Injectable } from '@angular/core';
import {Task} from './task.model';

@Injectable()
export class TaskService {

  tasks: Task[] = [
    new Task('убрать квартиру'),
    new Task('Забрал справку со старой работы'),
    new Task('Отправил 10 резюме')
  ];

  constructor() { }

}
