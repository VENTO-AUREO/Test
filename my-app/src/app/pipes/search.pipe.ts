import { Pipe, PipeTransform } from '@angular/core';
import { EventParticipant } from '../event-participant';

@Pipe({
  name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(eventParticipants: EventParticipant[], term: string): EventParticipant[] {
    if (!term || term === '') return [];
    return eventParticipants.filter(eventParticipant => {
      if (eventParticipant.name.toLowerCase().indexOf(term.toLowerCase()) > -1) {
        return eventParticipant;
      }
    });
  }

}
