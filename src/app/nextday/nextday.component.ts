import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-nextday',
  templateUrl: './nextday.component.html',
  styleUrls: ['./nextday.component.css'],
  animations: [
    trigger('list', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0%)',
        left: '5%'
      })),
      transition('void => *', [
        style({
          opacity: 1,
          // transform: 'translateX(-30%)',
          left: '5%'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(3000, style({
          opacity: 1,
          transform: 'translateX(-50%)',
          left: '5%'
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
export class NextdayComponent implements OnInit {
  day;
  date;
  time = true;
  tasks: any = [];
  id;

  gratitude;
  comment;
  progress;
  previus = true;
  save = false;

  constructor(private apiService: ApiService, private spinnerService: Ng4LoadingSpinnerService) {
    this.spinnerService.show();
    const id = localStorage.getItem('id');
    const offset = -(new Date().getTimezoneOffset() / 60);
    const d = new Date().toLocaleDateString('en-US');
    const date = (new Date()).getUTCFullYear() + '-' + ((new Date()).getUTCMonth() + 1) + '-' + ((new Date()).getUTCDate());
    const last_date = (new Date()).getUTCFullYear() + '-' + ((new Date()).getUTCMonth() + 1) + '-' + ((new Date()).getUTCDate() - 1);
    console.log(d);
    this.apiService.getDay(last_date, id).subscribe((day) => {
      console.log(day);
      if (!day['0']) {
        this.previus = true;
      } else {
        this.previus = false;
      }
    });
    console.log(date);
    this.apiService.getDay(date, id)
      .subscribe((cycle) => {
        console.log(cycle);
        this.day = cycle['0'];
        if (!this.day) {
          const week_id = localStorage.getItem('week_id');
          this.apiService.addDay(id, date, week_id).subscribe((day) => {
            console.log(day);
            this.day = day;
            this.date = date;
            this.spinnerService.hide();
            const day_id = day['id'];
            this.gratitude = day['gratitude_day'];
            this.comment = day['comment_task'];
            this.progress = day['comment_progress'];
            this.spinnerService.hide();
            const time = (new Date()).getUTCHours() + offset;
            console.log(time);
            if (time >= 18 && time <= 23) {
              this.time = false;
            }
            window.scroll(0, 0);
            this.apiService.getDayTasks(day_id, week_id).subscribe((task) => {
              console.log(task);
              this.tasks = task;
            });
            window.scroll(0, 0);
          });
        } else {
          const time = (new Date()).getUTCHours() + offset;
          console.log(time);
          if (time >= 18 && time <= 23) {
            this.time = false;
          }
          const week_id = localStorage.getItem('week_id');
          this.gratitude = cycle['0']['gratitude_day'];
          this.comment = cycle['0']['comment_task'];
          this.progress = cycle['0']['comment_progress'];
          this.date = cycle['0']['date'];
          const day_id = cycle['0']['id'];
          this.spinnerService.hide();
          window.scroll(0, 0);
          this.apiService.getDayTasks(day_id, week_id).subscribe((task) => {
            console.log(task);
            this.tasks = task;
          });
        }
      });

  }


  onCheck(id, checked, i) {
    // new Audio('/assets/19.wav').play();
    this.spinnerService.show();
    this.apiService.checkTask(id, !checked)
      .subscribe(
        (task) => {
          this.tasks.active = task['checked'];
          this.tasks[i].checked = task['checked'];
          this.spinnerService.hide();
        }
      );
  }

  update(form: NgForm, i) {
    this.save = true;
    // new Audio('/assets/34.wav').play();
    // this.spinnerService.show();
    const id = this.tasks[i].id;
    this.apiService.updateTask(form.value.text, id).subscribe(
      (step) => {
        this.tasks[i].text = step.text;
        this.save = false;

      });
  }

  ngOnInit() {

  }



  nextday() {
    this.day = new Object;
    this.tasks = [];
    this.spinnerService.show();
    const id = localStorage.getItem('id');
    const date = (new Date()).getUTCFullYear() + '-' + ((new Date()).getUTCMonth() + 1) + '-' + ((new Date()).getUTCDate() + 1);
    console.log(date);
    this.apiService.getDay(date, id)
      .subscribe((cycle) => {
        console.log(cycle);
        this.day = cycle['0'];
        if (!this.day) {
          const week_id = localStorage.getItem('week_id');
          this.apiService.addDay(id, date, week_id).subscribe((day) => {
            console.log(day);
            this.day = day;
            const day_id = day['id'];
            this.gratitude = day['gratitude_day'];
            this.comment = day['comment_task'];
            this.progress = day['comment_progress'];
            this.apiService.getDayTasks(day_id, week_id).subscribe((task) => {
              this.tasks = task;
              console.log(task);
            });
            this.date = date;
            this.time = true;
            this.spinnerService.hide();
            window.scroll(0, 0);
          });
        } else {
          this.gratitude = cycle['0']['gratitude_day'];
          this.comment = cycle['0']['comment_task'];
          this.progress = cycle['0']['comment_progress'];
          this.date = date;
          this.time = true;
          this.id = cycle['0']['id'];
          const day_id = this.id;
          this.spinnerService.hide();
          window.scroll(0, 0);
          const week_id = localStorage.getItem('week_id');
          this.apiService.getDayTasks(day_id, week_id).subscribe((task) => {
            console.log(task);
            this.tasks = task;
          });
          this.spinnerService.hide();
          window.scroll(0, 0);
        }
      });
  }

  previousday() {
    this.day = new Object;
    this.tasks = [];
    this.spinnerService.show();
    const id = localStorage.getItem('id');
    const date = (new Date()).getUTCFullYear() + '-' + ((new Date()).getUTCMonth() + 1) + '-' + ((new Date()).getUTCDate() - 1);
    console.log(date);
    this.apiService.getDay(date, id)
      .subscribe((cycle) => {
        console.log(cycle);
        this.day = cycle['0'];
        this.gratitude = cycle['0']['gratitude_day'];
        this.comment = cycle['0']['comment_task'];
        this.progress = cycle['0']['comment_progress'];
        this.date = date;
        const day_id = cycle['0']['id'];
        const week_id = localStorage.getItem('week_id');
        this.apiService.getDayTasks(day_id, week_id).subscribe((task) => {
          console.log(task);
          this.tasks = task;
        });
        this.previus = true;
        this.spinnerService.hide();
        window.scroll(0, 0);
      });
  }

  updateProgress(form: NgForm, id) {
    this.save = true;
    this.apiService.updateProgress(form.value.text, id).subscribe(
      (day) => {
        this.progress = day.comment_progress;
        this.save = false;
      }
    );
  }

  updateGratitude(form: NgForm, id) {
    this.save = true;
    this.apiService.updateGratitude(form.value.text, id).subscribe(
      (day) => {
        this.gratitude = day.gratitude_day;
        this.save = false;
      }
    );
  }

  updateComment(form: NgForm, id) {
    // new Audio('/assets/34.wav').play();
    this.save = true;
    this.apiService.updateComment(form.value.text, id).subscribe(
      (day) => {
        this.comment = day.comment_task;
        this.save = false;
      }
    );
  }

}
