import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [
    trigger('goBefore', [
      state('normal', style({
        // 'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('before', style({
        'background-color': 'blue',
        transform: 'translateX(15rem)'
      })),
      state('after', style({
        'background-color': 'blue',
        transform: 'translateX(-15rem)'
      })),
      transition('normal => before', animate(300)),
      transition('normal => after', animate(300)),
      // transition('highlighted => normal', animate(600))
    ]),
  ]
})

export class TimelineComponent implements OnInit {

  state = 'normal';

  items = [
    '19-09-2017',
    '20-09-2017',
    '21-09-2017',
    '22-09-2017',
    '23-09-2017',
    '24-09-2017',
    '25-09-2017',
  ];

  activeItem = 3;

  clickElementId = 0;

  constructor() { }

  ngOnInit() {

  }

  onClickElement(i) {

  }



  animationStartedBefore(event) {
    console.log(event);
  }

  animationEndedBefore(event) {

    console.log(event)
  }
}
