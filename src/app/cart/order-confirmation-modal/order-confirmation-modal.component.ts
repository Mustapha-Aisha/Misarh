import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-order-confirmation-modal',
    imports: [
        CommonModule,
        FormsModule,
    ],
    templateUrl: './order-confirmation-modal.component.html',
    styleUrl: './order-confirmation-modal.component.scss'
})
export class OrderConfirmationModalComponent {
  @Input() orderId: string = '';
  @Input() estimatedDelivery: string = '';
  @Output() closeModal = new EventEmitter<void>();

  statuses = ['Order Placed', 'Order Processed', 'Shipped', 'Delivered'];
  currentStatus = 0;

  ngOnInit() {
    // Update status every 3 seconds for demonstration (can be tied to real API response)
    setInterval(() => {
      if (this.currentStatus < this.statuses.length - 1) {
        this.currentStatus++;
      }
    }, 3000); // Update every 3 seconds
  }

  close() {
    this.closeModal.emit();
  }



  
   
  
}
