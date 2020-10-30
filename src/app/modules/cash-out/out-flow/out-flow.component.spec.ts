import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutFlowComponent } from './out-flow.component';

describe('OutFlowComponent', () => {
  let component: OutFlowComponent;
  let fixture: ComponentFixture<OutFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
