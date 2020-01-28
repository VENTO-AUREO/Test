import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { EventParticipant } from '../event-participant';
import { TransferVarsService } from 'services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() eventParticipants: EventParticipant[] =[];
  @ViewChild('searchField', {static: true}) searchField: ElementRef;

  filteredEventParticipants: EventParticipant[] = this.eventParticipants;

  filterEventParticipants = (eventParticipants) => {
    this.filteredEventParticipants = eventParticipants;
  }

  constructor(
    public transferVarsService: TransferVarsService
  ) { }

  ngOnInit() {
  }

}
