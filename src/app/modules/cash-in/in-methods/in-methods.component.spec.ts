import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InMethodsComponent } from './in-methods.component';

describe('InMethodsComponent', () => {
  let component: InMethodsComponent;
  let fixture: ComponentFixture<InMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
