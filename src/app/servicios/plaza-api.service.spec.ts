import { TestBed } from '@angular/core/testing';

import { PlazaApiService } from './plaza-api.service';

describe('PlazaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlazaApiService = TestBed.get(PlazaApiService);
    expect(service).toBeTruthy();
  });
});
