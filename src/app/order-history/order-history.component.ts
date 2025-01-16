import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { FooterComponent } from "../home/footer/footer.component";
import { NavbarComponent } from '../home/navbar/navbar.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
  imports: [
    CommonModule, 
    FooterComponent, 
    NavbarComponent,
  ],

  // animations: [
  //   trigger('fadeAnimation', [
  //     transition(':enter', [
  //       style({ opacity: 0, transform: 'translateY(20px)' }),
  //       animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  //     ]),
  //     transition(':leave', [
  //       animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' })),
  //     ]),
  //   ]),
  // ],
})
export class OrderHistoryComponent implements OnInit {
  orders: any[] = [{
    id: 1,
    order_number: '123456',
    total: 123,
    created_at: '2021-04-01',
    status: 'completed',
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 123,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 123,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      },
    ],
  },
  {
    id: 2,
    order_number: '123456',
    total: 123,
    created_at: '2021-04-01',
    status: 'completed',
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 123,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 123,
        quantity: 1,
        image: 'https://via.placeholder.com/150',
      },
    ],
  }];
  loading: boolean = true;
  error: string | null = null;
  constructor( private apiService: ApiService){}

  ngOnInit(): void {
    this.fetchOrders()
  }
  activeTab: string = 'subscription';

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  fetchOrders(): void { 
    console.log("HEKOO")

    // this.apiService.getOrders().subscribe({
    //   next: (data) => {
    //     console.log(data.data.data)
    //     this.orders = data.data.data; 
    //   },
    //   error: (err) => {
    //    console.log(err)
    //   }
    // });
  }
  
}