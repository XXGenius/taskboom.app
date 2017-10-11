import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input() task;
  active: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.active = this.task.checked;
  }

  onCheck(id: number, active) {
    this.apiService.checkTask(id, active)
        .subscribe(
        (task) => {
          this.active = task;
        }
    );
  }
}
