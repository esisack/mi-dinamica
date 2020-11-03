import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InLinkComponent } from './in-link.component';

describe('InLinkComponent', () => {
  let component: InLinkComponent;
  let fixture: ComponentFixture<InLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
