import { Component, OnInit } from '@angular/core';
import {TaskGroup} from './task-group.model';
import {TaskGroupService} from './task-group.service';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentTaskGroup: TaskGroup;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.currentTaskGroup = this.taskGroupService.currentTaskGroup;
    this.apiService.getDay()
        .subscribe( (taskgroup) => { this.currentTaskGroup = taskgroup} );
  }
}
