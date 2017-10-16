import {Component, OnInit, Input, Inject, ViewChild} from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {ApiService} from '../../services/api.service';
import {DOCUMENT} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
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
export class ProjectComponent implements OnInit {
    @ViewChild('inputCreate') inputCreate;
    projects = [];
    edit;
    private projectsSubscription: ISubscription;

    constructor(private apiService: ApiService,
                @Inject(DOCUMENT) private doc: Document, ) {
        this.projectsSubscription = this.apiService.getProjects().subscribe(
            (projects) => {
                console.log(projects);
                this.projects = projects;
            }
        );
    }
    ngOnInit() {
    }

    remove(i: number) {
        const id = this.projects[i].id;
        if (confirm('Are you sure to delete: ' + this.projects[i].title)) {
            this.apiService.deleteProject(id)
                .subscribe(
                    (project) => {
                        console.log(project);
                    }
                );
            this.projects = this.projects.filter( project => project.id !== id);
        }
    }

    showUpdate(i) {
        this.projects[i].edit = true;
    }

    create(title: string) {
        this.inputCreate = '';
        this.apiService.createProject(title).subscribe(
            (role) => {
                console.log(role);

                this.projects.push({id: role.id, title: role.title});
            }
        );
    }

    cancel(i: number) {
        const id = this.projects[i].id;
        (<HTMLInputElement>this.doc.getElementById('input-title-' + id)).value = this.projects[i].title;
        this.projects[i].edit = false;
    }

    update(i: number) {
        const id = this.projects[i].id;
        const title = (<HTMLInputElement>this.doc.getElementById('input-title-' + id)).value;

        this.projects[i].title = '';
        this.apiService.updateProject(id, title).subscribe(
            (role) => {
                this.projects[i].title = title;
                this.projects[i].edit = false;
            }
        );
    }

}
