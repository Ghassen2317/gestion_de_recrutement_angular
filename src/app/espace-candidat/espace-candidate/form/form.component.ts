import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  applicationForm: FormGroup;
  ages = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  sexes = ['Male', 'Female'];
  nbExperience = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  diplomas = [    'Certificat', 'Diplôme d\'Études Secondaires', 
    'Diplôme d\'Études Professionnelles', 'Baccalaureat','Licence', 'Maîtrise','Master', 'Doctorat', 
'Autre'];
  curriculumVitae: File | null = null;
  lettreMotivation: File | null = null;

  constructor(private fb: FormBuilder) {
    this.applicationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sexe: ['', Validators.required],
      nbExperience: ['', Validators.required],
      diplome: ['', Validators.required],
      curriculumVitae: ['', Validators.required],
      lettreMotivation: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any, fileType: string): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (fileType === ' curriculumVitae') {
        this. curriculumVitae = file;
      } else if (fileType === 'lettreMotivation') {
        this.lettreMotivation = file;
      }
      this.applicationForm.patchValue({ [fileType]: file });
    }
  }

  onSubmit(): void {
    if (this.applicationForm.valid) {
      console.log(this.applicationForm.value);
      // Add logic to handle form submission including file uploads
    }
  }
}
