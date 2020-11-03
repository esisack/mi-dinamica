import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InShowComponent } from './in-show.component';

describe('InShowComponent', () => {
  let component: InShowComponent;
  let fixture: ComponentFixture<InShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
