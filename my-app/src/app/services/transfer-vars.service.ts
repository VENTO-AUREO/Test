import { Injectable } from '@angular/core';
import { EventParticipant } from '../event-participant';

@Injectable({
  providedIn: 'root'
})
export class TransferVarsService {

  private eventParticipants: EventParticipant[] = [];

  public setEventParticipants(eventParticipants: EventParticipant[]): void {
    this.eventParticipants = eventParticipants;
  }

  public getEventParticipants(): EventParticipant[] {
    return this.eventParticipants;
  }

  constructor() { }
}
