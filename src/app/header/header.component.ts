import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin = false;
  isAuthorized = false;
  currentUser;
  constructor(private authService: AuthService, private ref: ChangeDetectorRef) {
    this.authService.setAuthHook();
    this.authService.isAuthorized.subscribe(isAutorized => {
      this.isAuthorized = isAutorized;
      this.currentUser = this.authService.getCurrenUser();
      if  ( this.currentUser['user_role_id'] === 2)  {
        this.admin = true;
      } else {
        this.admin = false;
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
