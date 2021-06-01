import { TestBed } from '@angular/core/testing';

import { SUserRegService } from './s-user-reg.service';

describe('SUserRegService', () => {
  let service: SUserRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SUserRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
