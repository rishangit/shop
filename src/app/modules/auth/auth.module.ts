import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AuthRoutes } from './auth.routes';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthMainComponent } from './components/auth-main/auth-main.component';

import { HttpCallService } from '../../shared/services/http-call.service'
import { LoginService } from './components/login/login.service';
import { SettingService } from '../setting/services/setting.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpCallService, LoginService, SettingService],
  declarations: [LoginComponent, SignupComponent, AuthMainComponent],

})
export class AuthModule { }
