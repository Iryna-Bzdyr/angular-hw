import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessons17UsersComponent } from './lessons17-users.component';

describe('Lessons17UsersComponent', () => {
  let component: Lessons17UsersComponent;
  let fixture: ComponentFixture<Lessons17UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lessons17UsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lessons17UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
