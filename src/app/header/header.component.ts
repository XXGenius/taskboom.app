import { Component, OnInit } from '@angular/core';
import {SigninComponent} from '../auth/signin/signin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user;
  constructor() {

  }

  ngOnInit() {
  }
}
