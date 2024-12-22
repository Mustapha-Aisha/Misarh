import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
// import { PageLoaderService } from '../../../../../shared/components/page-loader/page-loader.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  formData = {
    scentDescription: '',
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    // private pageLoaderService: PageLoaderService

  ) { }

  // onSubmit() {
  //   this.pageLoaderService.show();
  //   this.apiService.createProduct(this.formData).subscribe({
  //     next: (response) => {
  //       this.pageLoaderService.hide();
  //       localStorage.setItem('generated-product', JSON.stringify(response.data));
  //       console.log(response)
  //       this.router.navigate(['/playground/misarh/product-details']);
  //     },
  //     error: (error) => {
  //       console.error('Error during signup:', error);
  //     }
  //   })
  }
// }
