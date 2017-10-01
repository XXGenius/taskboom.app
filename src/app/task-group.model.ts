import {Task} from './task.model';

export class TaskGroup {
  day: number;
  month: number;
  year: number;
  tasks: Task[];
  constructor(day: number, month: number, year: number, tasks: Task[]) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.tasks = tasks;
  }
}
