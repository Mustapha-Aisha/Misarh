import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart/cartService/cart.service';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    isDropdownVisible = false;
    cartCount = 0;
    isCartOpen = false; // Controls the sidebar visibility

    constructor(private router: Router, private cartService: CartService) {
        // this.cartService.subscribe((items) => {
        //     this.cartCount = items.length;
        //   });
    }

    toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
    }

    route(route: string) {
        this.router.navigate([route]);
    }
   
  

  
    toggleCartSidebar() {
      this.isCartOpen = !this.isCartOpen;
    }
}
