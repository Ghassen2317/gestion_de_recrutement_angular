// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { SigninComponent } from './sign-in.component';

// describe('SigninComponent', () => {
//   let component: SigninComponent;
//   let fixture: ComponentFixture<SigninComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [SigninComponent],
//       imports: [ReactiveFormsModule]
//     });
//     fixture = TestBed.createComponent(SigninComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have a valid form when all required fields are filled', () => {
//     component.signinForm.controls['email'].setValue('testuser@example.com');
//     component.signinForm.controls['password'].setValue('password123');
//     expect(component.signinForm.valid).toBeTrue();
//   });

//   it('should have an invalid form when required fields are empty', () => {
//     component.signinForm.controls['email'].setValue('');
//     component.signinForm.controls['password'].setValue('');
//     expect(component.signinForm.invalid).toBeTrue();
//   });

//   it('should have an invalid email when email format is incorrect', () => {
//     component.signinForm.controls['email'].setValue('invalid-email');
//     expect(component.signinForm.controls['email'].invalid).toBeTrue();
//   });

//   it('should have an invalid password when it is less than 6 characters', () => {
//     component.signinForm.controls['password'].setValue('123');
//     expect(component.signinForm.controls['password'].invalid).toBeTrue();
//   });
// });
