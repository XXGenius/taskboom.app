import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wisdom',
  templateUrl: './wisdom.component.html',
  styleUrls: ['./wisdom.component.css']
})
export class WisdomComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
  }

  addLongCycle() {
    const id = localStorage.getItem('id');
    this.apiService.addLongCycle(id).subscribe((cycle) => {
      console.log(cycle);
      this.apiService.addWeekCycle(id).subscribe((week) => {
        console.log(week);
      });
      this.router.navigate(['/long']);
    });
  }
}
