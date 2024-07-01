import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-rh',
  templateUrl: './add-rh.component.html',
  styleUrls: ['./add-rh.component.css']
})
export class AddRhComponent implements OnInit {
  rhForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rhForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      matricule: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      entrepriseId:['', Validators.required],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.rhForm.valid) {
      console.log(this.rhForm.value);
      // Ici, vous pouvez ajouter la logique pour soumettre les données à votre backend
      // Par exemple, en utilisant un service Angular pour appeler une API
    }
  }
}
