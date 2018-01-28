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
  review = false;
  victories;
  unresteds;
  specific;
  lessons;
  constructor(private apiService: ApiService, private spinnerService: Ng4LoadingSpinnerService) {
    this.spinnerService.show();
    window.scroll(0, 0);
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
            this.apiService.getReview(cycle_id)
              .subscribe( (review) => {
              console.log(review);
            });
          });
          window.scrollBy(0, 0);
        }else {
          const cycle_id = cycle['0']['id'];
          this.apiService.getMyRewards(cycle_id)
            .subscribe((reward) => {
              this.reward = reward['0'];
              });
          this.apiService.getMyTasks(cycle_id)
            .subscribe((tasks) => {
              this.tasks = tasks;
              console.log(tasks);
            });
          this.apiService.getReview(cycle_id)
            .subscribe( (review) => {
              console.log(review);
              if ( review.length === 0) {
                this.review = false;
              }else {
                const review_id = review['0']['id'];
                console.log(review_id);
                this.apiService.getLesson(review_id)
                  .subscribe((lesson) => {
                  console.log(lesson);
                  this.lessons = lesson;
                });
                this.apiService.getSpecific(review_id)
                  .subscribe((spec) => {
                  console.log(spec);
                  this.specific = spec;
                });
                this.apiService.getUnrested(review_id)
                  .subscribe((unrest) => {
                  console.log(unrest);
                  this.unresteds = unrest;
                });
                this.apiService.getVictory(review_id)
                  .subscribe((victory) => {
                  console.log(victory);
                  this.victories = victory;
                });
                this.review = true;
              }
            });
          window.scrollBy(0, 0);
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

  updateVictory (form: NgForm, i) {
    const id = this.victories[i].id;
    this.apiService.updateVictory(form.value.text, id).subscribe(
      (step) => {
        this.tasks[i].text = step.text;
      }
    );
  }

  updateSpec(form, i)  {
    const id = this.specific[i].id;
    this.apiService.updateSpecific(form.value.text, id).subscribe(
      (step) => {
        this.tasks[i].text = step.text;
      }
    );
  }

  updateUnrested(form, i)  {
    const id = this.unresteds[i].id;
    this.apiService.updateUnrested(form.value.text, id).subscribe(
      (step) => {
        this.tasks[i].text = step.text;
      }
    );
  }

  updateLesson(form, i)  {
    const id = this.lessons[i].id;
    this.apiService.updateLesson(form.value.text, id).subscribe(
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

  scrollbyid() {
    window.scrollBy(0, 1770);
  }
}
