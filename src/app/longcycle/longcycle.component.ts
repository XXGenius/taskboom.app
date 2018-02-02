import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {NgForm} from "@angular/forms";
import {Subject} from "rxjs/Subject";
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-longcycle',
  templateUrl: './longcycle.component.html',
  styleUrls: ['./longcycle.component.css'],
  animations: [
    trigger('list', [
      state('in', style({
        opacity: 1,
        left: '10%',
      })),
      transition('void => *', [
        style({
          opacity: 0,
          left: '8%',
        }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(3000, style({
          opacity: 0,
          left: '6%',
        }))
      ]),
    ]),
    trigger('day', [
      state('in', style({
        opacity: 1,
      })),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(1000)
      ]),
    ])
  ]
})
export class LongcycleComponent implements OnInit {
  save = false;
  pageTwo = false;
  steps: any = [];
  rewards: any = [];
  edit = false;
  firsttask = new Subject();
  secondtask = new Subject();
  thirdtask = new Subject();
  constructor(private apiService: ApiService) {
    const id = localStorage.getItem('id');
    this.apiService.getLongCycle(id)
        .subscribe( (cycle) => {
        console.log(cycle['0'].id);
        const cycle_id = cycle['0'].id;
        this.apiService.getMySteps(cycle_id)
            .subscribe( (steps) => {
              this.steps = steps;
          console.log(steps);
        });
        this.apiService.getMyRewards(cycle_id).subscribe((reward) => {
           this.rewards = reward;
        });
        this.apiService.getMyTasks(cycle_id).subscribe((task) => {
            this.firsttask = task['0'];
            this.secondtask = task['1'];
            this.thirdtask = task['2'];
            console.log(this.firsttask);
            console.log(this.secondtask);
            console.log(this.thirdtask);
        });
    });
  }

  ngOnInit() {
      this.pageTwo = false;
      window.scroll(0, 0 );
  }

  move() {
    this.pageTwo = true;
    window.scroll(0, 0 );
  }

  back() {
    this.pageTwo = false;
      window.scroll(0, 0 );
    }

    updateReward (form: NgForm, i) {
      this.save = true;
      const id = this.rewards[i].id;
      this.apiService.updateReward(id, form.value.text)
          .subscribe((reward) => {
          console.log(reward);
            this.save = false;
          });
    }

    update (form: NgForm, i) {
      this.save = true;
        const id = this.steps[i].id;
        this.apiService.updateStep(id, form.value.text).subscribe(
            (step) => {
                this.steps[i].text = step.exp;
                 this.save = false;
            }
        );
    }

    updateFirstTask (form: NgForm, id) {
      this.save = true;
        this.apiService.updateTask(form.value.text, id).subscribe(
            (task) => {
                this.firsttask['text'] = task.text;
              this.save = false;
            }
        );
    }

  updateSecondTask (form: NgForm, id) {
    this.save = true;
    this.apiService.updateTask(form.value.text, id).subscribe(
      (task) => {
        this.thirdtask['text'] = task.text;
        this.save = false;
      }
    );
  }

    updateThirdTask (form: NgForm, id) {
      this.save = true;
        this.apiService.updateTask(form.value.text, id).subscribe(
            (task) => {
                this.thirdtask['text'] = task.text;
              this.save = false;
            }
        );
    }
}
