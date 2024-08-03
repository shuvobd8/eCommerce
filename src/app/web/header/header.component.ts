import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartService } from '../../core/service/cart.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductListComponent,RouterLink,CommonModule,MatMenuModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
// [x: string]: any;
cartItemCount: number = 0;
  router: any;

constructor(private cartSrv:CartService){}

  ngOnInit(): void {
    this.cartSrv.getCartItems().subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.stock_quantity, 0);
    });
  }


  isLoggedIn: boolean = false;
  username: string = '';

  login() {
 
    // Simulated login logic
    this.isLoggedIn = true;
    this.username = 'John Doe'; // Replace with actual username retrieved from authentication
    
    // Store login status in local storage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', this.username);
  }

  logout() {
 
    // Simulated logout logic
    this.isLoggedIn = false;
    this.username = '';
    
    // Clear local storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
 
  
  }


}
