import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansMethodsComponent } from './loans-methods.component';

describe('LoansMethodsComponent', () => {
  let component: LoansMethodsComponent;
  let fixture: ComponentFixture<LoansMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
