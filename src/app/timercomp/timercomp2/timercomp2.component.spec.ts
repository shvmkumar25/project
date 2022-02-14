import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timercomp2Component } from './timercomp2.component';

describe('Timercomp2Component', () => {
  let component: Timercomp2Component;
  let fixture: ComponentFixture<Timercomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Timercomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Timercomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
