import { TestBed } from '@angular/core/testing';

import { EditsService } from './edits.service';

describe('EditsService', () => {
  let service: EditsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
