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
    '06-09-2017',
    '07-09-2017',
    '08-09-2017',
    '09-09-2017',
    '10-09-2017',
    '11-09-2017',
    '12-09-2017',
    '13-09-2017',
    '14-09-2017',
    '15-09-2017',
    '16-09-2017',
    '17-09-2017',
    '18-09-2017',
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
    // console.log(event);
  }

  animationEndedBefore(event) {

    // console.log(event)
  }
}
