import { TestBed } from '@angular/core/testing';

import { TarifaApiService } from './tarifa-api.service';

describe('TarifaApiService', () => {
  let service: TarifaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarifaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
