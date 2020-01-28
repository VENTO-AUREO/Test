import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventParticipant } from '../event-participant';

@Injectable({
  providedIn: 'root'
})
export class EventParticipantsService {

  public DATA = './assets/generated.json';
  private eventParticipants: EventParticipant[];
  private observableEventParticipants: Observable<EventParticipant[]>;

  constructor(private http: HttpClient) {
    this.observableEventParticipants = this.http.get(this.DATA)
      .pipe(map((eventParticipants: EventParticipant[]) => this.eventParticipants = eventParticipants));
  }

  getEventParticipants(): Observable<EventParticipant[]> {
    if (this.eventParticipants) {
      return of(this.eventParticipants);
    } else {
      return this.observableEventParticipants;
    }
  }

}
