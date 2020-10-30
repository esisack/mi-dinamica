import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayApprovedComponent } from './pay-approved.component';

describe('PayApprovedComponent', () => {
  let component: PayApprovedComponent;
  let fixture: ComponentFixture<PayApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
