import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {
      title: 'Product 1',
      price: 99.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Product 2',
      price: 149.99,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Product 3',
      price: 199.99,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  addToCart(product: any) {
    console.log('Product added to cart:', product);
  }

}
