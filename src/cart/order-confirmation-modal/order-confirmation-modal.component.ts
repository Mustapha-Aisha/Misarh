import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-confirmation-modal',
  standalone: true,
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

  close() {
    this.closeModal.emit();
  }
}
