import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about_us/about-us.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmationModalComponent } from './cart/order-confirmation-modal/order-confirmation-modal.component';
import { AuthComponent } from './auth/auth.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import {  OrderHistoryComponent } from './order-history/order-history.component';
import { ManageFragranceComponent } from './manage-fragrance/manage-fragrance.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FilterComponent } from '../filter/filter.component';
import { OrderSummaryComponent } from './cart/checkout/checkout.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping-form', component: ShippingFormComponent },
  { path: 'order-confirmation', component: OrderConfirmationModalComponent },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'manage-fragrance', component: ManageFragranceComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'checkout', component: OrderSummaryComponent },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
