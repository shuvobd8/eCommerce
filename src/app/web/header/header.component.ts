import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartService } from '../../core/service/cart.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../core/service/user.service';
import { FormsModule } from '@angular/forms';
import { LoginDto } from '../../core/classes/LoginDto';
import { ApiResponseModel } from '../../core/classes/api-response.model';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../core/classes/user';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductListComponent,RouterLink,CommonModule,MatMenuModule,MatButtonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
// [x: string]: any;
cartItemCount: number = 0;
  router: any;
  LoginObj: LoginDto = new LoginDto();
  userObj:any;
  receivedUrl: any;

constructor(private cartSrv:CartService,private user:UserService,private toastr: ToastrService,private route:Router){}

  ngOnInit(): void {
    this.cartSrv.getCartItems().subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.stock_quantity, 0);
    });

    this.receivedUrl = this.router.getCurrentNavigation();
    //this.receivedUrl = navigation?.extras.state?.example;
    
  }


  isLoggedIn: boolean = false;
  username: string = '';

  login() {
    this.user.login(this.LoginObj).subscribe((res:ApiResponseModel)=>{
      if(res.vCode=="1"){
        this.userObj = res.data;
        sessionStorage.setItem('token', this.userObj.token);
        sessionStorage.setItem('user', JSON.stringify(this.userObj));

        const redirectUrl = sessionStorage.getItem('redirectUrl') || '/';
        sessionStorage.removeItem('redirectUrl');
        alert(redirectUrl)
        this.router.navigate([redirectUrl]);
        
      }else{
        this.toastr.error(res.vMsg,'Error Message')
      }
    },error=>{
      this.toastr.error(JSON.stringify(error),'Error Message')
    })
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
