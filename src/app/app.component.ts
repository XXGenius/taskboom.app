import { Component, OnInit } from '@angular/core';
import {TaskGroup} from './task-group.model';
import {TaskGroupService} from './task-group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentTaskGroup: TaskGroup;

  constructor(private taskGroupService: TaskGroupService) { }

  ngOnInit() {
    this.currentTaskGroup = this.taskGroupService.currentTaskGroup;
  }
}
