import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private signInService: SignInService, private router: Router) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  ngonSubmit(): void {
    if (this.signinForm.valid) {
      const credentials = {
        email: this.signinForm.get('email')!.value,
        password: this.signinForm.get('motDePasse')!.value
      };

      this.signInService.login(credentials).subscribe(
        () => {
          // Handle successful login
          console.log('Login successful');
          this.router.navigate(['/dashboard']);
        },
        error => {
          // Handle login error
          console.error('Login failed', error);
        }
      );
    }
  }
}
