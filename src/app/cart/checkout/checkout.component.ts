import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarComponent } from "../../home/navbar/navbar.component";
import { FooterComponent } from "../../home/footer/footer.component";
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-summary',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  standalone: true,
  imports: [NavbarComponent, FooterComponent]
})
export class OrderSummaryComponent {
  shippingForm: any;
   constructor(private apiService: ApiService, private route: ActivatedRoute, private fb: FormBuilder) {
     this.shippingForm 
   }
  onSubmit(): void {  
    if (this.shippingForm.valid) {
      console.log(this.shippingForm.value);
      const { address, city, country } = this.shippingForm.value;
      const data = { contactAddress :`${address} ${ city}, ${country}`};
      
      this.apiService.updateCustomer(data).subscribe({
        next: (response) => {
          if (response.status) {
        
          }
          console.log('Customer address updated successfully:', response);
        },
        error: (error) => {
          console.error('Failed to update customer address:', error);
        }
      });
    } else {
      console.error('Shipping form is invalid!');
    }
  }
}
