import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ToastrService } from 'ngx-toastr';

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
      stock : 'In Stock',
      title: 'HP Laptop',
      price: 99.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      // image: 'https://via.placeholder.com/300x200',
      image  : "assets/image/hp-laptop2.jpg"
    },
    {
      stock : 'In Stock',
      title: 'Product 2',
      price: 149.99,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      //image: 'https://via.placeholder.com/300x200'
      image  : "assets/image/2.jpg"
    },
    
  
    {
      stock : 'In Stock',
      title: 'Product 4',
      price: 199.99,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
     // image: 'https://via.placeholder.com/300x200'
      image  : "assets/image/5.jpg"
    },
    {
      stock : 'In Stock',
      title: 'Product 4',
      price: 199.99,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
     // image: 'https://via.placeholder.com/300x200'
      image  : "assets/image/17.jpg"
    }
  ];

  constructor(private toastr: ToastrService){}

  doSuccess(){
    this.toastr.success('Hello Word! Toastr Success', 'Success')
  }

  addToCart(product: any) {
    console.log('Product added to cart:', product);
    this.toastr.success('Hello Word! Toastr Success', 'Success')
  }

}
