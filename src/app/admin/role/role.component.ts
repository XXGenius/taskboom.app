import { Component, OnInit, Input } from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {
    @Input() role;
    roles;
    private rolesSubscription: ISubscription;

    constructor(private apiService: ApiService) {
        this.rolesSubscription = this.apiService.getRoles().subscribe(
                (roles) => {
                    console.log(roles);
                    this.roles = roles;
                });
    }
        ngOnInit() {
        }

    deleteRole(id: number) {
        this.apiService.deleteRole(id).subscribe(
            (role) => {
                console.log(role);
            }
        );
    }

    updateRole(id: number) {
    }

    createRole(title: string) {
        this.apiService.createRole(title).subscribe(
            (role) => {
                console.log(role);
            }
        );
    }
}