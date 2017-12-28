import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {NgForm} from '@angular/forms';
import {Subject} from 'rxjs/Subject';


@Component({
  selector: 'app-weekcycle',
  templateUrl: './weekcycle.component.html',
  styleUrls: ['./weekcycle.component.css']
})
export class WeekcycleComponent implements OnInit {
  tasks;
  reward = new Subject();
  constructor(private apiService: ApiService) {
    const id = localStorage.getItem('id');
    this.apiService.getWeekCycle(id)
      .subscribe( (cycle) => {
        console.log(cycle['0'].id);
        const cycle_id = cycle['0'].id;
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
  }

  onCheck(id, checked, i) {
    this.apiService.checkTask(id, !checked)
        .subscribe(
        (task) => {
          console.log(task);
          this.tasks.active = task['checked'];
          this.tasks[i].checked = task['checked'];
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
