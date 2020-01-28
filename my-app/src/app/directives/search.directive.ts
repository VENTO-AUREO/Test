import {
         Directive,
         Input,
         OnChanges,
         EventEmitter,
         Output,
         HostListener
       } from '@angular/core';

import { SearchPipe } from 'pipes';

import { EventParticipant } from '../event-participant';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective implements OnChanges {

  @Input() eventParticipant: EventParticipant[];
  @Output() filterEvent: EventEmitter<any> = new EventEmitter();

  @Input() searchTerm: string;

  @HostListener('keyup', ['$event.target.value']) onKeyUp(value) {
    this.searchTerm = value;
    this.applyFilter();
  }

  ngOnChanges() {
    this.applyFilter();
  }

  constructor(private searchEventParticipants: SearchPipe) { }

  applyFilter = () => {
    this.filterEvent.emit(new SearchPipe().transform(this.eventParticipant, this.searchTerm));
  }
}
