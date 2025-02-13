import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ApiService } from './api.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PageLoaderService } from '../shared/page-loader/page-loader.service';
import { NavbarComponent } from "./home/navbar/navbar.component";
import { FooterComponent } from "./home/footer/footer.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { CartService } from './cart/cartService/cart.service';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // RouterModule.forChild(routes)
    ,
    NavbarComponent,
    FooterComponent,
    TestimonialComponent
],

  providers: [ApiService, PageLoaderService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}

