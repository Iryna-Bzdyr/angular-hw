import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons16Component } from './lessons16.component';

describe('Lessons16Component', () => {
  let component: Lessons16Component;
  let fixture: ComponentFixture<Lessons16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lessons16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lessons16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
