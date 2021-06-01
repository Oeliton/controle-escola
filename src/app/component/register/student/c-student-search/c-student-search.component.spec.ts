import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CStudentSearchComponent } from './c-student-search.component';

describe('CStudentSearchComponent', () => {
  let component: CStudentSearchComponent;
  let fixture: ComponentFixture<CStudentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CStudentSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CStudentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
