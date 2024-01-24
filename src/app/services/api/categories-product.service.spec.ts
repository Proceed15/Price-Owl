import { TestBed } from '@angular/core/testing';

import { CategoriesProductService } from './categories-product.service';

describe('CategoriesProductService', () => {
  let service: CategoriesProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
