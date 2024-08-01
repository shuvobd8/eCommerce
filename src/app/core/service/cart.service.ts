import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);

  constructor(private cookieService: CookieService) {
    this.loadCartFromCookies();
  }

  // private saveCartToCookies() {
  //   const expiryDate = new Date();
  //   expiryDate.setTime(expiryDate.getTime() + (1 * 60 * 1000));
  //   //expiryDate.setDate(expiryDate.getDate() + 10);
  //   this.cookieService.set('cart', JSON.stringify(this.cartItems));
  // }

  private saveCartToCookies() {
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + 5); // Set the cookie to expire in 1 minute
    this.cookieService.set('cart', JSON.stringify(this.cartItems), { expires: expiryDate });
  }

  private loadCartFromCookies() {
    const cartCookie = this.cookieService.get('cart');
    if (cartCookie) {
      this.cartItems = JSON.parse(cartCookie);
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(product: Product) {
    const item = this.cartItems.find(item => item.product_id === product.product_id);
    if (item) {
      item.stock_quantity += 1;
    } else {
      this.cartItems.push({ ...product, stock_quantity: 1 });
    }
    this.cartItemsSubject.next(this.cartItems);
    this.saveCartToCookies();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.product_id !== productId);
    this.cartItemsSubject.next(this.cartItems);
    this.saveCartToCookies();
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
    this.saveCartToCookies();
  }
}
