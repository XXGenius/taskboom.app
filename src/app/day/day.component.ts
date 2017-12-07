import {ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {ISubscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DOCUMENT} from '@angular/common';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
    styleUrls: ['./day.component.css'],
    animations: [
        trigger('list', [
            state('in', style({
                opacity: 1,
                transform: 'translateX(0)'
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100px)'
                }),
                animate(300)
            ]),
            transition('* => void', [
                animate(300, style({
                    opacity: 0,
                    transform: 'translateX(100px)'
                }))
            ]),
        ])
    ]
})
export class DayComponent implements OnInit, OnDestroy {
  @Input() taskGroup;
  auth;
  tasks: any = [];
  edit = false;
  maxTaskNumber = 4;

  date;
  currentUser;

  private routeSubscription: ISubscription;
  private daySubscription: ISubscription;

  constructor(private authService: AuthService, private apiService: ApiService,
              private route: ActivatedRoute, private ref: ChangeDetectorRef,
              @Inject(DOCUMENT) private doc: Document,
              private spinnerService: Ng4LoadingSpinnerService) {
      this.spinnerService.show();
      this.auth = this.authService.isAuthorized;
      this.routeSubscription = this.route.params.subscribe(params => {
      this.date = params['date']; // (+) converts string 'id' to a number
        const id = localStorage.getItem('id');
        this.daySubscription = apiService.getDay(this.date, id).subscribe(
        (tasks) => {
          console.log(tasks);
          this.tasks = tasks;
          this.ref.detectChanges();
            this.spinnerService.hide();
        }
      );

    });
  }

  ngOnInit() {
      console.log('day init');
    // this.tasks = this.taskGroupService.currentTaskGroup.tasks;

  }

  addTask(title: string) {
      const project = 8;
      const id = localStorage.getItem('id');
      this.apiService.createTask(title, this.date, project, id).subscribe(
        (task) => {
            console.log(task.id);
            console.log(task);
          this.tasks.push({id: task.id, title: task.title, date: task.date});
          this.ref.detectChanges();
          (<HTMLInputElement>this.doc.getElementById('search1')).value = '';
        }
    );
  }

  ngOnDestroy() {
      this.daySubscription.unsubscribe();
      this.auth = null;
    this.routeSubscription.unsubscribe();
    console.log('day die');
  }
}
