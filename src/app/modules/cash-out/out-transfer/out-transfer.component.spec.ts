import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutTransferComponent } from './out-transfer.component';

describe('OutTransferComponent', () => {
  let component: OutTransferComponent;
  let fixture: ComponentFixture<OutTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
