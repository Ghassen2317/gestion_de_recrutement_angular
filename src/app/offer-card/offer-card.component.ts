
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-offer-card',
//   templateUrl: './offer-card.component.html',
//   styleUrls: ['./offer-card.component.css']
// })
// export class OfferCardComponent implements OnInit {
//   formData: any;

//   constructor(private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.formData = history.state.formData;
//   }
// }
// offer-card.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer, OfferService } from '../services/offer.service';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {
  offer: Offer | any;

  constructor(private route: ActivatedRoute, private offerService: OfferService, private router: Router) { }

  ngOnInit(): void {
    const offerId = this.route.snapshot.paramMap.get('id');
    if (offerId) {
      this.offerService.getOfferById(offerId).subscribe((data: Offer) => {
        this.offer = data;
      });
  }
}

redirectToForm(offerId: string): void {
  this.router.navigate(['/form'], { queryParams: { offerId: offerId } });
}

}