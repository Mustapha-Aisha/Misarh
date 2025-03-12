import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { CartItem } from '../products/product.module';
import { io } from 'socket.io-client';
import { Router } from '@angular/router';
import { CartService } from './cartService/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CartComponent implements OnInit {
  isCartOpen: any;
  customer: any = {};
  socket: any;
  shippingForm: FormGroup;
  orderId: string = "  ";
  estimatedDelivery = "a month";
  showModal: boolean = false;
  cartItems: CartItem[] = [];
  shipping: number = 15;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router, private cartService: CartService) {
    this.shippingForm = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

    this.cartService.getCartStatus().subscribe(status => {
      this.isCartOpen = status;
    });

    this.cartService.loadCart();

    this.customer = JSON.parse(localStorage.getItem('customer-info') || '{}');
    if (this.customer?.id) {
      this.socket = io('ws://localhost:3001/', {
        query: { userId: this.customer.id }
      });

      // Listen for successful connection
      this.socket.on('connect', () => {
      });
      this.socket.on('paymentNotification', (data: any) => {
        window.location.href = `http://localhost:4200/shipping-form?orderId=${data.orderId}`;
      });
      this.socket.on('disconnect', () => {
      });
    } else {
      console.error('Customer ID not found in localStorage.');
    }
  }

  calculateSubtotal(): string {
    return this.cartService.calculateSubtotal();
  }

  calculateTotal(): string {
    return this.cartService.calculateTotal();
  }

  // calculateTax(): number {
  //   const taxRate = 0; 
  //   return Number(this.calculateSubtotal()) * taxRate;
  // }

  calculateDiscountedPrice(price: string, discount?: string): number {
    return this.cartService.calculateDiscountedPrice(price, discount);
  }

  updateQuantity(id: string, event: Event): void {
    this.cartService.updateQuantity(id, event);
  }
  removeItem(id: string): void {
    this.cartService.removeItem(id);
  }

  moveToCheckout() {
    this.router.navigate(['/checkout']);
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

}
