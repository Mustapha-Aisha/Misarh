import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AboutUsComponent } from '../about_us/about-us.component';
import { AuthComponent } from '../auth/auth.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule, // Adds basic Angular features like *ngFor, *ngIf
    RouterModule, // Enables [routerLink] and <router-outlet>
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Misarh';
}
