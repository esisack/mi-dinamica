import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecApprovedComponent } from './rec-approved.component';

describe('RecApprovedComponent', () => {
  let component: RecApprovedComponent;
  let fixture: ComponentFixture<RecApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
