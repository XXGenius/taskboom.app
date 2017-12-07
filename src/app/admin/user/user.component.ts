import { Component, OnInit, Input } from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {ApiService} from '../../services/api.service';
import {EmailValidator} from '@angular/forms';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    edit;
    users: any;
    private usersSubscription: ISubscription;
    constructor(private apiService: ApiService) {
        this.usersSubscription = this.apiService.getUsers().subscribe(
            (users) => {
                console.log(users);
                this.users = users;
            }
        );
    }

    ngOnInit() {
    }

    deleteUser(id: number) {
        this.apiService.deleteUser(id)
            .subscribe(
                (user) => {
                    console.log(user);
                }
            );
        this.users = this.users.filter( user => user.id !== id);
    }

    updateUser(id) {
    }

    createUser(username: string, email, password, role) {
        this.apiService.createUser(username, email, password, role).subscribe(
            (user) => {
                console.log(user);
                this.users.push({id: user['id'], username: user['username'],
                    email: user['email'], password: user['password'], role: user['role']});
            }
        );
    }


    // Save(title: string) {
    //     this.apiService.updateStatus(title).subscribe(
    //         (role) => {
    //             console.log(role);
    //             this.users.push({id: role.id, title: role.title});
    //         }
    //     );
    // }
}
