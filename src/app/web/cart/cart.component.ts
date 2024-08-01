import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../core/classes/product';
import { CartService } from '../../core/service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
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

}
