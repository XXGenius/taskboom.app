import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input() task;
  active: boolean = false;

  constructor() { }

  ngOnInit() {
    this.active = this.task.checked;
  }

  onCheck() {
    this.active = this.active ? false : true;
  }
}
