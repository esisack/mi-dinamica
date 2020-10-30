import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InFlowComponent } from './in-flow.component';

describe('InFlowComponent', () => {
  let component: InFlowComponent;
  let fixture: ComponentFixture<InFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
