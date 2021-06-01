import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CStudentNewComponent } from './c-student-new.component';

describe('CStudentNewComponent', () => {
  let component: CStudentNewComponent;
  let fixture: ComponentFixture<CStudentNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CStudentNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CStudentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
