import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all required fields are filled', () => {
    component.signupForm.controls['username'].setValue('testuser');
    component.signupForm.controls['email'].setValue('testuser@example.com');
    component.signupForm.controls['password'].setValue('password123');
    expect(component.signupForm.valid).toBeTrue();
  });

  it('should have an invalid form when required fields are empty', () => {
    component.signupForm.controls['username'].setValue('');
    component.signupForm.controls['email'].setValue('');
    component.signupForm.controls['password'].setValue('');
    expect(component.signupForm.invalid).toBeTrue();
  });

  it('should have an invalid email when email format is incorrect', () => {
    component.signupForm.controls['email'].setValue('invalid-email');
    expect(component.signupForm.controls['email'].invalid).toBeTrue();
  });

  it('should have an invalid password when it is less than 6 characters', () => {
    component.signupForm.controls['password'].setValue('123');
    expect(component.signupForm.controls['password'].invalid).toBeTrue();
  });
});

