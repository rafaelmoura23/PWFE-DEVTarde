import { TestBed } from '@angular/core/testing';

import { CurriculosService } from './curriculos.service';

describe('CurriculosService', () => {
  let service: CurriculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
