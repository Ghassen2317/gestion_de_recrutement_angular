
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { OfferFormComponent } from './offer-form.component';

describe('OfferFormComponent', () => {
  let component: OfferFormComponent;
  let fixture: ComponentFixture<OfferFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferFormComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(OfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all required fields are filled', () => {
    component.offerForm.controls['nomOffreEmploi'].setValue('Développeur Angular');
    component.offerForm.controls['nomEntreprise'].setValue('Entreprise Test');
    component.offerForm.controls['description'].setValue('Description de l\'offre');
    component.offerForm.controls['region'].setValue('Tunis');
    component.offerForm.controls['nbExperienceOffre'].setValue(3);
    component.offerForm.controls['typeContrat'].setValue('CDI');
    component.offerForm.controls['sexe'].setValue('Homme');
    component.offerForm.controls['datePublication'].setValue('2024-06-28');
    component.offerForm.controls['dateExpiration'].setValue('2024-07-28');
    expect(component.offerForm.valid).toBeTrue();
  });

  it('should have an invalid form when required fields are empty', () => {
    component.offerForm.controls['nomOffreEmploi'].setValue('');
    component.offerForm.controls['nomEntreprise'].setValue('');
    component.offerForm.controls['description'].setValue('');
    component.offerForm.controls['region'].setValue('');
    component.offerForm.controls['nbExperienceOffre'].setValue('');
    component.offerForm.controls['typeContrat'].setValue('');
    component.offerForm.controls['sexe'].setValue('');
    component.offerForm.controls['datePublication'].setValue('');
    component.offerForm.controls['dateExpiration'].setValue('');
    expect(component.offerForm.invalid).toBeTrue();
  });
});
