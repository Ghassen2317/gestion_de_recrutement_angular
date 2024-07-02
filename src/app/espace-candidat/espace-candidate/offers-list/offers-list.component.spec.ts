import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferListComponent } from './offers-list.component';

describe('OffersListComponent', () => {
  let component: OfferListComponent;
  let fixture: ComponentFixture<OfferListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferListComponent]
    });
    fixture = TestBed.createComponent(OfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
