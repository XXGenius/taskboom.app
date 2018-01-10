import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Subject} from 'rxjs/Subject';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-nextday',
  templateUrl: './nextday.component.html',
  styleUrls: ['./nextday.component.css']
})
export class NextdayComponent implements OnInit {
  day;
  date;
  time = false;
  tasks: any =  [];
  id;
  gratitude;
  constructor(private apiService: ApiService, private spinnerService: Ng4LoadingSpinnerService) {
    this.spinnerService.show();
    const id = localStorage.getItem('id');
    const date = (new Date()).getUTCFullYear() + '-' + ((new Date()).getUTCMonth() + 1) + '-' + (new Date()).getUTCDate();
    console.log(date);
    this.apiService.getDay(date, id)
      .subscribe( (cycle) => {
        console.log(cycle);
        this.day = cycle['0'];
        if (!this.day) {
          this.apiService.addDay(id, date).subscribe((day) => {
            console.log(day);
            this.day = day;
            this.date = date;
            this.spinnerService.hide();
            const day_id = day['id'];
            this.spinnerService.hide();
            const time = (new Date()).getUTCHours() + 3;
            console.log(time);
            if (time === 18) {
              this.time = true;
            }
            window.scroll(0, 0 );
            this.apiService.getDayTasks(day_id).subscribe((task) => {
              console.log(task);
              this.tasks = task;
            });
            window.scroll(0, 0 );
          });
        } else {
          const time = (new Date()).getUTCHours() + 3;
          console.log(time);
          if (time === 18) {
            this.time = true;
          }
          this.gratitude = cycle['0']['gratitude_day'];
          this.date = cycle['0']['date'];
          const day_id = cycle['0']['id'];
          this.spinnerService.hide();
          window.scroll(0, 0 );
          this.apiService.getDayTasks(day_id).subscribe((task) => {
            console.log(task);
            this.tasks = task;
          });
        }
        });

  }

  onCheck(id, checked, i) {
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

  update (form: NgForm, i) {
    const id = this.tasks[i].id;
    this.apiService.updateTask(form.value.text, id).subscribe(
      (step) => {
        this.tasks[i].text = step.text;
      }
    );
  }

  ngOnInit() {

  }

  nextday () {
    this.day = new Object;
    this.tasks = [];
    this.spinnerService.show();
    const id = localStorage.getItem('id');
    const date = (new Date()).getUTCFullYear() + '-' + ((new Date()).getUTCMonth() + 1) + '-' + ((new Date()).getUTCDate() + 1);
    console.log(date);
    this.apiService.getDay(date, id)
      .subscribe( (cycle) => {
        console.log(cycle);
        this.day = cycle['0'];
        if (!this.day ) {
          this.apiService.addDay(id, date).subscribe((day) => {
            console.log(day);
            this.day = day;
            const day_id = day['id'];
            this.gratitude = day['gratitude_day'];
            this.apiService.getDayTasks(day_id).subscribe((task) => {
              this.tasks = task;
              console.log(task);
            });
            this.date = date;
            this.spinnerService.hide();
            window.scroll(0, 0 );
            });
          } else {
          this.gratitude = cycle['0']['gratitude_day'];
          this.date = date;
          this.spinnerService.hide();
          window.scroll(0, 0 );
          this.id = cycle['0']['id'];
          const day_id = this.id;
          this.spinnerService.hide();
          window.scroll(0, 0 );
          this.apiService.getDayTasks(day_id).subscribe((task) => {
            console.log(task);
            this.tasks = task;
          });
        }
        });
    }

  previousday () {
    this.day = new Object;
    this.tasks = [];
    this.spinnerService.show();
    const id = localStorage.getItem('id');
    const date = (new Date()).getUTCFullYear() + '-' + ((new Date()).getUTCMonth() + 1) + '-' + ((new Date()).getUTCDate() - 1);
    console.log(date);
    this.apiService.getDay(date, id)
      .subscribe( (cycle) => {
        console.log(cycle);
        this.day = cycle['0'];
        if (!this.day ) {
          this.apiService.addDay(id, date).subscribe((day) => {
            console.log(day);
            this.day = day;
            this.date = date;
            const day_id = day['id'];
            this.apiService.getDayTasks(day_id).subscribe((task) => {
              console.log(task);
              this.tasks = task;
            });
          });
            this.spinnerService.hide();
            window.scroll(0, 0 );
            } else {
          this.date = date;
          this.spinnerService.hide();
          window.scroll(0, 0 );
          const day_id = cycle['0']['id'];
          this.spinnerService.hide();
          window.scroll(0, 0 );
          this.apiService.getDayTasks(day_id).subscribe((task) => {
            console.log(task);
            this.tasks = task;
          });
        }
      });
    }


}
