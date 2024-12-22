import { Routes } from '@angular/router';
import { AboutUsComponent } from '../about_us/about-us.component';
import { AuthComponent } from '../auth/auth.component';
import { CartComponent } from '../cart/cart.component';
import { OrderConfirmationModalComponent } from '../cart/order-confirmation-modal/order-confirmation-modal.component';
import { HomeComponent } from '../home/home.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'homer',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutUsComponent
            },
            {
                path: 'product-details',
                component: ProductDetailsComponent
            },
            {
                path: 'auth',
                component: AuthComponent
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'order-confirmation',
                component: OrderConfirmationModalComponent
            },
            {
                path: '**', redirectTo: 'home',
            }
        ]
    }

]
