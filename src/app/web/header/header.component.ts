import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartService } from '../../core/service/cart.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductListComponent,RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
// [x: string]: any;
cartItemCount: number = 0;

constructor(private cartSrv:CartService){}

  ngOnInit(): void {
    this.cartSrv.getCartItems().subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.stock_quantity, 0);
    });
  }


}
