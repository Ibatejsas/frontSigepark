import { Ticket } from './../modelo/ticket';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'ticketfilter',
  pure: false
})

export class TicketFilterService implements PipeTransform {
  transform(items: Ticket[], filter: Ticket): Ticket[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Ticket) => this.applyFilter(item, filter));
  }
  
  
  applyFilter(book: Ticket, filter: Ticket): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (book[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }


}
