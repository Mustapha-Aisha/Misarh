import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService } from '../api.service';
import { PageLoaderService } from '../../shared/page-loader/page-loader.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false,
    // imports: [NavbarComponent, FooterComponent]
})
export class HomeComponent {
  formData = {
    scentDescription: '',
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private pageLoaderService: PageLoaderService

  ) { }

  onSubmit() {
    console.log("submit clicked")
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
}
