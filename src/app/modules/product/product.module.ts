import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductMainComponent } from './components/product-main/product-main.component';
import { NewItemComponent } from './components/new-item/new-item.component';
//services
import { ProductsService } from './services/products.service';
import { HttpCallService } from '../../shared/services/http-call.service';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { GetObjectModule } from '../../shared/modules/get-object/get-object.module';

export const productRoutes: Routes = [
  {
    path: '', component: ProductMainComponent,
    children: [
      { path: '',   redirectTo: 'list', pathMatch: 'prefix' },
      { path: 'list', component: ProductsListComponent },
      { path: 'newproduct', component: NewItemComponent }
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    FormsModule,
    ReactiveFormsModule,
    GetObjectModule
  ],
  declarations: [ProductMainComponent, NewItemComponent, ProductsListComponent],
  providers: [ProductsService,HttpCallService]
})
export class ProductModule { }
