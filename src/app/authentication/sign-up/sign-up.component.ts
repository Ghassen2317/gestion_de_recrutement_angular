import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  entList: any[] = [];

  constructor(private fb: FormBuilder,private signUpService: SignUpService, private router: Router) {
    this.signupForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        matriculeFiscale: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        siteWeb: ['', Validators.required],
        nomEntreprise: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {}

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('motDePasse')?.value;
    const confirmPassword = form.get('confirmMotDePasse')?.value;

    if (password !== confirmPassword) {
      form.get('confirmMotDePasse')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmMotDePasse')?.setErrors(null);
    }
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;

      this.signUpService.registerEntreprise(formData).subscribe(
        (response) => {
          console.log('Entreprise registered successfully:', response);
          // Optionally, you can redirect to a success page or do other actions
          this.router.navigate(['/sign-in']); // Example of redirecting to a success page
        },
        (error) => {
          console.error('Error registering entreprise:', error);
          // Handle error appropriately, e.g., show error message to user
        }
      );
    } else {
      console.log('Form is invalid');
      // Optionally, show validation errors to the user
    }
  }
}
