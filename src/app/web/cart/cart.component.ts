import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../core/classes/product';
import { CartService } from '../../core/service/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  products:Product []=[];
  cartServive = inject(CartService)

  constructor(){}
  ngOnInit(): void {
    this.cartServive.getCartItems().subscribe(item=>{
      this.products = item;
      //alert(JSON.stringify(this.products))
    })
  }

  removeProduct(productId: number): void {
    const confirmed = confirm("Are you sure you want to remove this product from the cart?");
    if (confirmed) {
      this.cartServive.removeFromCart(productId);
    }
  }

  onQuantityChange(event: Event, product: any): void {
    const inputElement = event.target as HTMLInputElement;
    let selectedQuantity = +inputElement.value; 
    if (selectedQuantity < 1) {
      selectedQuantity = 1;
      inputElement.value = '1';
    }

    const index = this.products.findIndex(p => p.product_id === product.product_id);
    if (index !== -1) {
      this.products[index].stock_quantity = selectedQuantity;
    }
  }
  

}
