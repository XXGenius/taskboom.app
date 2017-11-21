import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ISubscription} from 'rxjs/Subscription';
import {AuthService} from '../../services/auth.service';
import {current} from 'codelyzer/util/syntaxKind';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input() task;
  active = false;
  exp;
  currentUser;
  add = false;
  child = false;
  childTasks = [];
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

  metodadd () {
      if (this.add === false) {
          this.add = true;
          this.child = false;
      } else  {
          this.add = false;
      }
  }

  showChildTasks (parent_id) {
      if (this.child === false) {
          this.apiService.getChildTasks(parent_id)
              .subscribe((task) => {
              console.log(task);
              this.child = true;
              this.add = false;
          });
      } else  {
          this.child = false;
      }
  }

  createChildTask (form: NgForm, id) {
      const project = 8;
      const parent_id = id;
      const user_id = localStorage.getItem('id');
      const text = form.value.text;
      this.apiService.createChildTask(text, project, parent_id, user_id).subscribe(
          (task) => {
              console.log(task);
              this.childTasks.push({id: task.id, text: task.text, date: task.date});
              this.ref.detectChanges();
          });
  }

  getexp () {
      return this.exp;
  }
}
