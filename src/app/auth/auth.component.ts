import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ApiService } from '../api.service';


@Component({
    selector: 'app-auth',
    standalone: false,
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
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
    this.apiService.login(this.loginData).subscribe({
      next: (response: any) => { 
        localStorage.setItem('customer', response.data.access_token);  
        localStorage.setItem('customer-info', JSON.stringify(response.data.customer));  
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

