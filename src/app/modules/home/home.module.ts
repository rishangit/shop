import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { homeRoutes } from './home.routes';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeComponent } from './components/home/home.component';

import { SharedCommonModule } from '../../shared/modules/shared-common/shared-common.module';
import { HomeNaviComponent } from './components/home-navi/home-navi.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SharedCommonModule,
  ],
  exports: [
    RouterModule
],
  declarations: [HomeMainComponent, HomeComponent, HomeNaviComponent]
})
export class HomeModule { }
