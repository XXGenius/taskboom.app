import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {ISubscription} from 'rxjs/Subscription';
import {ActivatedRoute} from "@angular/router";
import {HeaderComponent} from '../header/header.component';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html'
})
export class DayComponent implements OnInit, OnDestroy {
  @Input() taskGroup;
  auth;
  tasks = [];
  maxTaskNumber = 4;

  date;
  currentUser;

  private routeSubscription: ISubscription;
  private daySubscription: ISubscription;

  constructor(private authService: AuthService, private apiService: ApiService,
              private route: ActivatedRoute, ) {
    this.currentUser = this.authService.getCurrenUser();
    console.log(this.currentUser);
    this.routeSubscription = this.route.params.subscribe(params => {
      this.date = params['date']; // (+) converts string 'id' to a number
      this.daySubscription = apiService.getDay(this.date, this.currentUser.id).subscribe(
        (tasks) => {
          console.log(tasks);
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
    this.apiService.createTask(text, this.date, project, this.currentUser.id).subscribe(
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
