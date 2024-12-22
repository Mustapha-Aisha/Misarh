import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [FormsModule, CommonModule],
  providers: [ApiService]
})
export class AuthComponent {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }
  isLogin = true; // Tracks whether the user is on the login or signup form
  loginData = {
    email: '',
    password: '',
  };

  signupData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  toggleForm(isLoginForm: boolean): void {
    this.isLogin = isLoginForm;
  }

  onLogin(): void {
    console.log('Login data submitted:', this.loginData);
    this.apiService.login(this.loginData).subscribe({
      next: (response: any) => { 
        localStorage.setItem('customer', response.data.access_token);  
        this.router.navigate(['/playground/misarh/home']); 
      },
      error: (err) => {
        console.error('Login failed', err);
       
      }
    });
  }

  onSignup(): void {
    if (this.signupData.password !== this.signupData.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    this.apiService.register(this.signupData).subscribe({
      next: (response) => {
        console.log('Signup successful:', response);
        this.router.navigate(['/playground/misarh/home']); 
      },
      error: (error) => {
        console.error('Error during signup:', error);
      }
    }
  )}
}

