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
export class ShippingFormComponent{
  
  constructor(private apiService: ApiService, private route: ActivatedRoute, private fb: FormBuilder) {
 
  }


}
