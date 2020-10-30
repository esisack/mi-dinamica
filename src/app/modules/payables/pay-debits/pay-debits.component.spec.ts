import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDebitsComponent } from './pay-debits.component';

describe('PayDebitsComponent', () => {
  let component: PayDebitsComponent;
  let fixture: ComponentFixture<PayDebitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayDebitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayDebitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
