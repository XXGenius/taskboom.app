import {Component, Input, OnInit} from '@angular/core';
import {Task} from './task.model';
import {TaskService} from './task.service';
import {TaskGroup} from '../task-group.model';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.css']
})
export class TaskGroupComponent implements OnInit {
  @Input() taskGroup: TaskGroup;

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.tasks;
  }

}
