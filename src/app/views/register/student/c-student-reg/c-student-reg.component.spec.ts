import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CStudentRegComponent } from './c-student-reg.component';

describe('CStudentRegComponent', () => {
  let component: CStudentRegComponent;
  let fixture: ComponentFixture<CStudentRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CStudentRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CStudentRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
