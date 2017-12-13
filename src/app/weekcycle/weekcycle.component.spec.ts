import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekcycleComponent } from './weekcycle.component';

describe('WeekcycleComponent', () => {
  let component: WeekcycleComponent;
  let fixture: ComponentFixture<WeekcycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekcycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
