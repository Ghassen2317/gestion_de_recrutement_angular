import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OfferService, Offer } from 'src/app/services/offer.service';


@Component({
  selector: 'app-offer-filter',
  templateUrl: './offer-filter.component.html',
  styleUrls: ['./offer-filter.component.css']
})
export class OfferFilterComponent implements OnInit{
  @Output() filterChange = new EventEmitter<any>();

  typeContrats = ['CDD', 'CDI', 'CIVP', 'KARAMA', 'STAGE'];
  regions = [
    'Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba',
    'Kairouan', 'Kasserine', 'Kebili', 'Le Kef', 'Mahdia', 'La Manouba',
    'Médenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana',
    'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'
  ];

  constructor() { }
  ngOnInit(): void {
  }

  // onTypeContratChange(event: any) {
  //   const selectedTypeContrat = event.target.value;
  //   this.filterChange.emit({ typeContrat: selectedTypeContrat });
  // }

  // onRegionChange(event: any) {
  //   const selectedRegion = event.target.value;
  //   this.filterChange.emit({ region: selectedRegion });
  // }

  // onNbExperienceChange(event: any) {
  //   const selectedNbExperience = event.target.value;
  //   this.filterChange.emit({ nbExperience: selectedNbExperience });
  // }

  // onDiplomeChange(event: any) {
  //   const selectedDiplome = event.target.value;
  //   this.filterChange.emit({ diplome: selectedDiplome });
  // }

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
