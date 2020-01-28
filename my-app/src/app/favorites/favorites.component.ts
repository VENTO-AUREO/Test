import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { EventParticipant } from '../event-participant';
import { EventParticipantsService,
         LocalStorageService,
         TransferVarsService} from 'services';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnDestroy {

  eventParticipants: EventParticipant[] = [];
  favoriteEventParticipants: EventParticipant[] = [];
  subscription: Subscription;
  checkFavorite: boolean;

  constructor(
              private eventParticipantsService: EventParticipantsService,
              private localStorageService: LocalStorageService,
              private transferVarsService: TransferVarsService,) { }

  getEventParticipants(): void {
    this.subscription = this.eventParticipantsService.getEventParticipants()
      .subscribe(result => {
        this.eventParticipants = result;
        this.fillFavoriteEventParticipants();
         this.transferVarsService.setEventParticipants(this.favoriteEventParticipants);
      });
  }

  fillFavoriteEventParticipants(): void {
    if (this.eventParticipants.length <= 0) { return; }
    this.eventParticipants.forEach((item, i, arr) => {
      if (this.localStorageService.getValue(item._id) === undefined) { return; }
      if (this.localStorageService.getValue(item._id).favorite) {
        this.favoriteEventParticipants.push(item);
      }
    });
  }

  checkFavoriteEventParticipants(){
    if (this.favoriteEventParticipants.length <= 0) {
      return this.checkFavorite = true;
    } else {
      return this.checkFavorite = false;
    }
  }

  ngOnInit() {
    this.getEventParticipants();
    this.checkFavoriteEventParticipants();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
