import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);
  constructor() { }

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
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.product_id !== productId);
    this.cartItemsSubject.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }

}
