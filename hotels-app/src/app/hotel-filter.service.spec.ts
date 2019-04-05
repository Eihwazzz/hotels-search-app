import { TestBed } from '@angular/core/testing';

import { HotelFilterService } from './hotel-filter.service';

describe('HotelFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelFilterService = TestBed.get(HotelFilterService);
    expect(service).toBeTruthy();
  });
});
