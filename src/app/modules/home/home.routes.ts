import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from '../../shared/guards/auth.guard';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeComponent } from './components/home/home.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeMainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'shopinfo', loadChildren: '../shop-info/shop-info.module#ShopInfoModule' },
      { path: 'product', loadChildren: '../product/product.module#ProductModule' },
      { path: 'stocks', loadChildren: '../stocks/stocks.module#StocksModule' },
      { path: 'billing', loadChildren: '../billing/billing.module#BillingModule' },
      { path: 'setting', loadChildren: '../setting/setting.module#SettingModule' },
      
    ]
  }
];