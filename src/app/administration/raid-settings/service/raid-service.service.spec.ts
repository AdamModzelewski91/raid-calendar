import { TestBed } from '@angular/core/testing';

import { RaidServiceService } from './raid-service.service';

describe('RaidServiceService', () => {
  let service: RaidServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaidServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
