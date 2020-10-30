import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutConfirmComponent } from './out-confirm.component';

describe('OutConfirmComponent', () => {
  let component: OutConfirmComponent;
  let fixture: ComponentFixture<OutConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
