import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
  standalone: true
})
export class OrderSummaryComponent {
  @Input() subtotal: string = ''; // Subtotal from the cart component
  @Input() shipping: number = 0; // Shipping cost from the cart component
  @Input() tax: number = 0; // Tax calculated in the cart component
  @Input() total: string = '';
  // @Input() isShippingFormValid!: true;

  @Output() checkoutEvent = new EventEmitter<void>();


  // triggerCheckout() {
  //   if (this.isShippingFormValid) {
  //     this.checkoutEvent.emit();
  //   }
  // }

  triggerCheckout() {
    this.checkoutEvent.emit();
  }
}
