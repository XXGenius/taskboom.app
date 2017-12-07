import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {ISubscription} from 'rxjs/Subscription';
import {AuthService} from '../services/auth.service';
import {state, trigger, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-task-tape',
  templateUrl: './task-tape.component.html',
  styleUrls: ['./task-tape.component.css'],
    animations: [
        trigger('anim', [
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
export class TaskTapeComponent implements OnInit, OnDestroy {

  tasks = [];
  private taskSubscription: ISubscription;
  constructor(private apiService: ApiService) {
      const id = localStorage.getItem('id');
      this.taskSubscription = apiService.getTasks(id).subscribe(
          (tasks) => {
              console.log(tasks);
              this.tasks.push(tasks);
          });
  }

  ngOnInit() {
      console.log('tape init');
  }

    ngOnDestroy() {
        this.taskSubscription.unsubscribe();
        console.log('tape die');
    }
}
