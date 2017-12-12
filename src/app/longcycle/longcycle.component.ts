import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-longcycle',
  templateUrl: './longcycle.component.html',
  styleUrls: ['./longcycle.component.css']
})
export class LongcycleComponent implements OnInit {

  constructor(private apiService: ApiService) {
    const id = localStorage.getItem('id');
    this.apiService.getLongCycle(id).subscribe( cycle =>
        console.log(cycle['0'].id)
    );
  }

  ngOnInit() {
  }

}
