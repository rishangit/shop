import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingMainComponent } from './components/setting-main/setting-main.component';
import { Routes, RouterModule } from '@angular/router';


export const setingRoutes: Routes = [
  {
    path: '', component: SettingMainComponent,
    children: [
      //{ path: '',   redirectTo: 'new', pathMatch: 'prefix' },
      // { path: 'list', component: ProductsListComponent },
      //{ path: 'new', component: NewBillingComponent }
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(setingRoutes),
  ],
  declarations: [SettingMainComponent]
})
export class SettingModule { }
