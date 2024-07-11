import { Component, Inject, OnInit } from '@angular/core';
import { OfferService, Offer } from 'src/app/services/offer.service';


@Component({
  selector: 'app-offer-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css'],
})
export class OfferListComponent implements OnInit {
  offers: Offer[] = [];
  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.loadOffers({});
  }

  loadOffers(filter: any) {
    this.offerService.getFilteredOffres(filter).subscribe({
      next: (data: Offer[]) => {
        console.log("offers fetched", data);
        
        this.offers = data;
      },
      error: (error) => {
        console.error('Error fetching offers', error);
      },
    });
  }

  onFilterChange(filter: any): void {
    console.log("filter received", filter);
    
    this.loadOffers(filter);
  }
}
