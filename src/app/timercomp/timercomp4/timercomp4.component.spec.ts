import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timercomp4Component } from './timercomp4.component';

describe('Timercomp4Component', () => {
  let component: Timercomp4Component;
  let fixture: ComponentFixture<Timercomp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Timercomp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Timercomp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
