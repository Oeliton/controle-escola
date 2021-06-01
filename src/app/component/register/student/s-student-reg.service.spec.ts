import { TestBed } from '@angular/core/testing';

import { SStudentRegService } from './s-student-reg.service';

describe('SStudentRegService', () => {
  let service: SStudentRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SStudentRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
