import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ISubscription} from 'rxjs/Subscription';
import {AuthService} from '../../services/auth.service';
import {current} from 'codelyzer/util/syntaxKind';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input() task;
  active: boolean = false;

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
          this.currentUser = this.authService.currentUser;
          const test = this.apiService.updateExp(15, this.currentUser.id);
          console.log(test);
          this.checkSubscribe.unsubscribe();
          this.ref.detectChanges();
        }
    );
  }
}
