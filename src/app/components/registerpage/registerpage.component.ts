// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // ReactiveFormsModule doit être importé
// import { Router } from '@angular/router';
// import { UserService } from '../../services/user.service'; // Import UserService

// import { RouterModule } from '@angular/router'; // Import RouterModule
// import { CommonModule } from '@angular/common'; 
// @Component({
//   selector: 'app-registerpage',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule, RouterModule], // Assurez-vous que ReactiveFormsModule est ici
//   templateUrl: './registerpage.component.html',
//   styleUrls: ['./registerpage.component.css'],
// })
// export class RegisterpageComponent {
//   registerForm: FormGroup;
//   errorMessage: string | null = null;

//   constructor(
//     private fb: FormBuilder,
//     private userService: UserService, // Inject UserService
//     private router: Router
//   ) {
//     this.registerForm = this.fb.group({
//       username: ['', [Validators.required]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }
//   onSubmit() {
//     if (this.registerForm.valid) {
//       const user = {
//         nom: this.registerForm.value.username,
//         email: this.registerForm.value.email,
//         password: this.registerForm.value.password,
//       };
  
//       this.userService.registerUser(user).subscribe(
//         (response: string) => {
//           console.log('User registered successfully:', response);
//           this.router.navigate(['/login']); // Redirect to login page
//         },
//         (error) => {
//           console.error('Error during registration:', error);
//           console.error('Error details:', error.error); // Log the entire error object to see what's being returned
//           this.errorMessage = error.error || 'An error occurred during registration.';
//         }
//       );
//     } else {
//       this.errorMessage = 'Please fill out the form correctly.';
//     }
//   }
  
  
  
  
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'; 

import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-registerpage',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css'],
})
export class RegisterpageComponent {
  registerForm: FormGroup;
  errorMessage: string | null = null; // Initially null, no error on load

  constructor(
    private fb: FormBuilder,
    private userService: UserService, 
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user = {
        nom: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };

      this.userService.registerUser(user).subscribe(
        (response: string) => {
          console.log('User registered successfully:', response);
          this.router.navigate(['/login']); // Redirect to login page on success
        },
        (error) => {
        this.router.navigate(['/login']);
        }
      );
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
}
