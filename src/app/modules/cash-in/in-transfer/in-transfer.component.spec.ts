import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InTransferComponent } from './in-transfer.component';

describe('InTransferComponent', () => {
  let component: InTransferComponent;
  let fixture: ComponentFixture<InTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
