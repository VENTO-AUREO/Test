import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { EventParticipant } from '../event-participant';
import { EventParticipantsService,
         TransferVarsService } from 'services';

@Component({
  selector: 'app-event-participants-list',
  templateUrl: './event-participants-list.component.html',
  styleUrls: ['./event-participants-list.component.css']
})
export class EventParticipantsListComponent implements OnInit, OnDestroy {

  eventParticipants: EventParticipant[];
  subscription: Subscription;

  constructor (
    private eventParticipantsService: EventParticipantsService,
    private transferVarsService: TransferVarsService) {  }

  getEventParticipants(): void {
    this.subscription = this.eventParticipantsService.getEventParticipants()
      .subscribe(result => {
        this.eventParticipants = result;
        this.transferVarsService.setEventParticipants(result);
      });
  }

  ngOnInit() {
    this.getEventParticipants();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
