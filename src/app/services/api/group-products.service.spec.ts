import { TestBed } from '@angular/core/testing';

import { GroupProductsService } from './group-products.service';

describe('GroupProductsService', () => {
  let service: GroupProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
