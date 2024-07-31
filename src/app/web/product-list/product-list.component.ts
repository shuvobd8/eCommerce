import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../core/service/product.service';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../../core/classes/api-response.model';
import { Product } from '../../core/classes/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private toastr: ToastrService,private productSrv:ProductService){}
  ngOnInit(): void {
    this. getProducts();
  }

  getProducts(){
    this.productSrv.getProducts().subscribe((res:ApiResponseModel)=>{
      if(res.vCode=="1")
      {
        this.products = res.data;
      }else{
        this.toastr.error(res.vMsg,'Error Message')
      }
    },error=>{
      this.toastr.error(error,'Error Message')
    })
  }

  addToCart(product: any) {
    console.log('Product added to cart:', product);
    this.toastr.success('Hello Word! Toastr Success', 'Success')
  }

}
