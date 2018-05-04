import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BillingMainComponent } from './components/billing-main/billing-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBillingComponent } from './components/new-billing/new-billing.component';
import { BillingFormComponent } from './components/billing-form/billing-form.component';
import { BillingInfoComponent } from './components/billing-info/billing-info.component';
import { BillingService } from './services/billing.service';
import { StockService } from '../stocks/services/stock.service';
import { ProductsService } from '../product/services/products.service';
import { GetObjectModule } from '../../shared/modules/get-object/get-object.module';

export const billingRoutes: Routes = [
  {
    path: '', component: BillingMainComponent,
    children: [
      { path: '',   redirectTo: 'new', pathMatch: 'prefix' },
      // { path: 'list', component: ProductsListComponent },
      { path: 'new', component: NewBillingComponent }
    ]
  },
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(billingRoutes),
    FormsModule,
    ReactiveFormsModule,
    GetObjectModule
  ],
  declarations: [BillingMainComponent, NewBillingComponent, BillingFormComponent, BillingInfoComponent],
  providers:[ProductsService,StockService,BillingService]
  
})
export class BillingModule { }
