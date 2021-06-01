import { TestBed } from '@angular/core/testing';

import { SHeaderRegService } from './s-header-reg.service';

describe('SHeaderRegService', () => {
  let service: SHeaderRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SHeaderRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
