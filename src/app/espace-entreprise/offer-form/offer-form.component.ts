import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})
export class OfferFormComponent {
  offerForm: FormGroup;
  sexe = ['Homme', 'Femme'];
  experiences = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  typeContrats =[ 'CDD','CDI','CIVP','KARAMA','STAGE'];
  region = ['Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba',
    'Kairouan', 'Kasserine', 'Kebili', 'Le Kef', 'Mahdia', 'La Manouba',
    'Médenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana',
    'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan' ];


  

  constructor(private fb: FormBuilder,private router: Router) {
    this.offerForm = this.fb.group({
      nomOffreEmploi: ['', Validators.required],
      nomEntreprise: ['', Validators.required],
       description:['', Validators.required],
       region:['', Validators.required],
       nbExperienceOffre:['', Validators.required],
       typeContrat: ['', Validators.required],
       sexe:['', Validators.required],
       datePublication: ['', Validators.required],
       dateExpiration: ['', Validators.required]
    });
  }

  ngonSubmit() {
    if (this.offerForm.valid) {
      // Envoyer les données au backend ou traiter localement
      const formData = this.offerForm.value;
      this.router.navigate(['/offer-card'], { state: { formData } });
     
    }
  }
}
