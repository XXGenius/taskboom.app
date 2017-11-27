import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ISubscription} from 'rxjs/Subscription';
import {AuthService} from '../../services/auth.service';
import {current} from 'codelyzer/util/syntaxKind';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task;
  active = false;
  exp;
  currentUser;
  private checkSubscribe: ISubscription;

  constructor(private apiService: ApiService, private ref: ChangeDetectorRef, private authService: AuthService) { }

  ngOnInit() {
    this.active = this.task.checked;
  }

  onCheck() {
    this.checkSubscribe = this.apiService.checkTask(this.task.id, !this.active)
        .subscribe(
        (task) => {
          console.log(task);
          this.active = task.checked;
          if (this.active === true) {
              this.currentUser = this.authService.currentUser;
              this.apiService.updateExp(16, this.currentUser.id).subscribe((user) => {
                  this.exp = user.exp;
                  console.log(this.exp);
              });
          } else if (this.active === false) {
              this.currentUser = this.authService.currentUser;
              this.apiService.updateExp(-16, this.currentUser.id).subscribe((user) =>
                  console.log(user));
          }
          this.checkSubscribe.unsubscribe();
          this.ref.detectChanges();
        }
    );
  }






  getexp () {
      return this.exp;
  }
}
