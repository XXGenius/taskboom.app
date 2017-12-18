import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {NgForm} from "@angular/forms";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-longcycle',
  templateUrl: './longcycle.component.html',
  styleUrls: ['./longcycle.component.css']
})
export class LongcycleComponent implements OnInit {
  pageTwo = false;
  steps: any = [];
  edit = false;
  tasks: any = [];
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
        this.apiService.getMyTasks(cycle_id).subscribe((task) => {
            console.log(task);
            this.tasks = task;
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

    update (form: NgForm, i) {
    this.steps[i].edit = true;
    }
}
