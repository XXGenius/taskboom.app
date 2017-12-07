import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ISubscription} from 'rxjs/Subscription';
import {AuthService} from '../../services/auth.service';
import {current} from 'codelyzer/util/syntaxKind';
import {NgForm} from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task;
  active: boolean;
  exp;
  currentUser;
  edit = false;
  show = false;
  categories: any;
  private checkSubscribe: ISubscription;
  private updateSubscribe: ISubscription;
  constructor(private apiService: ApiService, private ref: ChangeDetectorRef, private authService: AuthService,
              private spinnerService: Ng4LoadingSpinnerService) {
      this.apiService.getCategory().subscribe((category) => {
      this.categories = category;
      console.log(this.categories);
      });
  }

  ngOnInit() {
    this.active = this.task.checked;
  }

  onCheck() {
    this.checkSubscribe = this.apiService.checkTask(this.task.id, !this.active)
        .subscribe(
        (task) => {
          console.log(task);
          this.active = task['checked'];
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

  editMethod() {
      if (this.edit === false) {
          this.edit = true;
          this.show = false;
      }else {
          this.edit = false;
      }
  }

  updateTask(text, title, category, id) {
      this.spinnerService.show();
      console.log(category);
      this.apiService.updateTask(text, title, id).subscribe((task) => {
          this.task.title = task.title;
          this.task.text = text.text;
          this.edit = false;
          console.log(task);
          this.spinnerService.hide();
      });

  }

  showMethod () {
      if (this.show === false) {
          this.show = true;
          this.edit = false;
      }else {
          this.show = false;
      }
  }

    deleteTask(id) {
      this.spinnerService.show();
      this.apiService.deleteTask(id).subscribe((level) => {
                    console.log(level);
              this.spinnerService.hide();
                }
            );
    }




  getexp () {
      return this.exp;
  }
}
