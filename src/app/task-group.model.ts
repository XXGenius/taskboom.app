import {Task} from './task-group/task.model';

export class TaskGroup {
  name: string;
  tasks: Task[];
  constructor(name: string, tasks: Task[]) {
    this.name = name;
    this.tasks = tasks;
  }
}
