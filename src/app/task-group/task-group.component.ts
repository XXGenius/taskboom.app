import {Component, Input, OnInit} from '@angular/core';
import {Task} from './task.model';

import {TaskGroup} from '../task-group.model';
import {TaskGroupService} from '../task-group.service';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.css']
})
export class TaskGroupComponent implements OnInit {
  @Input() taskGroup: TaskGroup;
  tasks: Task[];
  maxTaskNumber = 5;

  constructor(private taskGroupService: TaskGroupService) { }

  ngOnInit() {
    this.tasks = this.taskGroupService.currentTaskGroup.tasks;
  }

  addTask(value: string) {
    const id = this.tasks.length + 1;
    this.taskGroupService.currentTaskGroup.tasks.push(new Task(id, value));
  }

}
