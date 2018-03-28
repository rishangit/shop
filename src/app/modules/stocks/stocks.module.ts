import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StocksMainComponent } from './components/stocks-main/stocks-main.component';
import { NewItemsComponent } from './components/new-items/new-items.component';
import { StockListComponent } from './components/stock-list/stock-list.component';

//services
import { ProductsService } from '../product/services/products.service'
import { HttpCallService } from '../../shared/services/http-call.service';
import { StockService } from './services/stock.service';
import { GetObjectModule } from '../../shared/modules/get-object/get-object.module';


export const productRoutes: Routes = [
  {
    path: '', component: StocksMainComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'prefix' },
      { path: 'list', component: StockListComponent },
      { path: 'newitems', component: NewItemsComponent }

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
  declarations: [StocksMainComponent, NewItemsComponent, StockListComponent],
  providers: [ProductsService, HttpCallService, StockService]
})
export class StocksModule { }
