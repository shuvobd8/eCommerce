import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eCommerce';

  constructor(private toastr: ToastrService){}

  doSuccess(){
    this.toastr.success('Hello Word! Toastr Success', 'Success')
  }
}
