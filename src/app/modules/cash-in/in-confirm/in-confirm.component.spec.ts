import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InConfirmComponent } from './in-confirm.component';

describe('InConfirmComponent', () => {
  let component: InConfirmComponent;
  let fixture: ComponentFixture<InConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
