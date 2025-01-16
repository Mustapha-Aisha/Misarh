import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { OrderConfirmationModalComponent } from '../cart/order-confirmation-modal/order-confirmation-modal.component';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from "../home/footer/footer.component";
import { NavbarComponent } from "../home/navbar/navbar.component";

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderConfirmationModalComponent,
    FooterComponent,
    NavbarComponent
]
})
export class ShippingFormComponent implements OnInit {
  shippingForm: FormGroup;
  showModal: boolean = false;
  orderId: string | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.shippingForm = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.orderId = params['orderId'];
      console.log('Order ID:', this.orderId);
    });
  }

  onSubmit(): void {  
    if (this.shippingForm.valid) {
      console.log(this.shippingForm.value);
      const { address, city, country } = this.shippingForm.value;
      const data = { contactAddress :`${address} ${ city}, ${country}`};
      
      this.apiService.updateCustomer(data).subscribe({
        next: (response) => {
          if (response.status) {
            this.showModal = true;
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

  closeModal() {
    this.showModal = false;
  }
}
