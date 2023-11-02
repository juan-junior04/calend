import { TestBed } from '@angular/core/testing';

import { ModalFechService } from './modal-fech.service';

describe('ModalFechService', () => {
  let service: ModalFechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalFechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
