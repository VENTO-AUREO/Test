import { TestBed } from '@angular/core/testing';

import { EventParticipantsService } from './event-participants.service';

describe('EventParticipantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventParticipantsService = TestBed.get(EventParticipantsService);
    expect(service).toBeTruthy();
  });
});
