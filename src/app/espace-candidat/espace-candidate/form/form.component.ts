import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  Candidature,
  CandidatureService,
} from 'src/app/services/candidature.service';
import { Offer, OfferService } from 'src/app/services/offer.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  applicationForm: FormGroup;
  ages = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  sexes = ['HOMME', 'FEMME'];
  nbExperience = [0, 1, 2, 3, 4, 5];
  diplomas = [
    'CERTIFICAT_DE_FORMATION',
    'DIPLOME_DETUDE_SECONDAIRE',
    'DIPLOME_DETUDE_PROFESSIONNEL',
    'BACCALAUREAT',
    'LICENCE',
    'MASTER',
    'DOCTORAT',
  ];
  curriculumVitae: File | null = null;
  lettreMotivation: File | null = null;
  nomOffreEmploi: string | null = null;
  offreId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private candidatureService: CandidatureService,
    private route: ActivatedRoute,
    private offerService: OfferService,
    private router: Router
  ) {
    this.applicationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sexe: ['', Validators.required],
      nbExperience: ['', Validators.required],
      diplome: ['', Validators.required],
      curriculumVitae: ['', Validators.required],
      lettreMotivation: ['', Validators.required],
    });
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe((params) => {
        this.offreId = params['offerId'] || null;
        if(this.offreId) {
          this.offerService.getOfferById(this.offreId).subscribe((offer:Offer) => {
            this.nomOffreEmploi = offer.nomOffreEmploi
          },
        (error) => {
          console.error('Error fetching offer', error);
          
        })
        }
        });
      }

  onFileChange(event: any, fileType: string): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (fileType === 'curriculumVitae') {
        this.curriculumVitae = file;
      } else if (fileType === 'lettreMotivation') {
        this.lettreMotivation = file;
      }
      this.applicationForm.patchValue({ [fileType]: file });
    }
  }

  onSubmit(): void {
    if (
      this.applicationForm.valid &&
      this.curriculumVitae &&
      this.lettreMotivation &&
      this.offreId &&
      this.nomOffreEmploi
    ) {
      const candidatureData: Candidature = {
        firstName: this.applicationForm.get('firstName')!.value,
        lastName: this.applicationForm.get('lastName')!.value,
        age: this.applicationForm.get('age')!.value,
        email: this.applicationForm.get('email')!.value,
        sexe: this.applicationForm.get('sexe')!.value,
        nbExperience: this.applicationForm.get('nbExperience')!.value,
        diplome: this.applicationForm.get('diplome')!.value,
        nomOffreEmploi: this.nomOffreEmploi,
        // Don't include curriculumVitae and lettreMotivation here, as they are files
      };

      // Send candidatureData to your backend API
      this.candidatureService
        .createCandidature(candidatureData, this.offreId)
        .subscribe(
          (response) => {
            console.log('Candidature created successfully', response);

            // Upload the CV
            if (this.curriculumVitae) {
              this.candidatureService
                .uploadCurriculumVitae(response.id!, this.curriculumVitae)
                .subscribe(
                  () => {
                    console.log('Curriculum Vitae uploaded successfully');
                  },
                  (error) => {
                    console.error('Error uploading Curriculum Vitae', error);
                  }
                );
            }

            // Upload the lettreMotivation
            if (this.lettreMotivation) {
              this.candidatureService
                .uploadLettreMotivation(response.id!, this.lettreMotivation)
                .subscribe(
                  () => {
                    console.log('Lettre de Motivation uploaded successfully');
                  },
                  (error) => {
                    console.error(
                      'Error uploading Lettre de Motivation',
                      error
                    );
                  }
                );
            }
            this.router.navigate(['/espaceCandidat']);
          },
          (error) => {
            console.error('Error creating candidature', error);
          }
        );
    }
  }
}
