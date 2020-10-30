import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutApprovedComponent } from './out-approved.component';

describe('OutApprovedComponent', () => {
  let component: OutApprovedComponent;
  let fixture: ComponentFixture<OutApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
