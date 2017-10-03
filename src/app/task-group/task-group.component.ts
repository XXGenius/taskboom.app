import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../task.model';

import {TaskGroup} from '../task-group.model';
import {TaskGroupService} from '../task-group.service';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.css']
})
export class TaskGroupComponent implements OnInit {
  @Input() taskGroup: TaskGroup;
  tasks: Task[];
  maxTaskNumber = 4;
  token = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.tasks = this.taskGroupService.currentTaskGroup.tasks;
    this.apiService.getTasks(this.token).subscribe( (tasks) => { this.tasks = tasks} );
  }

  addTask(value: string) {
    // const id = this.tasks.length + 1;
    // this.taskGroupService.currentTaskGroup.tasks.push(new Task(id, value));
    this.apiService.addTask(value)
        .subscribe( (task) => { this.tasks = task} );
  }

}
