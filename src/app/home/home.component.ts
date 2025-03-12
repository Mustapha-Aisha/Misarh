import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PageLoaderService } from '../../shared/page-loader/page-loader.service';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
  // imports: [NavbarComponent, FooterComponent]
})
export class HomeComponent {
  formData = {
    message: '',
  };

  prompts: string[] = [
    'What Excites you?',
    'What tastes do you have',
    'What smells can you Imagine',
  ];

  categories = [
    {
      title: 'BEST SELLERS',
      image: '/assets/images/best-seller.png'
    },
    {
      title: 'CURATED FRAGRANCES',
      image: '/assets/images/curated.png'
    },
    {
      title: 'NEW FRAGRANCES',
      image: '/assets/images/fragrance.png'
    }
  ];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private pageLoaderService: PageLoaderService

  ) { }

  onSubmit() {
    console.log("submit clicked", this.formData)
    this.pageLoaderService.show();
    this.apiService.createProduct(this.formData).subscribe({
      next: (response) => {
        this.pageLoaderService.hide();
        localStorage.setItem('generated-product', JSON.stringify(response.data));
        console.log(response)
        this.router.navigate(['/product-details']);
      },
      error: (error) => {
        console.error('Error during signup:', error);
      }
    })
  }
  
  scrollToAI(){
    const element = document.getElementById('ai-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
