import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceApprovedComponent } from './advance-approved.component';

describe('AdvanceApprovedComponent', () => {
  let component: AdvanceApprovedComponent;
  let fixture: ComponentFixture<AdvanceApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
