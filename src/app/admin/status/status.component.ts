import {Component, OnInit, Input, Inject} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ISubscription} from 'rxjs/Subscription';
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {

    statuses = [];

    edit;

    private statusesSubscription: ISubscription;
    constructor(private apiService: ApiService,
                @Inject(DOCUMENT) private doc: Document,) {
        this.statusesSubscription = this.apiService.getStatuses().subscribe(
                (statuses) => {
                    console.log(statuses);
                    this.statuses = statuses;
                }
            );
    }

    ngOnInit() {
    }

    delete(id: number) {
        this.apiService.deleteStatus(id)
            .subscribe(
            (status) => {
                console.log(status);
            }
        );
        this.statuses = this.statuses.filter( status => status.id !== id);
    }

    showUpdate(i) {
      this.statuses[i].edit = true;
    }

    createStatus(title: string) {
        this.apiService.createStatus(title).subscribe(
            (role) => {
                console.log(role);
                this.statuses.push({id: role.id, title: role.title});
            }
        );
    }


    update(i: number) {

      const id = this.statuses[i].id;
      const title = (<HTMLInputElement>this.doc.getElementById('input-title-'+id)).value;

      this.statuses[i].title = '';
        this.apiService.updateStatus( status.title).subscribe(
            (role) => {
                this.statuses[i].title = title;
                this.statuses[i].edit = false;
            }
        );
    }
}
