import { TestBed } from '@angular/core/testing';

import { CalculateFiscalCodeService } from './calculate-fiscal-code.service';

describe('CalculateFiscalCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateFiscalCodeService = TestBed.get(CalculateFiscalCodeService);
    expect(service).toBeTruthy();
  });
});
