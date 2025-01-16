import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    isDropdownVisible = false;

    constructor(private router: Router) {}

    toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
    }

    route(route: string) {
        this.router.navigate([route]);
    }
    // toggleCart() {

       
    //     this.cartservuce.isCartOpen = !this.cartservuce.isCartOpen;
    //     console.log('Cart toggled');

    // }
}
