import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutMethodsComponent } from './out-methods.component';

describe('OutMethodsComponent', () => {
  let component: OutMethodsComponent;
  let fixture: ComponentFixture<OutMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
