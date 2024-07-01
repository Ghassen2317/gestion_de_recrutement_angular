import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRhComponent } from './add-rh.component';

describe('AddRhComponent', () => {
  let component: AddRhComponent;
  let fixture: ComponentFixture<AddRhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRhComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(AddRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all required fields are filled', () => {
    component.rhForm.controls['firstName'].setValue('John');
    component.rhForm.controls['lastName'].setValue('Doe');
    component.rhForm.controls['matricule'].setValue('123456');
    component.rhForm.controls['email'].setValue('john.doe@example.com');
    component.rhForm.controls['entrepriseId'].setValue('1');
    component.rhForm.controls['motDePasse'].setValue('password123');
    expect(component.rhForm.valid).toBeTrue();
  });

  it('should have an invalid form when required fields are empty', () => {
    component.rhForm.controls['firstName'].setValue('');
    component.rhForm.controls['lastName'].setValue('');
    component.rhForm.controls['matricule'].setValue('');
    component.rhForm.controls['email'].setValue('');
    component.rhForm.controls['entrepriseId'].setValue('');
    component.rhForm.controls['motDePasse'].setValue('');
    expect(component.rhForm.invalid).toBeTrue();
  });

  it('should have an invalid email when email format is incorrect', () => {
    component.rhForm.controls['email'].setValue('invalid-email');
    expect(component.rhForm.controls['email'].invalid).toBeTrue();
  });

  it('should have an invalid motDePasse when it is less than 6 characters', () => {
    component.rhForm.controls['motDePasse'].setValue('123');
    expect(component.rhForm.controls['motDePasse'].invalid).toBeTrue();
  });
});
