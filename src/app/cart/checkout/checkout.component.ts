import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarComponent } from "../../home/navbar/navbar.component";
import { FooterComponent } from "../../home/footer/footer.component";

@Component({
  selector: 'app-order-summary',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  standalone: true,
  imports: [NavbarComponent, FooterComponent]
})
export class OrderSummaryComponent {
 
}
