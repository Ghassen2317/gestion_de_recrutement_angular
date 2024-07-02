import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OfferListComponent {
  filteredOffers: any[] = []; // Adapter le type selon vos besoins

  filterByTypeContrat(selectedTypesContrats: string[]): void {
    // Implémentez la logique pour filtrer les offres par type de contrat sélectionné
    // Vous pouvez par exemple appeler un service qui retourne les offres filtrées
    console.log('Filtrer par type de contrat:', selectedTypesContrats);
    // Exemple de logique de filtrage:
    // this.filteredOffers = this.offers.filter(offer => selectedTypesContrats.includes(offer.typeContrat));
  }
}
