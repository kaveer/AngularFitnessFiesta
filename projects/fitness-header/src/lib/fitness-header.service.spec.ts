import { TestBed } from '@angular/core/testing';

import { FitnessHeaderService } from './fitness-header.service';

describe('FitnessHeaderService', () => {
  let service: FitnessHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitnessHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
