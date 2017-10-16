import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ISubscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-user-group',
    templateUrl: './user-group.component.html'
})
export class UserGroupComponent implements OnInit {
    @Input() group;

    groups;
    private groupsSubscription: ISubscription;
    constructor(private apiService: ApiService) {
        this.groupsSubscription = this.apiService.getUserGroups().subscribe(
            (groups) => {
                console.log(groups);
                this.groups = groups;
            }
        );
    }

    ngOnInit() {
    }

    deleteUserGroup(id: number) {
        this.apiService.deleteUserGroup(id)
            .subscribe(
                (groups) => {
                    console.log(groups);
                }
            );
        this.groups = this.groups.filter( group => group.id !== id);
    }

    updateUserGroup(id) {
    }

    createUserGroup(title: string) {
        this.apiService.createUserGroup(title).subscribe(
            (group) => {
                console.log(group);
                this.groups.push({id: group.id, title: group.title});
            }
        );
    }


    // Save(title: string) {
    //     this.apiService.updateStatus(title).subscribe(
    //         (role) => {
    //             console.log(role);
    //             this.groups.push({id: role.id, title: role.title});
    //         }
    //     );
    // }
}
