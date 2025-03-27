import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { CartItem } from '../../products/product.module';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems$ = new BehaviorSubject<CartItem[]>([]); 
  cartItems = this.cartItems$.asObservable();
  private isCartOpen$ = new BehaviorSubject<boolean>(false); 
  shipping = 0; 

  constructor(private apiService: ApiService) {
    this.loadCart(); 
  }

  toggleCart() {
    this.isCartOpen$.next(!this.isCartOpen$.value);
  }

  getCartStatus() {
    return this.isCartOpen$.asObservable();
  }

  calculateSubtotal(): string {
    const subtotal = this.cartItems$.getValue().reduce((total, item) => total + Number(item.product.price) * item.quantity, 0);
    return subtotal.toFixed(0);
  }

  calculateTotal(): string {
    return (Number(this.calculateSubtotal()) + this.shipping + this.calculateTax()).toFixed(0);
  }

  calculateTax(): number {
    const taxRate = 0;
    return Number(this.calculateSubtotal()) * taxRate;
  }

  updateQuantity(id: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    const quantity = target?.value ? parseInt(target.value, 10) : 0;
    const cart = this.cartItems$.getValue();

    if (quantity < 1) {
      this.removeItem(id);
    } else {
      const item = cart.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        this.cartItems$.next([...cart]); 
      }
    }
  }

  addToCartWithUpdate(product: any): void {
    const payload = {
      productId: product.id,
      quantity: 1,
    };
  
    console.log("Updating product before adding to cart:", product);
  
    this.apiService.updateProduct(product.id, product).subscribe({
      next: (updateRes: any) => {
        if (updateRes.status_code !== 200) {
          return console.error('Failed to update product:', updateRes.message);
        }
        
        console.log("Product updated successfully. Now adding to cart:", payload);
        this.addToCart(payload);
      },
      error: (updateErr: any) => {
        console.log("Error updating product:", updateErr);
      }
    });
  }

  

  addToCart(payload: any): void {
    this.apiService.addToCart(payload).subscribe({
      next: (cartRes: { status_code: number; message: any }) => {
        if (cartRes.status_code === 200) {
          console.log('Item added to cart successfully:', cartRes);
          this.loadCart(); 
        } else {
          console.error('Failed to add item to cart:', cartRes.message);
        }
      },
      error: (cartErr: any) => {
        console.error('Error adding item to cart:', cartErr);
      },
    });
  }

  removeItem(id: string): void {
    this.apiService.removeCartItem(id).subscribe({
      next: (response) => {
        console.log('Item deleted successfully:', response);
        const updatedCart = this.cartItems$.getValue().filter((cartItem) => cartItem.id !== id);
        this.cartItems$.next(updatedCart); 
      },
      error: (error) => {
        console.error('Failed to delete item:', error);
        alert('Failed to delete the item. Please try again.');
      },
    });
  }

  calculateDiscountedPrice(price: string, discount?: string): number {
    const numericPrice = parseFloat(price); 
    const numericDiscount = discount ? parseFloat(discount) : 0;

    return numericPrice - (numericPrice * numericDiscount) / 100;
}

  loadCart(): void {
    this.apiService.getCart().subscribe({
      next: (res) => {
        this.cartItems$.next(res.items); 
      },
      error: (err) => {
        console.error('Error loading cart:', err);
      }
    });
  }

  checkout() {
    const total = this.calculateTotal();
    this.apiService.checkoutCart(total).subscribe({
      next: (res) => {
        const paymentUrl = res.data.paymentUrl;
        window.open(paymentUrl, '_blank');
        console.log('Checkout Successful');
      },
      error: (err) => {
        console.error('Failed to initiate checkout:', err);
      }
    });
  }
}
