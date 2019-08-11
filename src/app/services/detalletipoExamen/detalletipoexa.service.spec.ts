import { TestBed } from '@angular/core/testing';

import { DetalletipoexaService } from './detalletipoexa.service';

describe('DetalletipoexaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalletipoexaService = TestBed.get(DetalletipoexaService);
    expect(service).toBeTruthy();
  });
});
