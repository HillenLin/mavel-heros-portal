import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBoardBarComponent } from './leader-board-bar.component';

describe('LeaderBoardBarComponent', () => {
  let component: LeaderBoardBarComponent;
  let fixture: ComponentFixture<LeaderBoardBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderBoardBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderBoardBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
