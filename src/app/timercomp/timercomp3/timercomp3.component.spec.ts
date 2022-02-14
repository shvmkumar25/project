import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timercomp3Component } from './timercomp3.component';

describe('Timercomp3Component', () => {
  let component: Timercomp3Component;
  let fixture: ComponentFixture<Timercomp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Timercomp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Timercomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
