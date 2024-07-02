
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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {
  formData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formData = history.state.formData;
  }
}

