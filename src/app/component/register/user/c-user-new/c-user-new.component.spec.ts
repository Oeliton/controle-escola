import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUserNewComponent } from './c-user-new.component';

describe('CUserNewComponent', () => {
  let component: CUserNewComponent;
  let fixture: ComponentFixture<CUserNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUserNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUserNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
