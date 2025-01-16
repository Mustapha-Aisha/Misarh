import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

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

  ngOnInit() {}
  constructor(private router: Router){}

  close() {
    this.closeModal.emit();
    this.router.navigate(['/home'])
  }



  
   
  
}
