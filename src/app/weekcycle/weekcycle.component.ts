import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {NgForm} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-weekcycle',
  templateUrl: './weekcycle.component.html',
  styleUrls: ['./weekcycle.component.css']
})
export class WeekcycleComponent implements OnInit {
  tasks;
  reward = new Subject();
  constructor(private apiService: ApiService, private spinnerService: Ng4LoadingSpinnerService) {
    this.spinnerService.show();
    const id = localStorage.getItem('id');
    this.apiService.getWeekCycle(id)
      .subscribe( (cycle) => {
        console.log(cycle);
        if (!cycle['0']) {
          this.apiService.addWeekCycle(id).subscribe((week) => {
            console.log(week);
            const cycle_id = week['id'];
            this.apiService.getMyRewards(cycle_id)
              .subscribe((reward) => {
                this.reward = reward['0'];
                console.log(reward);
              });
            this.apiService.getMyTasks(cycle_id)
              .subscribe((tasks) => {
                this.tasks = tasks;
                console.log(tasks);
              });
          });
        }else {
          const cycle_id = cycle['0']['id'];
          this.apiService.getMyRewards(cycle_id)
            .subscribe((reward) => {
              this.reward = reward['0'];
              console.log(reward);
            });
          this.apiService.getMyTasks(cycle_id)
            .subscribe((tasks) => {
              this.tasks = tasks;
              console.log(tasks);
            });
          }
          });
    this.spinnerService.hide();
  }

  onCheck(id, checked, i) {
    this.spinnerService.show();
    this.apiService.checkTask(id, !checked)
        .subscribe(
        (task) => {
          console.log(task);
          this.tasks.active = task['checked'];
          this.tasks[i].checked = task['checked'];
          this.spinnerService.hide();
          }
    );
  }

  ngOnInit() {
  }

  update (form: NgForm, i) {
    const id = this.tasks[i].id;
    this.apiService.updateTask(form.value.text, id).subscribe(
      (step) => {
        this.tasks[i].text = step.text;
      }
    );
  }

  updateReward (id, form: NgForm) {
    this.apiService.updateReward(id, form.value.text)
      .subscribe((reward) => {
        console.log(reward);
        this.reward['text'] = reward.text;
      });
  }
}
