import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecConfirmComponent } from './rec-confirm.component';

describe('RecConfirmComponent', () => {
  let component: RecConfirmComponent;
  let fixture: ComponentFixture<RecConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
