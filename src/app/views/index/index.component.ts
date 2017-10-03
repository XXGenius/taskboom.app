import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const m = new Date();
    // console.log((new Date()).getUTCDate()+ "-"+ ((new Date()).getUTCMonth()+1) + '-'+ (new Date()).getUTCFullYear());
  }

}
