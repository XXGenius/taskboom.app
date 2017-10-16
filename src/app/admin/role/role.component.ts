import {Component, OnInit, Input, Inject, ViewChild} from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {ApiService} from '../../services/api.service';
import {DOCUMENT} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html',
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
export class RoleComponent implements OnInit {
    @ViewChild('inputCreate') inputCreate;
    roles = [];
    edit;
    private rolesSubscription: ISubscription;

    constructor(private apiService: ApiService,
                @Inject(DOCUMENT) private doc: Document, ) {
        this.rolesSubscription = this.apiService.getRoles().subscribe(
            (roles) => {
                console.log(roles);
                this.roles = roles;
            }
        );
    }
        ngOnInit() {
        }

    remove(i: number) {
        const id = this.roles[i].id;
        if (confirm('Are you sure to delete: ' + this.roles[i].title)) {
            this.apiService.deleteRole(id)
                .subscribe(
                    (role) => {
                        console.log(role);
                    }
                );
            this.roles = this.roles.filter( role => role.id !== id);
        }
    }

    showUpdate(i) {
        this.roles[i].edit = true;
    }

    create(form: NgForm) {
        this.inputCreate = '';
        this.apiService.createRole(form.value.title).subscribe(
            (role) => {
                console.log(role);

                this.roles.push({id: role.id, title: role.title});
            }
        );
    }

    cancel(i: number) {
        const id = this.roles[i].id;
        (<HTMLInputElement>this.doc.getElementById('input-title-' + id)).value = this.roles[i].title;
        this.roles[i].edit = false;
    }

    update(form: NgForm, i: number) {
        const id = this.roles[i].id;
        this.apiService.updateRole(id, form.value.title).subscribe(
            (role) => {
                this.roles[i].title = role.title;
                this.roles[i].edit = false;
            }
        );
    }
}