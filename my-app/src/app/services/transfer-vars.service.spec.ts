import { TestBed } from '@angular/core/testing';

import { TransferVarsService } from './transfer-vars.service';

describe('TransferVarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferVarsService = TestBed.get(TransferVarsService);
    expect(service).toBeTruthy();
  });
});
