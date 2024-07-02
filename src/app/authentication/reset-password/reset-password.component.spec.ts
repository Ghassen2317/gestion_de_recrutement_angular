import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password.component';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all required fields are filled', () => {
    component.resetPasswordForm.controls['email'].setValue('testuser@example.com');
    component.resetPasswordForm.controls['newPassword'].setValue('newpassword123');
    component.resetPasswordForm.controls['confirmPassword'].setValue('newpassword123');
    expect(component.resetPasswordForm.valid).toBeTrue();
  });

  it('should have an invalid form when required fields are empty', () => {
    component.resetPasswordForm.controls['email'].setValue('');
    component.resetPasswordForm.controls['newPassword'].setValue('');
    component.resetPasswordForm.controls['confirmPassword'].setValue('');
    expect(component.resetPasswordForm.invalid).toBeTrue();
  });

  it('should have an invalid email when email format is incorrect', () => {
    component.resetPasswordForm.controls['email'].setValue('invalid-email');
    expect(component.resetPasswordForm.controls['email'].invalid).toBeTrue();
  });

  it('should have an invalid newPassword when it is less than 6 characters', () => {
    component.resetPasswordForm.controls['newPassword'].setValue('123');
    expect(component.resetPasswordForm.controls['newPassword'].invalid).toBeTrue();
  });

  it('should have an invalid confirmPassword when it is less than 6 characters', () => {
    component.resetPasswordForm.controls['confirmPassword'].setValue('123');
    expect(component.resetPasswordForm.controls['confirmPassword'].invalid).toBeTrue();
  });
});
