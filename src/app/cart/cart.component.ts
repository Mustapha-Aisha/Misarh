import { Component, OnInit } from '@angular/core';
// import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { OrderConfirmationModalComponent } from './order-confirmation-modal/order-confirmation-modal.component';
import { ApiService } from '../api.service';
import { CartItem } from '../products/product.module';
import { io } from 'socket.io-client';
import { Router } from '@angular/router';


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    imports: [
        // OrderSummaryComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class CartComponent implements OnInit {
  isCartOpen = true; 
  customer : any = {};
  socket: any;
  shippingForm: FormGroup; 
  orderId: string = "  ";
  estimatedDelivery = "a month";
  showModal: boolean = false;
  cartItems: CartItem[] = [];
  shipping: number = 15; // Fixed shipping cost for now


  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
  this.shippingForm = this.fb.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', [Validators.required]], 
  });
  }

  ngOnInit(): void {
  this.loadCart();
  
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
   const subtotal = (this.cartItems.reduce((total, item) => total + Number(item.product.price) * item.quantity, 0)).toFixed(0);
   return subtotal.toString();
  }

  calculateTotal(): string{
    const total = (Number(this.calculateSubtotal()) + this.shipping ).toFixed(0);
    return total.toString();
  }

  // calculateTax(): number {
  //   const taxRate = 0; 
  //   return Number(this.calculateSubtotal()) * taxRate;
  // }

  calculateDiscountedPrice(price: string, discount?: string): number {
    const numericPrice = parseFloat(price); // Convert string to number
    const numericDiscount = discount ? parseFloat(discount) : 0;
  
    return numericPrice - (numericPrice * numericDiscount) / 100;
  }
  
  updateQuantity(id: string, event: Event): void {
    const target = event.target as HTMLInputElement; // Explicit cast
    const quantity = target?.value ? parseInt(target.value, 10) : 0; // Null-safe handling
    if (quantity < 1) {
      this.removeItem(id); // Remove item if quantity is less than 1
    } else {
      const item = this.cartItems.find(item => item.id === id); // Find item in cart
      if (item) {
        item.quantity = quantity; // Update quantity
      }
    }
  }
  removeItem(id: string): void {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== id);
    this.apiService.removeCartItem(id).subscribe({
      next: (response) => {
        console.log('Item deleted successfully:', response);
      },
      error: (error) => {
        console.error('Failed to delete item:', error);
        console.log(error)
        alert('Failed to delete the item. Please try again.');
      },
    });
  }
  
  loadCart(){
    this.apiService.getCart().subscribe({
     next: (res) => {
      console.log("CARTTTTTTTT",res)
      this.cartItems = res.items
     },error: (err) => {
      console.error('Error adding item to cart:', err);
    }
    })
  } 
  moveToCheckout(){
    this.router.navigate(['/checkout']);
  }
  

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }


  

  
}
