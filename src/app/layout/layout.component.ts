import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLeft() {
    // this.taskGroupService.onLeft();
  }

  onRight() {
    // this.taskGroupService.onRight();
  }


}
