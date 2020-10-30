import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InAmountComponent } from './in-amount.component';

describe('InAmountComponent', () => {
  let component: InAmountComponent;
  let fixture: ComponentFixture<InAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
