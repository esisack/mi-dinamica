import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecLinkComponent } from './rec-link.component';

describe('RecLinkComponent', () => {
  let component: RecLinkComponent;
  let fixture: ComponentFixture<RecLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
