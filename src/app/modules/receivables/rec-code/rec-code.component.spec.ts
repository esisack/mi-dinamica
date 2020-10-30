import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecCodeComponent } from './rec-code.component';

describe('RecCodeComponent', () => {
  let component: RecCodeComponent;
  let fixture: ComponentFixture<RecCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
