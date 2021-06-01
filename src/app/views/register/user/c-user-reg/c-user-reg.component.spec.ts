import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUserRegComponent } from './c-user-reg.component';

describe('CUserRegComponent', () => {
  let component: CUserRegComponent;
  let fixture: ComponentFixture<CUserRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUserRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUserRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
