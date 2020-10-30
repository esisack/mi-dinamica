import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutSendComponent } from './out-send.component';

describe('OutSendComponent', () => {
  let component: OutSendComponent;
  let fixture: ComponentFixture<OutSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
