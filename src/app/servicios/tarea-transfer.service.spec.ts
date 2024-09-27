import { TestBed } from '@angular/core/testing';

import { TareaTransferService } from './tarea-transfer.service';

describe('TareaTransferService', () => {
  let service: TareaTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
