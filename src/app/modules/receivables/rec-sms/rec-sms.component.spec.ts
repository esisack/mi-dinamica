import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecSmsComponent } from './rec-sms.component';

describe('RecSmsComponent', () => {
  let component: RecSmsComponent;
  let fixture: ComponentFixture<RecSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
