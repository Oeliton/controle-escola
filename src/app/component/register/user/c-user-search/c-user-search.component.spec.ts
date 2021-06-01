import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUserSearchComponent } from './c-user-search.component';

describe('CUserSearchComponent', () => {
  let component: CUserSearchComponent;
  let fixture: ComponentFixture<CUserSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUserSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
