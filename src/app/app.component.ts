import { Component, OnInit } from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentTaskGroup;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.currentTaskGroup = this.taskGroupService.currentTaskGroup;
    // this.apiService.getDay()
    //     .subscribe( (taskgroup) => { this.currentTaskGroup = taskgroup} );
  }
}
