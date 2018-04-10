import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { homeRoutes } from './home.routes';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeComponent } from './components/home/home.component';

import { HomeNaviComponent } from './components/home-navi/home-navi.component'
import { HeaderModule } from '../../shared/modules/header/header.module';
import { SliderModule } from '../../shared/modules/slider/slider.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    HeaderModule,
    SliderModule
  ],
  exports: [
    RouterModule
],
  declarations: [HomeMainComponent, HomeComponent, HomeNaviComponent]
})
export class HomeModule { }
