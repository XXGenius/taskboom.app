import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-nextday',
  templateUrl: './nextday.component.html',
  styleUrls: ['./nextday.component.css']
})
export class NextdayComponent implements OnInit {

  constructor(private apiService: ApiService) {
    const id = localStorage.getItem('id');
    const date =
    this.apiService.getDay(date, id)
      .subscribe( (cycle) => {
        console.log(cycle);
        });
  }

  ngOnInit() {
  }

}
