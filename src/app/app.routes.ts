import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about_us/about-us.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmationModalComponent } from './cart/order-confirmation-modal/order-confirmation-modal.component';
import { AuthComponent } from './auth/auth.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-confirmation', component: OrderConfirmationModalComponent },
  { path: '**', redirectTo: 'home' }
];


// import {RouterModule, Routes} from '@angular/router';


// const routes: Routes = [
//   {
//     path: '',
//         children: [
//           { path: '', redirectTo: 'login', pathMatch: 'full' },
//         //   { path: 'login', component: LoginComponent },
//         //   { path: 'playground', loadChildren: () => import('./playground/playground.module').then(m => m.PlaygroundModule) },
          
//         //   { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
//         //   { path: 'card-generator', canActivate: [AuthGuard], loadChildren: () => import('./id-card-generator/id-card-generator.module').then(m => m.IdCardGeneratorModule) },
//         //   { path: 'capture', canActivate: [AuthGuard], loadChildren: () => import('./capture/capture.module').then(m => m.CaptureModule) },
//         //   { path: 'verifier', canActivate: [AuthGuard], loadChildren: () => import('./verifier/verifier.module').then(m => m.VerifierModule) },
//         //   { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
//         //   { path: 'setup', canActivate: [AuthGuard], loadChildren: () => import('./setup/setup.module').then(m => m.SetupModule) },
//         //   { path: 'email-templates', canActivate: [AuthGuard], loadChildren: () => import('./email-template/email.template.module').then(m => m.EmailTemplateModule) },
//         //   {
//         //     path: 'not-found',
//         //     component: NotFoundComponent
//         //   },
//         ]
//   },
//   { path: '**', redirectTo: 'login' },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
