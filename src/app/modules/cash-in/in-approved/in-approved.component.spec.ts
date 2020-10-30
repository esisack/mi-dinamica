import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InApprovedComponent } from './in-approved.component';

describe('InApprovedComponent', () => {
  let component: InApprovedComponent;
  let fixture: ComponentFixture<InApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
