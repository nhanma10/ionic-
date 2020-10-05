import { TestBed } from '@angular/core/testing';

import { DiachatService } from './diachat.service';

describe('DiachatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiachatService = TestBed.get(DiachatService);
    expect(service).toBeTruthy();
  });
});
