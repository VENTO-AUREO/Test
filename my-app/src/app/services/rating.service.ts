import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { EventParticipantsService } from './event-participants.service';
import { EventParticipantRating } from '../event-participants-rating';
import { EventParticipant } from '../event-participant';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private eventParticipants: EventParticipant[];
  private rating: Array <EventParticipantRating> =[];

  constructor(
    private eventParticipantsService: EventParticipantsService,
    private localStorageService: LocalStorageService,
  ) {
    this.eventParticipantsService.getEventParticipants().subscribe(result => {
        this.eventParticipants = result;
        this.eventParticipants.forEach((item) => {
          this.rating.push({
            id: item._id,
            rating: this.checkRatingInStorage(item._id)
          });
        });
      });
  }

  checkRatingInStorage(id: string): number {
    let rating = 0;
    const obj = this.localStorageService.getValue(id);
    if (obj === undefined) { return 0; }
    rating = (obj.rating !== undefined) ? parseInt(obj.rating, 10) : 0;
    return ((rating < 6) && (rating >= 0)) ? rating : 0;
  }

  getRating(id: string): number {
    let eventParticipantRating = this.rating.find(eventParticipant => eventParticipant.id === id).rating;
    eventParticipantRating = this.checkRatingInStorage(id);
    return eventParticipantRating;
  }

}
