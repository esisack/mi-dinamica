import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecValidationComponent } from './rec-validation.component';

describe('RecValidationComponent', () => {
  let component: RecValidationComponent;
  let fixture: ComponentFixture<RecValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
