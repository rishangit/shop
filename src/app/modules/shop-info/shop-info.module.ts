import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormElementModule } from '../../shared/modules/form-element/form-element.module';

import { ShopInfoMainComponent } from './components/shop-info-main/shop-info-main.component';
import { ShopLocationComponent } from './components/shop-location/shop-location.component';
import { ShopDetailsComponent } from './components/shop-details/shop-details.component';

import { HttpCallService } from '../../shared/services/http-call.service';
import { ShopInfoService } from './services/shop-info.service';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { NewShopComponent } from './components/new-shop/new-shop.component';
export const shopInfoRoutes: Routes = [
  {
    path: '', component: ShopInfoMainComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'prefix' },
      { path: 'list', component: ShopListComponent },
      { path: 'newshop', component: NewShopComponent }
    ]
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(shopInfoRoutes),
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQoUOMQsxvGcsn1UbyL8EQ_Fvyy9ShQTQ',
      libraries: ['places']
    }),
    FormElementModule,
  ],
  declarations: [ShopInfoMainComponent, ShopLocationComponent, ShopDetailsComponent, ShopListComponent, NewShopComponent],
  providers: [HttpCallService, ShopInfoService]
})
export class ShopInfoModule { }
