import { TestBed } from '@angular/core/testing';

import { ServicearticulosService } from './servicearticulos.service';

describe('ServicearticulosService', () => {
  let service: ServicearticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicearticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
