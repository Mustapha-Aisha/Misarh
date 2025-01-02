import { Component, OnInit } from '@angular/core';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderConfirmationModalComponent } from './order-confirmation-modal/order-confirmation-modal.component';
import { ApiService } from '../api.service';
import { CartItem } from '../products/product.module';
import { io } from 'socket.io-client';


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    imports: [
        OrderSummaryComponent,
        OrderConfirmationModalComponent,

        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class CartComponent implements OnInit {
  customer : any = {};
  socket: any;
  shippingForm: FormGroup; 
  orderId: string = "  ";
  estimatedDelivery = "a month";
  showModal: boolean = false;
  cartItems: CartItem[] = [];
  shipping: number = 15; // Fixed shipping cost for now


constructor(private apiService: ApiService, private fb: FormBuilder) {
  this.shippingForm = this.fb.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', [Validators.required]], 
  });
}


ngOnInit(): void {
  this.getCart();

  // this.customer = JSON.parse(localStorage.getItem("customer") || '{}');
  // if (this.customer?.id) {
  //   this.socket = io('http://localhost:4500', {
  //     query: { userId: this.customer.id }
  //   });
  //   this.socket.on(`${this.customer.id}`, (data: any) => {
  //     console.log('Payment notification received:', data);
  //     // window.location.href = `/shipping-address?orderId=${data.orderId}`;
  //   });
  // } else {
  //   console.error("Customer ID not found in localStorage.");
  // }
}
  

  calculateSubtotal(): string {
   const subtotal = (this.cartItems.reduce((total, item) => total + Number(item.product.price) * item.quantity, 0)).toFixed(0);
   return subtotal.toString();
  }

  calculateTotal(): string{
    const total = (Number(this.calculateSubtotal()) + this.shipping + this.calculateTax()).toFixed(0);
    return total.toString();
  }

  calculateTax(): number {
    const taxRate = 0; 
    return Number(this.calculateSubtotal()) * taxRate;
  }

  calculateDiscountedPrice(price: string, discount?: string): number {
    const numericPrice = parseFloat(price); // Convert string to number
    const numericDiscount = discount ? parseFloat(discount) : 0;
  
    return numericPrice - (numericPrice * numericDiscount) / 100;
  }
  
  updateQuantity(id: string, quantity: number): void {
    if (quantity < 1) {
      this.removeItem(id); 
    } else {
      const item = this.cartItems.find(item => item.id === id); 
      if (item) {
        item.quantity = quantity;
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
  
  getCart(){
    this.apiService.getCart().subscribe({
     next: (res) => {
      console.log(res)
      this.cartItems = res.items
     },error: (err) => {
      console.error('Error adding item to cart:', err);
    }
    })
  }

  checkout(){
    const total = this.calculateTotal()

    this.apiService.checkoutCart(total).subscribe({
      next: (res) => {
        window.location.href = res.data.paymentUrl
        console.log("Checkout Successful")
      },
      error: (err) =>{
        console.error('Failed to initiate checkout:', err);
      }
    })

  }

  closeModal() {
    this.showModal = false;
  }

  // onSubmit(): void {  
  //   if (this.shippingForm.valid) {
  //     console.log(this.shippingForm.value)
  //     const { address, city, country } = this.shippingForm.value;
  //     const data = { contactAddress :`${address} ${ city}, ${country}`}
  //     this.apiService.updateCustomer(data).subscribe({
  //       next: (response) => {
  //         if(response.status)
  //           // isShippingFormValid
  //         console.log('Customer address updated successfully:', response);
  //       },
  //       error: (error) => {
  //         console.error('Failed to update customer address:', error);
  //       }
  //     });
  //   } else {
  //     console.error('Shipping form is invalid!');
  //   }
  // }
  

  
}
