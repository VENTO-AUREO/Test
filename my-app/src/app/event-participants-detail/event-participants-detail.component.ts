import { Component, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { EventParticipant } from '../event-participant';
import { EventParticipantsService,
         LocalStorageService,
         TransferVarsService
 } from 'services';


@Component({
  selector: 'app-event-participants-detail',
  templateUrl: './event-participants-detail.component.html',
  styleUrls: ['./event-participants-detail.component.css']
})
export class EventParticipantsDetailComponent implements OnInit, OnDestroy {

  id: string;
  _isFavorite = false;
  set isFavorite(val: boolean) {
    if (this.id !== undefined) {
      this.pushToStorage(this.id, {favorite: val});
    }
    this._isFavorite = val;
  }
  get isFavorite(): boolean {
    return this._isFavorite;
  }
  eventParticipants: EventParticipant[];
  eventParticipant: EventParticipant;
  subscription: Subscription;
  favoriteOnList: string;


  constructor(
    private route: ActivatedRoute,
    private eventParticipantsService: EventParticipantsService,
    private localStorageService: LocalStorageService,
    private transferVarsService: TransferVarsService) {  }

  getEventParticipants(): void {
    this.subscription = this.eventParticipantsService.getEventParticipants()
      .subscribe(result => {
        this.eventParticipants = result;
        this.transferVarsService.setEventParticipants(result);
        this.id = this.route.snapshot.paramMap.get('id');
        this.selecteventParticipant(this.id);
        const eventParticipantData = this.readFromStorage(this.id);
        this.isFavorite = eventParticipantData.favorite !== undefined ? eventParticipantData.favorite : false;
      });
  }

  selecteventParticipant(id: string): void {
    this.eventParticipant = this.eventParticipants.find(eventParticipant => eventParticipant._id === id);
  }

  readFromStorage(id: string): any{
    const eventParticipant = this.localStorageService.getValue(id);
    if (eventParticipant === undefined) {
      return {};
    }
    if (eventParticipant.favorite === undefined) {
      return {};
    }
    return (eventParticipant);
  }

  pushToStorage(id: string, value: any): void {
    this.localStorageService.setValue(id, value);
  }

  changeFavorite(): string {
    if(this._isFavorite === false){
      return this.favoriteOnList = "Добавить в избранное";
    } else {
      return this.favoriteOnList = "В избранном";
    };
  }

  ngOnInit() {
    this.getEventParticipants();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
