import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.css']
})
export class TaskGroupComponent implements OnInit, OnDestroy {
  @Input() taskGroup;
  day;
  tasks = [];
  maxTaskNumber = 4;

  id;

  private tasksSubscription: ISubscription;
  private daySubscription: ISubscription;

  constructor(private apiService: ApiService) {
    this.daySubscription = this.apiService.getDays().subscribe(
      (days) => {
        console.log(days);
        this.day = days[0];

      }
    );
    this.tasksSubscription = this.apiService.getTasks().subscribe(
      (tasks) => {
        console.log(tasks);
        this.tasks = tasks;
      }
    );
  }

  ngOnInit() {

    // this.tasks = this.taskGroupService.currentTaskGroup.tasks;

  }

  addTask(value: string) {
    // const id = this.tasks.length + 1;
    // this.taskGroupService.currentTaskGroup.tasks.push(new Task(id, value));
    // this.apiService.addTask(value)
    //     .subscribe( (task) => { this.tasks = task} );
  }

  ngOnDestroy() {
    this.daySubscription.unsubscribe();
    this.tasksSubscription.unsubscribe();
  }
}
