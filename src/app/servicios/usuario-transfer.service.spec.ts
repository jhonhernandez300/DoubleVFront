import { TestBed } from '@angular/core/testing';

import { UsuarioTransferService } from './usuario-transfer.service';

describe('UsuarioTransferService', () => {
  let service: UsuarioTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
