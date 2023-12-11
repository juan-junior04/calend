import { TestBed } from '@angular/core/testing';

import { ImagenServicesService } from './imagen-services.service';

describe('ImagenServicesService', () => {
  let service: ImagenServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
