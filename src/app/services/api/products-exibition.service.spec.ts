import { TestBed } from '@angular/core/testing';

import { ProductsExibitionService } from './products-exibition.service';

describe('ProductsExibitionService', () => {
  let service: ProductsExibitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsExibitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
