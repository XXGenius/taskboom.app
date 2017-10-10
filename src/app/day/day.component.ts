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
  private sub: any;


  private tasksSubscription: ISubscription;
  private daySubscription: ISubscription;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.date = params['date']; // (+) converts string 'id' to a number

      this.daySubscription = this.apiService.getDay(this.date).subscribe(
        (tasks) => {
          this.tasks = tasks;
        }
      );
    });

  }

  ngOnInit() {

    // this.tasks = this.taskGroupService.currentTaskGroup.tasks;

  }

  addTask(value: string) {
    console.log(value);
    // const id = this.tasks.length + 1;
    // this.taskGroupService.currentTaskGroup.tasks.push(new Task(id, value));
    // this.apiService.addTask(value)
    //     .subscribe( (task) => { this.tasks = task} );
  }

  ngOnDestroy() {
    this.daySubscription.unsubscribe();
    this.tasksSubscription.unsubscribe();
    this.sub.unsubscribe();
  }
}
