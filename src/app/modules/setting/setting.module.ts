import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingMainComponent } from './components/setting-main/setting-main.component';
import { Routes, RouterModule } from '@angular/router';
import { SettingBillingComponent } from './components/setting-billing/setting-billing.component';
import { SettingThemeComponent } from './components/setting-theme/setting-theme.component';


export const setingRoutes: Routes = [
  {
    path: '', component: SettingMainComponent,
    children: [
      { path: '',   redirectTo: 'billing', pathMatch: 'prefix' },
       { path: 'billing', component: SettingBillingComponent },
       { path: 'theme', component: SettingThemeComponent },
      //{ path: 'new', component: NewBillingComponent }
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(setingRoutes),
  ],
  declarations: [SettingMainComponent, SettingBillingComponent, SettingThemeComponent]
})
export class SettingModule { }
