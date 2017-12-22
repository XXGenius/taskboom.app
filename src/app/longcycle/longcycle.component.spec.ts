import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongcycleComponent } from './longcycle.component';

describe('LongcycleComponent', () => {
  let component: LongcycleComponent;
  let fixture: ComponentFixture<LongcycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongcycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
