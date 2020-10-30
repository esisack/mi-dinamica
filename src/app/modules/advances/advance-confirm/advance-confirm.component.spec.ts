import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceConfirmComponent } from './advance-confirm.component';

describe('AdvanceConfirmComponent', () => {
  let component: AdvanceConfirmComponent;
  let fixture: ComponentFixture<AdvanceConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
