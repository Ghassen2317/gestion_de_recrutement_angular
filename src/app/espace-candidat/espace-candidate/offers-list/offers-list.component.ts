import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OfferListComponent {
  offers = [
    { id: 1, title: 'Offre 1', description: 'Description de l\'offre 1' },
    { id: 2, title: 'Offre 2', description: 'Description de l\'offre 2' },
    { id: 3, title: 'Offre 3', description: 'Description de l\'offre 3' },
    // Ajoutez autant d'offres que nécessaire
  ];

  constructor() { }

  ngOnInit(): void {
    // Vous pouvez laisser cette méthode vide pour une liste statique
  }
}
