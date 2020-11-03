import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanMaturityComponent } from './loan-maturity.component';

describe('LoanMaturityComponent', () => {
  let component: LoanMaturityComponent;
  let fixture: ComponentFixture<LoanMaturityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanMaturityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanMaturityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
