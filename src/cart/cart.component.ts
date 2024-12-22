import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartItem } from '../product.module';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderConfirmationModalComponent } from './order-confirmation-modal/order-confirmation-modal.component';


@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports:[
    OrderSummaryComponent,
    CartitemsComponent,
    OrderConfirmationModalComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CartComponent implements OnInit {
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
    zip: ['', [Validators.required]], // Example: US ZIP code
  });
}

  ngOnInit(): void {
   this.getCart()
  }

  calculateSubtotal(): string {
   const subtotal = (this.cartItems.reduce((total, item) => total + Number(item.product.price) * item.quantity, 0)).toFixed(0);
   return subtotal.toString();
  }

  calculateTotal(): string{
    const total = (Number(this.calculateSubtotal()) + this.shipping + this.calculateTax()).toFixed(0);

    console.log(total)
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

  onSubmit(): void {
    // if (this.shippingForm.valid) {
    //   const { address, city, zip } = this.shippingForm.value;
    //   const fullAddress = `${address}, ${city}, ${zip}`;
    //   console.log('Updating customer address:', fullAddress);

    //   // Update customer address field (use your API/service)
    //   this.apiService.updateCustomerAddress(fullAddress).subscribe({
    //     next: (response) => {
    //       console.log('Customer address updated successfully:', response);
    //     },
    //     error: (error) => {
    //       console.error('Failed to update customer address:', error);
    //     }
    //   });
    // } else {
    //   console.error('Shipping form is invalid!');
    // }
  }

  
}
