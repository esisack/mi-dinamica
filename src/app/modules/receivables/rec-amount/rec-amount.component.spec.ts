import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecAmountComponent } from './rec-amount.component';

describe('RecAmountComponent', () => {
  let component: RecAmountComponent;
  let fixture: ComponentFixture<RecAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
