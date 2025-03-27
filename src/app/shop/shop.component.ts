import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FilterComponent } from "../../filter/filter.component";
import { FooterComponent } from "../home/footer/footer.component";
import { NavbarComponent } from "../home/navbar/navbar.component";
import { CartService } from '../cart/cartService/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  imports: [CommonModule, FooterComponent, NavbarComponent, ],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class ShopComponent {
  constructor(private cartService: CartService) {}
  selectedProduct: any = null;
  products = [
    {
      id: 1,
      name: 'Midnight Mystique',
      description: 'A deep, enigmatic blend of oriental spices and dark woods',
      price: 299,
      image: 'https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Solar Essence',
      description: 'Bright citrus notes merged with warm amber undertones',
      price: 249,
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80'
    },
    {
      id: 3,
      name: 'Royal Oud',
      description: 'Premium oud wood infused with royal spices',
      price: 399,
      image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80'
    },
    {
      id: 4,
      name: 'Ocean Breeze',
      description: 'Fresh aquatic notes with a hint of coastal flowers',
      price: 279,
      image: 'https://images.pexels.com/photos/29614397/pexels-photo-29614397/free-photo-of-elegant-perfume-bottle-on-sand-dunes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      name: 'Midnight Mystique',
      description: 'A deep, enigmatic blend of oriental spices and dark woods',
      price: 299,
      image: 'https://images.unsplash.com/photo-1615160460524-432433ba1b8f?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 6,
      name: 'Solar Essence',
      description: 'Bright citrus notes merged with warm amber undertones',
      price: 249,
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80'
    },
    {
      id: 7,
      name: 'Royal Oud',
      description: 'Premium oud wood infused with royal spices',
      price: 399,
      image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80'
    },
    {
      id: 8,
      name: 'Ocean Breeze',
      description: 'Fresh aquatic notes with a hint of coastal flowers',
      price: 279,
      image: 'https://images.pexels.com/photos/29614397/pexels-photo-29614397/free-photo-of-elegant-perfume-bottle-on-sand-dunes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  addToCart(id: number): void {
    const payload = {
      product: id,
      quantity: 1,
    }

    
    this.cartService.addToCart(payload);
  }
}
