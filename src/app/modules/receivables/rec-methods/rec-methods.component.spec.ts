import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecMethodsComponent } from './rec-methods.component';

describe('RecMethodsComponent', () => {
  let component: RecMethodsComponent;
  let fixture: ComponentFixture<RecMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
