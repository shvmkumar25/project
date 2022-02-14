import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timercomp1Component } from './timercomp1.component';

describe('Timercomp1Component', () => {
  let component: Timercomp1Component;
  let fixture: ComponentFixture<Timercomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Timercomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Timercomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
