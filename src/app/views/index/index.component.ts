import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  constructor( activatedRoute: ActivatedRoute,
              router: Router) {
    if (activatedRoute.children.length === 0) {
      router.navigate(['/day']);
    }
  }

  ngOnInit() { }

}
