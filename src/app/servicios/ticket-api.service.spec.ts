import { TestBed } from '@angular/core/testing';

import { TicketApiService } from './ticket-api.service';

describe('TicketApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketApiService = TestBed.get(TicketApiService);
    expect(service).toBeTruthy();
  });
});
