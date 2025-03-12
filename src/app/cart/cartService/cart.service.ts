import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { CartItem } from '../../products/product.module';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {
    private isCartOpen$ = new BehaviorSubject<boolean>(false); // Observable to track cart state

    cartItems: CartItem[] = [];
    shipping = 0; // Fixed shipping cost for now
    constructor(private apiService: ApiService) { }

    toggleCart() {
        this.isCartOpen$.next(!this.isCartOpen$.value);
    }

    getCartStatus() {
        return this.isCartOpen$.asObservable();
      }

    calculateSubtotal(): string {
        const subtotal = (this.cartItems.reduce((total, item) => total + Number(item.product.price) * item.quantity, 0)).toFixed(0);
        return subtotal.toString();
    }

    calculateTotal(): string {
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
    addToCart(payload: any): void {
            this.apiService.addToCart(payload).subscribe({
              next: (cartRes: { status_code: number; message: any; }) => {
                if (cartRes.status_code === 200) {
                  console.log('Item added to cart successfully:', cartRes);
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

    loadCart() {
        this.apiService.getCart().subscribe({
            next: (res) => {
                console.log("CARTTTTTTTT", res)
                this.cartItems = res.items
            }, error: (err) => {
                console.error('Error adding item to cart:', err);
            }
        })
    }

    checkout() {
        const total = this.calculateTotal()

        this.apiService.checkoutCart(total).subscribe({
            next: (res) => {
                const paymentUrl = res.data.paymentUrl;
                window.open(paymentUrl, '_blank');
                console.log("Checkout Successful")
            },
            error: (err) => {
                console.error('Failed to initiate checkout:', err);
            }
        })

    }
}
