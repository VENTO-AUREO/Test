import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger,
         transition,
         query,
         style,
         stagger,
         animate } from '@angular/animations';
import { EventParticipant } from '../event-participant';
import { EventParticipantsService,
         TransferVarsService } from 'services';

@Component({
  selector: 'app-event-participants-list',
  templateUrl: './event-participants-list.component.html',
  styleUrls: ['./event-participants-list.component.css'],
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        query('div.card', [
          style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' }),
          stagger('100ms', [
            animate('300ms', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class EventParticipantsListComponent implements OnInit, OnDestroy {

  eventParticipants: EventParticipant[];
  subscription: Subscription;
  end = 6;

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
  @HostListener("window:scroll", [])
  onScroll() {
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let height = scrollHeight-clientHeight;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop||document.body.scrollTop
    if (scrollTop === height) {
      this.end += 6;
    }
  }

  ngOnInit() {
    this.getEventParticipants();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
