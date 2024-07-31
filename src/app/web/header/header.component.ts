import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
[x: string]: any;



}
