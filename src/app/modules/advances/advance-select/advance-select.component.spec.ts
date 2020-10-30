import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceSelectComponent } from './advance-select.component';

describe('AdvanceSelectComponent', () => {
  let component: AdvanceSelectComponent;
  let fixture: ComponentFixture<AdvanceSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
