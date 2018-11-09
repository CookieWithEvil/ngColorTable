import { TestBed } from '@angular/core/testing';

import { COLORSService } from './colors.service';

describe('COLORSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: COLORSService = TestBed.get(COLORSService);
    expect(service).toBeTruthy();
  });
});
