import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAccessComponent } from './loan-access.component';

describe('LoanAccessComponent', () => {
  let component: LoanAccessComponent;
  let fixture: ComponentFixture<LoanAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
