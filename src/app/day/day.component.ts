import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {ISubscription} from 'rxjs/Subscription';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html'
})
export class DayComponent implements OnInit, OnDestroy {
  @Input() taskGroup;

  tasks = [];
  maxTaskNumber = 4;

  date;

  private routeSubscription: ISubscription;
  private daySubscription: ISubscription;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.date = params['date']; // (+) converts string 'id' to a number
      this.daySubscription = this.apiService.getDay((new Date()).getUTCFullYear() + '-' + ((new Date()).getUTCMonth() + 1) + '-' + (new Date()).getUTCDate())
          .subscribe(
        (tasks) => {
          this.tasks = tasks;
        }
      );
    });

  }

  ngOnInit() {

    // this.tasks = this.taskGroupService.currentTaskGroup.tasks;

  }

  addTask(text: string) {
    let project = 8;
    let date = (new Date()).getUTCFullYear() + '-' + ((new Date()).getUTCMonth() + 1) + '-' + (new Date()).getUTCDate();
    this.apiService.createTask(text, date, project).subscribe(
        (task) => {
          console.log(task);
          this.tasks.push({id: task.id, text: task.text, date: task.date});
        }
    );
  }

  ngOnDestroy() {
    this.daySubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
