import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextdayComponent } from './nextday.component';

describe('NextdayComponent', () => {
  let component: NextdayComponent;
  let fixture: ComponentFixture<NextdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
