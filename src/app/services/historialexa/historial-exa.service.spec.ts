import { TestBed } from '@angular/core/testing';

import { HistorialExaService } from './historial-exa.service';

describe('HistorialExaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorialExaService = TestBed.get(HistorialExaService);
    expect(service).toBeTruthy();
  });
});
