import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-longcycle',
  templateUrl: './longcycle.component.html',
  styleUrls: ['./longcycle.component.css']
})
export class LongcycleComponent implements OnInit {
  pageTwo = false;
  constructor(private apiService: ApiService) {
    const id = localStorage.getItem('id');
    this.apiService.getLongCycle(id).subscribe( cycle =>
        console.log(cycle['0'].id)
    );
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

}
