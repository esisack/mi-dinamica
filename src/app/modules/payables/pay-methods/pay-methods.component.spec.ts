import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMethodsComponent } from './pay-methods.component';

describe('PayMethodsComponent', () => {
  let component: PayMethodsComponent;
  let fixture: ComponentFixture<PayMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
