import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FilterComponent } from "../../filter/filter.component";
import { FooterComponent } from "../home/footer/footer.component";
import { NavbarComponent } from "../home/navbar/navbar.component";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  imports: [CommonModule, FooterComponent, NavbarComponent],
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
  products = [
    {
      id: 1,
      name: 'Midnight Mystique',
      description: 'A deep, enigmatic blend of oriental spices and dark woods',
      price: 299,
      image: 'https://images.unsplash.com/photo-1592945403244-b3faa7b3bc0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80'
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
      image: 'https://images.unsplash.com/photo-1616604847462-ed01c8457d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80'
    }
  ];
}
