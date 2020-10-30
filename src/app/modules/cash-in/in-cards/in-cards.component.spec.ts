import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InCardsComponent } from './in-cards.component';

describe('InCardsComponent', () => {
  let component: InCardsComponent;
  let fixture: ComponentFixture<InCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
