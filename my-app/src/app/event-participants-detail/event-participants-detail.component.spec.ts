import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventParticipantsDetailComponent } from './event-participants-detail.component';

describe('EventParticipantsDetailComponent', () => {
  let component: EventParticipantsDetailComponent;
  let fixture: ComponentFixture<EventParticipantsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventParticipantsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventParticipantsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
