import {Component, OnInit, Input, Inject, ViewChild} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ISubscription} from 'rxjs/Subscription';
import {DOCUMENT} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['../admin.component.css'],
    animations: [
      trigger('list', [
        state('in', style({
          opacity: 1,
          transform: 'translateX(0)'
        })),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(-100px)'
          }),
          animate(300)
        ]),
        transition('* => void', [
          animate(300, style({
            opacity: 0,
            transform: 'translateX(100px)'
          }))
        ]),
      ])
    ]
})
export class StatusComponent implements OnInit {


  @ViewChild('inputCreate') inputCreate;

    statuses = [];

    edit;

    private statusesSubscription: ISubscription;
    constructor(private apiService: ApiService,
                @Inject(DOCUMENT) private doc: Document, ) {
        this.statusesSubscription = this.apiService.getStatuses().subscribe(
                (statuses) => {
                    console.log(statuses);
                    this.statuses = statuses;
                }
            );
    }

    ngOnInit() {
    }

    remove(i: number) {
      const id = this.statuses[i].id;
      if(confirm('Are you sure to delete: ' + this.statuses[i].title)) {
        this.apiService.deleteStatus(id)
          .subscribe(
            (status) => {
              console.log(status);
            }
          );
        this.statuses = this.statuses.filter( status => status.id !== id);
      }
    }

    showUpdate(i) {
      this.statuses[i].edit = true;
    }

    create(form: NgForm) {
        this.apiService.createStatus(form.value.title).subscribe(
          (status) => {
              console.log(status);
              this.statuses.push({id: status.id, title: status.title});
          }
      );
    }

    cancel(i: number) {
      const id = this.statuses[i].id;
      (<HTMLInputElement>this.doc.getElementById('input-title-' + id)).value = this.statuses[i].title;
      this.statuses[i].edit = false;
    }

    update(form: NgForm, i: number) {
      const id = this.statuses[i].id;
      this.apiService.updateStatus(id, form.value.title).subscribe(
            (status) => {
                this.statuses[i].title = status.title;
                this.statuses[i].edit = false;
            }
        );
    }
}
