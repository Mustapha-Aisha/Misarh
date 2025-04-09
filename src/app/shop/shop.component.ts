import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FilterComponent } from "../../filter/filter.component";
import { FooterComponent } from "../home/footer/footer.component";
import { NavbarComponent } from "../home/navbar/navbar.component";
import { CartService } from '../cart/cartService/cart.service';
import { ApiService } from '../api.service';
import { ProductEntity } from '../products/product.module';
import { Router } from '@angular/router';

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
export class ShopComponent implements OnInit {
  constructor(private cartService: CartService, private viewportScroller: ViewportScroller,private apiService: ApiService, private router: Router) {}
  selectedProduct: any = null;
  products: ProductEntity[] = [];
 
  ngOnInit(): void {
    // Fetch products from the API
    this.apiService.getProducts().subscribe((data) => {
      console.log(data.data);
      this.products = data.data;
      this.products.forEach((product) => {
        product.image_url = product.image_url || 'https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load';
      });
    })
  }

  addToCart(product: any): void {
    const payload = {
      productId: product.id,
      quantity: 1,
    }
    console.log("Adding to cart:", payload);    
    this.cartService.addToCart(payload);
  }

  goToAISection(): void {
    this.router.navigate(['/'], { fragment: 'ai-section' }).then(() => {
      // Delay to ensure the HomeComponent is fully loaded
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor('ai-section');
      }, 100);
    });
  }
}
