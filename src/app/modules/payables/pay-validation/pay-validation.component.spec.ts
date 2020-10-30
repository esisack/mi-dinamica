import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayValidationComponent } from './pay-validation.component';

describe('PayValidationComponent', () => {
  let component: PayValidationComponent;
  let fixture: ComponentFixture<PayValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
