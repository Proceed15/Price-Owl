import { TestBed } from '@angular/core/testing';

import { ApiMercadoLivreService } from './api-mercado-livre.service';

describe('ApiMercadoLivreService', () => {
  let service: ApiMercadoLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMercadoLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
