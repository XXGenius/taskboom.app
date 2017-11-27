import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTapeComponent } from './task-tape.component';

describe('TaskTapeComponent', () => {
  let component: TaskTapeComponent;
  let fixture: ComponentFixture<TaskTapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
