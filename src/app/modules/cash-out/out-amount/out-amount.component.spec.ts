import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutAmountComponent } from './out-amount.component';

describe('OutAmountComponent', () => {
  let component: OutAmountComponent;
  let fixture: ComponentFixture<OutAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
