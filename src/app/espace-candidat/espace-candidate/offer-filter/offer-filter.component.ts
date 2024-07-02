// // import { Component, EventEmitter, Output } from '@angular/core';

// // @Component({
// //   selector: 'app-offer-filter',
// //   templateUrl: './offer-filter.component.html',
// //   styleUrls: ['./offer-filter.component.css']
// // })
// // export class OfferFilterComponent {
// //   @Output() typeContratSelected = new EventEmitter<string>();
// //   @Output() regionSelected = new EventEmitter<string>();

// //   typeContrats = ['CDD', 'CDI', 'CIVP', 'KARAMA', 'STAGE'];
// //   regions = ['Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Nabeul', 'Bizerte', 'Beja', 'Jendouba', 'Zaghouan', 'Siliana', 'Le Kef', 'Sousse', 'Monastir', 'Mahdia', 'Sfax', 'Kairouan', 'Kasserine', 'Sidi Bouzid', 'Gabes', 'Mednine', 'Tataouine', 'Gafsa', 'Tozeur', 'Kebili'];

// //   onTypeContratChange(event: any) {
// //     this.typeContratSelected.emit(event.target.value);
// //   }

// //   onRegionChange(event: any) {
// //     this.regionSelected.emit(event.target.value);
// //   }
// // }

// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-offer-filter',
//   templateUrl: './offer-filter.component.html',
//   styleUrls: ['./offer-filter.component.css']
// })
// export class OfferFilterComponent {
//   @Output() filterChange = new EventEmitter<any>();
//   typeContrats = ['CDD', 'CDI', 'CIVP', 'KARAMA', 'STAGE'];
//   regions = ['Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kebili', 'Le Kef', 'Mahdia', 'La Manouba', 'Médenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'];

//   onTypeContratChange(event: any) {
//     const selectedTypeContrat = event.target.value;
//     this.filterChange.emit({ typeContrat: selectedTypeContrat });
//   }

//   onRegionChange(event: any) {
//     const selectedRegion = event.target.value;
//     this.filterChange.emit({ region: selectedRegion });
//   }
// }
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-offer-filter',
  templateUrl: './offer-filter.component.html',
  styleUrls: ['./offer-filter.component.css']
})
export class OfferFilterComponent {
  @Output() filterChange = new EventEmitter<any>();

  typeContrats = ['CDD', 'CDI', 'CIVP', 'KARAMA', 'STAGE'];
  regions = [
    'Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba',
    'Kairouan', 'Kasserine', 'Kebili', 'Le Kef', 'Mahdia', 'La Manouba',
    'Médenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana',
    'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'
  ];

  constructor() { }

  onTypeContratChange(event: any) {
    const selectedTypeContrat = event.target.value;
    this.filterChange.emit({ typeContrat: selectedTypeContrat });
  }

  onRegionChange(event: any) {
    const selectedRegion = event.target.value;
    this.filterChange.emit({ region: selectedRegion });
  }

  onNbExperienceChange(event: any) {
    const selectedNbExperience = event.target.value;
    this.filterChange.emit({ nbExperience: selectedNbExperience });
  }

  onDiplomeChange(event: any) {
    const selectedDiplome = event.target.value;
    this.filterChange.emit({ diplome: selectedDiplome });
  }
}
