import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecQrComponent } from './rec-qr.component';

describe('RecQrComponent', () => {
  let component: RecQrComponent;
  let fixture: ComponentFixture<RecQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
