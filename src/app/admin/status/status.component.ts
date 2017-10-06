import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ISubscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {
    @Input() status;
    statuses;
    private statusesSubscription: ISubscription;
    constructor(private apiService: ApiService) {
        this.statusesSubscription = this.apiService.getStatuses().subscribe(
                (statuses) => {
                    console.log(statuses);
                    this.statuses = statuses;
                }
            );
    }

    ngOnInit() {
    }

    deleteStatus(id: number) {
        this.apiService.deleteStatus(id)
            .subscribe(
            (status) => {
                console.log(status);
            }
        );
        this.statuses = this.statuses.filter( status => status.id != id);
    }

    updateStatus(id: number) {
    }

    createStatus(title: string) {
        this.apiService.createStatus(title).subscribe(
            (role) => {
                console.log(role);
                this.statuses.push({id: role.id, title: role.title});
            }
        );
    }
}
