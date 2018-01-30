import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {AuthService} from '../services/auth.service';
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthorized;
  currentUser;
  date;
  constructor(private authService: AuthService, private ref: ChangeDetectorRef, private apiService: ApiService) {
    this.authService.setAuthHook();
    this.authService.isAuthorized.subscribe(isAutorized => {
      this.isAuthorized = isAutorized;
      this.currentUser = this.authService.getCurrenUser();
      if (isAutorized) {
        const id = localStorage.getItem('id');
        this.apiService.getDate(id)
          .subscribe((date) => {
            console.log(date);
            this.date = date + 1;
          });
      }
      this.ref.detectChanges();
    });
    }

  exit() {
    this.authService.clear();
  }

  ngOnInit() {
  }
}
