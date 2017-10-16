import {Component, OnInit, Input, Inject} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ISubscription} from 'rxjs/Subscription';
import {NgForm} from '@angular/forms';
import {DOCUMENT} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-user-group',
    templateUrl: './user-group.component.html',
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
export class UserGroupComponent implements OnInit {
    edit;
    groups;
    private groupsSubscription: ISubscription;
    constructor(private apiService: ApiService, @Inject(DOCUMENT) private doc: Document) {
        this.groupsSubscription = this.apiService.getUserGroups().subscribe(
            (groups) => {
                console.log(groups);
                this.groups = groups;
            }
        );
    }

    ngOnInit() {
    }
    remove(i: number) {
        const id = this.groups[i].id;
        if(confirm('Are you sure to delete: ' + this.groups[i].title)) {
            this.apiService.deleteUserGroup(id)
                .subscribe(
                    (group) => {
                        console.log(group);
                    }
                );
            this.groups = this.groups.filter( status => status.id !== id);
        }
    }

    showUpdate(i) {
        this.groups[i].edit = true;
    }

    create(form: NgForm) {
        this.apiService.createUserGroup(form.value.title).subscribe(
            (group) => {
                console.log(group);
                this.groups.push({id: group.id, title: group.title});
            }
        );
    }

    cancel(i: number) {
        const id = this.groups[i].id;
        (<HTMLInputElement>this.doc.getElementById('input-title-' + id)).value = this.groups[i].title;
        this.groups[i].edit = false;
    }

    update(form: NgForm, i: number) {
        const id = this.groups[i].id;
        this.apiService.updateUserGroup(id, form.value.title).subscribe(
            (group) => {
                this.groups[i].title = group.title;
                this.groups[i].edit = false;
            }
        );
    }
}
