import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rh',
  templateUrl: './add-rh.component.html',
  styleUrls: ['./add-rh.component.css'],
})
export class AddRhComponent {
  rhForm: FormGroup;
  rhList: any[] = []; // Liste locale pour stocker les RH

  constructor(private fb: FormBuilder, private router: Router) {
    this.rhForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],
      entrepriseId: ['', Validators.required],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // ngOnInit(): void {}

  ngonSubmit(): void {
    if (this.rhForm.value) {
      // Envoyer les données au backend ou traiter localement
      console.log(this.rhForm.valid);
      const formData = this.rhForm.value;
      this.router.navigate(['/rh-list'], { state: { formData } });
    }
  }
}
