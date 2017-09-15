import { Component, OnInit } from '@angular/core';
import {TaskGroupService} from '../task-group.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private taskGroupService: TaskGroupService) { }

  ngOnInit() {
  }

  onLeft() {
    this.taskGroupService.onLeft();
  }

  onRight() {
    this.taskGroupService.onRight();
  }
}
