import { TestBed } from '@angular/core/testing';

import { FitnessCoreService } from './fitness-core.service';

describe('FitnessCoreService', () => {
  let service: FitnessCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitnessCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
