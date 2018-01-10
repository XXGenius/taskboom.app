import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthorized;
  currentUser;

  constructor(private authService: AuthService, private ref: ChangeDetectorRef) {
    this.authService.setAuthHook();
    this.authService.isAuthorized.subscribe(isAutorized => {
      this.isAuthorized = isAutorized;
      this.currentUser = this.authService.getCurrenUser();
      this.ref.detectChanges();
    });
  }

  exit() {
    this.authService.clear();
  }

  ngOnInit() {
  }
}
