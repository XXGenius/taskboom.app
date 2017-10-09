import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
    @Input() admin;

    constructor() { }

    ngOnInit() {
    }
}