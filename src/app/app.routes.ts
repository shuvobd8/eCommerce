import { Routes } from '@angular/router';
import { LayoutComponent } from './web/layout/layout.component';
import { ProductListComponent } from './web/product-list/product-list.component';

export const routes: Routes = [
    {
       path:'',
       component:LayoutComponent,
       children:[
        { path:'',component:ProductListComponent}
       ]        
    },
    { path: '**', redirectTo: '' }
];
