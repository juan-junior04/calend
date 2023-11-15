import { TestBed } from '@angular/core/testing';

import { InformeApiService } from './informe-api.service';

describe('InformeApiService', () => {
  let service: InformeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
