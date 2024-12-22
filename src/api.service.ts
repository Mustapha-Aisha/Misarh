import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem, ProductEntity } from './product.module';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  //Create product API
  createProduct(data: any): Observable<any> {
    const token = localStorage.getItem("customer"); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`  
    });
    const url = 'http://localhost:4500/products/';
    return this.http.post(url, data, {headers});
  }

  //Register Customer API
  register(data: any) {
    const url = "http://localhost:4500/customer/"
    return this.http.post(url, data)
  }

  //Login as a Customer
  login(loginData: any): Observable<any> {
    console.log(loginData)
    return this.http.post("http://localhost:4500/customer/login", loginData); 
  }

  //Add to cart
  addToCart(payload: any ): Observable<any> {
    const token = localStorage.getItem("customer"); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`  
    });
    return this.http.post('http://localhost:4500/cart/', payload, { headers });
  }

  //Get Customer Cart
  getCart():Observable<any> {
    const token = localStorage.getItem("customer"); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`  
    });
    return this.http.get('http://localhost:4500/cart/', {headers} )
  }

  //Update Product
  updateProduct(productId: string, productData: ProductEntity): Observable<any> {
    const token = localStorage.getItem("customer"); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`  
    });
    return this.http.put(`http://localhost:4500/products/${productId}`, productData, {headers});
  }

  //Remove Cart Item
  removeCartItem(id: string): Observable<any> {
    const token = localStorage.getItem('customer'); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, 
    });
    return this.http.delete(`http://localhost:4500/cart-item/${id}`, { headers });
  }

  //Checkout Customer Cart
  checkoutCart(total: string): Observable<any>{
    const token = localStorage.getItem('customer'); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, 

    });
    const body = { total };
    return this.http.post('http://localhost:4500/cart/checkout', body, {headers})
  }

  // updateCustomer ()
}


