import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecQrApprovedComponent } from './rec-qr-approved.component';

describe('RecQrApprovedComponent', () => {
  let component: RecQrApprovedComponent;
  let fixture: ComponentFixture<RecQrApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecQrApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecQrApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
