import { Component, OnInit, Input } from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
    @Input() project;
    projects;
    private projectsSubscription: ISubscription;
    constructor(private apiService: ApiService) {
        this.projectsSubscription = this.apiService.getProjects().subscribe(
                (projects) => {
                    console.log(projects);
                    this.projects = projects;
                }
            );
    }
    ngOnInit() {
    }

    deleteProject(id: number) {
        this.apiService.deleteProject(id)
            .subscribe(
                (project) => {
                    console.log(project);
                }
            );
        this.projects = this.projects.filter( project => project.id !== id);
    }

    updateProject(id: number) {
    }

    createProject(title: string) {
        this.apiService.createProject(title).subscribe(
            (project) => {
                console.log(project);
                this.projects.push({id: project.id, title: project.title});
            }
        );
    }

}
